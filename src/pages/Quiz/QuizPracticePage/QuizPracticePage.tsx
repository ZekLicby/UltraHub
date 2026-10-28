import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import {
  ActionCard,
  Box,
  Button,
  Callout,
  CardGrid,
  Divider,
  PracticeScreen,
  RadioCardGroup,
  Typography,
} from '../../../components'
import { getQuizCategory } from '../../../modules/codeQuest/categories'
import { QUESTIONS, type QuestionCategory } from '../../../modules/codeQuest/data/questions'
import { useQuiz } from '../../../modules/codeQuest/game/quizContext'
import {
  ALLOWED_QUESTION_COUNTS,
  PREDEFINED_MODES,
  buildSessionQuestions,
  countAvailable,
  filterQuestions,
  toDifficulties,
} from '../../../modules/codeQuest/game/quiz'
import type { DifficultyFilter, QuizConfig } from '../../../modules/codeQuest/game/types'
import { quizPaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import styles from './QuizPracticePage.module.css'

const difficultyOptions = [
  { value: 'easy', label: 'Fácil' },
  { value: 'medium', label: 'Médio' },
  { value: 'hard', label: 'Difícil' },
  { value: 'all', label: 'Todas' },
] as const

export function QuizPracticePage({ category }: { category: QuestionCategory }) {
  const { dispatch } = useQuiz()
  const navigate = useNavigate()
  const paths = quizPaths(category)
  const info = getQuizCategory(category)
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [storedCount, setStoredCount] = useState<number>(10)
  const [warning, setWarning] = useState<string | null>(null)

  useEffect(() => {
    dispatch({ type: 'clear' })
  }, [dispatch])

  const difficulties = toDifficulties(difficulty)
  const available = countAvailable(category, difficulties)
  const total = QUESTIONS.filter((question) => question.category === category).length
  const enabledCounts = ALLOWED_QUESTION_COUNTS.filter((count) => count <= available)
  const effectiveCount = enabledCounts.includes(storedCount as (typeof ALLOWED_QUESTION_COUNTS)[number])
    ? storedCount
    : (enabledCounts[enabledCounts.length - 1] ?? 0)

  const countOptions = ALLOWED_QUESTION_COUNTS.map((count) => ({
    value: String(count),
    label: String(count),
    disabled: count > available,
  }))

  const start = (config: QuizConfig) => {
    const pool = filterQuestions(config.category, config.difficulties)
    if (pool.length < config.questionCount) {
      setWarning(
        `⚠️ Não existem perguntas suficientes para essa configuração. Existem ${pool.length} pergunta(s) disponível(is). Escolha uma quantidade menor ou altere os filtros.`,
      )
      return
    }
    setWarning(null)
    dispatch({
      type: 'start',
      mode: config.mode,
      category: config.category,
      questions: buildSessionQuestions(pool, config.questionCount),
    })
    enterFullscreen()
    navigate(paths.game)
  }

  const submitCustom = (event: FormEvent) => {
    event.preventDefault()
    start({ mode: 'custom', category, difficulties, questionCount: effectiveCount })
  }

  return (
    <PracticeScreen
      backTo={paths.home}
      backLabel="Voltar"
      badge="Quiz"
      title={`${info.label}: escolha seu treino`}
      subtitle="Escolha um modo pronto ou monte seu próprio quiz."
    >
      <Box aria-labelledby="quiz-modes" className={styles.section}>
        <Typography id="quiz-modes" variant="label" uppercase>
          Modos predefinidos
        </Typography>
        <CardGrid>
          {Object.values(PREDEFINED_MODES).map((mode) => (
            <ActionCard
              key={mode.mode}
              visual={
                <Typography as="span" size="2xl" color="inherit">
                  {mode.icon}
                </Typography>
              }
              title={mode.label}
              onClick={() => start({ ...mode, category })}
            >
              {mode.description}
            </ActionCard>
          ))}
        </CardGrid>
      </Box>
      <Divider>ou</Divider>
      <Box aria-labelledby="quiz-custom" className={styles.section}>
        <Typography id="quiz-custom" variant="subtitle">
          Personalizado
        </Typography>
        <form className={styles.form} onSubmit={submitCustom} noValidate>
          <RadioCardGroup
            legend="Dificuldade"
            options={difficultyOptions}
            value={difficulty}
            onValueChange={(value) => {
              setDifficulty(value)
              setWarning(null)
            }}
          />
          <RadioCardGroup
            legend="Quantidade"
            options={countOptions}
            value={String(effectiveCount)}
            onValueChange={(value) => setStoredCount(Number(value))}
          />
          {warning && (
            <Callout tone="info" role="alert">
              {warning}
            </Callout>
          )}
          <Typography variant="caption">
            Perguntas disponíveis com esses filtros: {available} de {total}.
          </Typography>
          <Button type="submit" fullWidth disabled={enabledCounts.length === 0}>
            Começar quiz
          </Button>
        </form>
      </Box>
    </PracticeScreen>
  )
}
