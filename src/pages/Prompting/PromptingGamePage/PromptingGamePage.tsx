import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import {
  Box,
  Button,
  Callout,
  ChoiceButton,
  CodeBlock,
  ConfirmDialog,
  ProgressBar,
  Tag,
  Typography,
} from '../../../components'
import { optionLetter } from '../../../modules/codeQuest/game/quiz'
import { usePrompting } from '../../../modules/prompting/game/promptingContext'
import type { PromptingSession } from '../../../modules/prompting/game/types'
import { promptingPaths } from '../../../navigation/pages'
import styles from './PromptingGamePage.module.css'

function QuestionView({ session }: { session: PromptingSession }) {
  const { dispatch } = usePrompting()
  const navigate = useNavigate()
  const [hintVisible, setHintVisible] = useState(false)
  const question = session.questions[session.index]
  const isLast = session.index === session.questions.length - 1
  const correct = session.selectedId === question.correctAnswer

  const primaryAction = () => {
    if (!session.answered) dispatch({ type: 'confirm' })
    else if (isLast) navigate(promptingPaths.result)
    else dispatch({ type: 'next' })
  }

  return (
    <Box className={styles.panel} aria-labelledby="question-text">
      {question.code && <CodeBlock code={question.code} />}
      <Typography id="question-text" as="h1" variant="subtitle" size="lg">
        {question.question}
      </Typography>
      {!session.answered && (
        <Box as="div" className={styles.hint}>
          {hintVisible ? (
            <Callout>💡 Dica: {question.hint}</Callout>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => setHintVisible(true)}>
              💡 Mostrar dica
            </Button>
          )}
        </Box>
      )}
      <Box as="div" className={styles.options} role="group" aria-label="Alternativas">
        {question.options.map((option, index) => {
          const selected = option.id === session.selectedId
          const isCorrectOption = option.id === question.correctAnswer
          const status = session.answered
            ? isCorrectOption
              ? 'correct'
              : selected
                ? 'incorrect'
                : undefined
            : undefined
          return (
            <ChoiceButton
              key={option.id}
              selected={selected}
              status={status}
              disabled={session.answered}
              onClick={() => dispatch({ type: 'select', optionId: option.id })}
            >
              <Box as="div" className={styles.option}>
                <Typography as="span" weight="bold" color="inherit">
                  {optionLetter(index)})
                </Typography>
                <Typography as="span" color="inherit" className={styles.optionText}>
                  {option.text}
                </Typography>
                {status === 'correct' && (
                  <Tag size="sm" color="green">
                    ✅ Resposta correta
                  </Tag>
                )}
                {status === 'incorrect' && (
                  <Tag size="sm" color="red">
                    ❌ Sua resposta
                  </Tag>
                )}
                {!session.answered && selected && (
                  <Tag size="sm" color="blue">
                    Selecionada
                  </Tag>
                )}
              </Box>
            </ChoiceButton>
          )
        })}
      </Box>
      {session.answered && (
        <Callout
          tone={correct ? 'success' : 'danger'}
          title={correct ? '✅ Resposta correta!' : '❌ Resposta incorreta.'}
          role="status"
        >
          {question.explanation}
        </Callout>
      )}
      <Button fullWidth disabled={!session.answered && !session.selectedId} onClick={primaryAction}>
        {!session.answered ? 'Confirmar resposta' : isLast ? 'Ver resultado' : 'Próxima pergunta'}
      </Button>
    </Box>
  )
}

export function PromptingGamePage() {
  const { state } = usePrompting()
  const navigate = useNavigate()
  const [exitOpen, setExitOpen] = useState(false)
  const { session } = state
  const [startedWithoutSession] = useState(() => !session || session.questions.length === 0)

  if (startedWithoutSession || !session) {
    return <Navigate to={promptingPaths.practice} replace />
  }

  const total = session.questions.length
  const current = session.index + 1

  return (
    <Box as="div" className={styles.screen}>
      <Box as="div" className={styles.top}>
        <Box as="div" className={styles.progress}>
          <ProgressBar value={current} max={total} label={`Questão ${current} de ${total}`} showPercentage />
        </Box>
        <Button variant="ghost" color="gray" size="sm" onClick={() => setExitOpen(true)}>
          Sair do quiz
        </Button>
      </Box>
      <QuestionView key={session.questions[session.index].id} session={session} />
      <ConfirmDialog
        open={exitOpen}
        onOpenChange={setExitOpen}
        title="Tem certeza que deseja sair?"
        description="O progresso desta sessão será perdido."
        cancelLabel="Continuar quiz"
        confirmLabel="Sair"
        confirmColor="red"
        onConfirm={() => navigate(promptingPaths.practice)}
      />
    </Box>
  )
}
