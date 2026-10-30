import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { Box, Button, PracticeScreen, RadioCardGroup, Typography } from '../../../components'
import { ALLOWED_QUESTION_COUNTS } from '../../../modules/codeQuest/game/quiz'
import { QUESTIONS } from '../../../modules/prompting/data/questions'
import { usePrompting } from '../../../modules/prompting/game/promptingContext'
import { buildSessionQuestions } from '../../../modules/prompting/game/quiz'
import { promptingPaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import styles from './PromptingPracticePage.module.css'

export function PromptingPracticePage() {
  const { dispatch } = usePrompting()
  const navigate = useNavigate()
  const [questionCount, setQuestionCount] = useState<number>(10)

  useEffect(() => {
    dispatch({ type: 'clear' })
  }, [dispatch])

  const countOptions = ALLOWED_QUESTION_COUNTS.map((count) => ({
    value: String(count),
    label: String(count),
    disabled: count > QUESTIONS.length,
  }))

  const submit = (event: FormEvent) => {
    event.preventDefault()
    dispatch({ type: 'start', questions: buildSessionQuestions(QUESTIONS, questionCount) })
    enterFullscreen()
    navigate(promptingPaths.game)
  }

  return (
    <PracticeScreen
      backTo={promptingPaths.home}
      backLabel="Voltar"
      badge="Quiz"
      title="Prompting: escolha seu treino"
      subtitle="Escolha quantas perguntas terá o seu quiz."
    >
      <Box aria-labelledby="prompting-config" className={styles.section}>
        <Typography id="prompting-config" variant="subtitle">
          Monte seu quiz
        </Typography>
        <form className={styles.form} onSubmit={submit} noValidate>
          <RadioCardGroup
            legend="Quantidade"
            options={countOptions}
            value={String(questionCount)}
            onValueChange={(value) => setQuestionCount(Number(value))}
          />
          <Typography variant="caption">Perguntas disponíveis: {QUESTIONS.length}.</Typography>
          <Button type="submit" fullWidth>
            Começar quiz
          </Button>
        </form>
      </Box>
    </PracticeScreen>
  )
}
