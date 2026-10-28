import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Box, Button, PracticeScreen, Slider, Typography } from '../../../components'
import { useHeuristicsGame } from '../../../modules/heuristics/game/gameContext'
import {
  MAX_QUESTIONS,
  MIN_QUESTIONS,
  QUESTIONS_STEP,
  buildRounds,
} from '../../../modules/heuristics/game/rounds'
import { heuristicsPaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { HeuristicsSummaryDialog } from '../HeuristicsSummaryDialog/HeuristicsSummaryDialog'
import styles from './HeuristicsPracticePage.module.css'

export function HeuristicsPracticePage() {
  const { state, dispatch } = useHeuristicsGame()
  const navigate = useNavigate()
  const [summaryOpen, setSummaryOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: 'clearSession' })
  }, [dispatch])

  const start = () => {
    dispatch({ type: 'start', rounds: buildRounds(state.quantity) })
    enterFullscreen()
    navigate(heuristicsPaths.game)
  }

  return (
    <PracticeScreen
      backTo={heuristicsPaths.home}
      backLabel="Voltar"
      badge="O Jogo"
      title="🧩 Heurísticas de Nielsen"
    >
      <Box as="div" className={styles.intro}>
        <Typography variant="body">
          Você vai ver situações de interface e precisará identificar{' '}
          <strong>qual heurística de usabilidade de Jakob Nielsen</strong> melhor explica o que está
          acontecendo ali.
        </Typography>
        <Typography variant="body">
          As perguntas misturam situações que <strong>se encaixam</strong> e situações em que uma
          heurística <strong>não se encaixa</strong>, sempre embaralhadas.
        </Typography>
        <Typography variant="body">
          No final, você verá o <strong>gabarito completo</strong>, com explicações sobre cada
          resposta certa e cada resposta errada.
        </Typography>
      </Box>
      <Button variant="soft" onClick={() => setSummaryOpen(true)} fullWidth>
        📖 Ver resumo das heurísticas
      </Button>
      <Box className={styles.config} aria-labelledby="heuristics-quantity">
        <Typography id="heuristics-quantity" variant="label" uppercase>
          Quantidade de perguntas
        </Typography>
        <Slider
          label="Quantidade de perguntas"
          value={state.quantity}
          min={MIN_QUESTIONS}
          max={MAX_QUESTIONS}
          step={QUESTIONS_STEP}
          valueLabel={`${state.quantity} perguntas`}
          onValueChange={(value) => dispatch({ type: 'setQuantity', value })}
        />
        <Typography variant="caption">
          De {MIN_QUESTIONS} a {MAX_QUESTIONS}, em passos de {QUESTIONS_STEP}.
        </Typography>
      </Box>
      <Button fullWidth onClick={start}>
        Iniciar jogo
      </Button>
      <HeuristicsSummaryDialog open={summaryOpen} onOpenChange={setSummaryOpen} />
    </PracticeScreen>
  )
}
