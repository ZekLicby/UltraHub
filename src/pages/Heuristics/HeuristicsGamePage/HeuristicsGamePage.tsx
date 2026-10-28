import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, ConfirmDialog, ProgressBar } from '../../../components'
import { useHeuristicsGame } from '../../../modules/heuristics/game/gameContext'
import { heuristicsPaths } from '../../../navigation/pages'
import { HeuristicsSummaryDialog } from '../HeuristicsSummaryDialog/HeuristicsSummaryDialog'
import { QuestionCard } from '../QuestionCard/QuestionCard'
import { QuestionNavigator } from '../QuestionNavigator/QuestionNavigator'
import styles from './HeuristicsGamePage.module.css'

export function HeuristicsGamePage() {
  const { state, dispatch } = useHeuristicsGame()
  const navigate = useNavigate()
  const [exitOpen, setExitOpen] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const { session } = state
  const [startedWithoutSession] = useState(() => !session || session.rounds.length === 0)

  if (startedWithoutSession || !session) {
    return <Navigate to={heuristicsPaths.practice} replace />
  }

  const total = session.rounds.length
  const answeredFlags = session.answers.map((answer) => answer !== null)
  const answeredCount = answeredFlags.filter(Boolean).length
  const remaining = total - answeredCount
  const finishHint =
    remaining === 0
      ? undefined
      : remaining === 1
        ? 'Falta 1 pergunta para responder antes de finalizar.'
        : `Faltam ${remaining} perguntas para responder antes de finalizar.`

  return (
    <Box as="div" className={styles.screen}>
      <Box as="div" className={styles.top}>
        <ProgressBar
          value={answeredCount}
          max={total}
          label={`${answeredCount} de ${total} respondidas`}
          className={styles.progress}
        />
        <Box as="div" className={styles.actions}>
          <Button variant="ghost" color="gray" size="sm" onClick={() => setExitOpen(true)}>
            🚪 Sair
          </Button>
          <Button variant="outline" color="gray" size="sm" onClick={() => setSummaryOpen(true)}>
            📖 Heurísticas
          </Button>
          <Button
            size="sm"
            disabled={remaining > 0}
            title={finishHint}
            onClick={() => navigate(heuristicsPaths.result)}
          >
            Finalizar quiz
          </Button>
        </Box>
      </Box>
      <QuestionCard
        key={session.current}
        round={session.rounds[session.current]}
        chosenIds={session.answers[session.current]?.chosenIds ?? []}
        onChoose={(id) => dispatch({ type: 'answer', chosenIds: [id] })}
      />
      <QuestionNavigator
        total={total}
        current={session.current}
        answered={answeredFlags}
        onGoTo={(index) => dispatch({ type: 'goTo', index })}
      />
      <HeuristicsSummaryDialog open={summaryOpen} onOpenChange={setSummaryOpen} />
      <ConfirmDialog
        open={exitOpen}
        onOpenChange={setExitOpen}
        title="Sair do quiz?"
        description="O progresso desta tentativa será perdido."
        cancelLabel="Continuar quiz"
        confirmLabel="Sair do quiz"
        confirmColor="red"
        onConfirm={() => navigate(heuristicsPaths.practice)}
      />
    </Box>
  )
}
