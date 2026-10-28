import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, PracticeScreen, Typography } from '../../../components'
import { useHeuristicsGame } from '../../../modules/heuristics/game/gameContext'
import { heuristicsPaths } from '../../../navigation/pages'
import { AnswerKey } from '../AnswerKey/AnswerKey'
import styles from './HeuristicsResultPage.module.css'

const finalMessage = (ratio: number): string => {
  if (ratio === 1) return 'Pontuação perfeita! Você domina as 10 heurísticas de Nielsen. 🏆'
  if (ratio >= 0.8) return 'Excelente! Você conhece muito bem as heurísticas de usabilidade.'
  if (ratio >= 0.5) return 'Bom começo! Reveja o gabarito para fixar os conceitos que ficaram confusos.'
  return 'Vale a pena revisar o gabarito com calma — as 10 heurísticas ficam mais claras com a prática.'
}

export function HeuristicsResultPage() {
  const { state } = useHeuristicsGame()
  const navigate = useNavigate()
  const [showKey, setShowKey] = useState(false)
  const { session } = state
  const [startedWithoutSession] = useState(() => !session || session.rounds.length === 0)

  if (startedWithoutSession || !session) {
    return <Navigate to={heuristicsPaths.practice} replace />
  }

  const total = session.rounds.length
  const score = session.answers.filter((answer) => answer?.correct).length

  return (
    <PracticeScreen badge="O Jogo" title="🏁 Fim de jogo!">
      <Typography variant="body" size="lg">
        Você acertou <strong>{score}</strong> de <strong>{total}</strong> perguntas.
      </Typography>
      <Typography variant="caption">{finalMessage(score / total)}</Typography>
      <Box as="div" className={styles.actions}>
        <Button onClick={() => setShowKey((value) => !value)} aria-expanded={showKey}>
          {showKey ? 'Ocultar gabarito' : 'Ver gabarito completo'}
        </Button>
        <Button variant="outline" color="gray" onClick={() => navigate(heuristicsPaths.practice)}>
          Jogar novamente
        </Button>
      </Box>
      {showKey && (
        <Box aria-labelledby="heuristics-answer-key" className={styles.key}>
          <Typography id="heuristics-answer-key" variant="subtitle">
            📖 Gabarito completo
          </Typography>
          <AnswerKey rounds={session.rounds} answers={session.answers} />
        </Box>
      )}
    </PracticeScreen>
  )
}
