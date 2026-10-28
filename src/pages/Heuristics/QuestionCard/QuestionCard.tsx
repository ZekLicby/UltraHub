import { Box, ChoiceButton, Tag, Typography } from '../../../components'
import { HEURISTICS, type HeuristicId } from '../../../modules/heuristics/data/heuristics'
import { KIND_COLORS, KIND_LABELS } from '../../../modules/heuristics/game/rounds'
import type { Round } from '../../../modules/heuristics/game/types'
import { mockups } from '../../../modules/heuristics/mockups/mockups'
import styles from './QuestionCard.module.css'

export interface QuestionCardProps {
  round: Round
  chosenIds: readonly HeuristicId[]
  onChoose: (id: HeuristicId) => void
}

export function QuestionCard({ round, chosenIds, onChoose }: QuestionCardProps) {
  const direct = round.mockup === null

  return (
    <Box as="div" className={styles.card}>
      {round.mockup && (
        <Box as="div" className={styles.mockupArea}>
          {mockups[round.mockup]()}
        </Box>
      )}
      <Typography
        variant="body"
        color={direct ? 'text' : 'text-muted'}
        size={direct ? 'lg' : 'md'}
        weight={direct ? 'semibold' : 'regular'}
      >
        {round.scenario}
      </Typography>
      <Box as="div" className={styles.promptRow}>
        <Tag size="sm" color={KIND_COLORS[round.kind]} uppercase>
          {KIND_LABELS[round.kind]}
        </Tag>
        <Typography variant="body" weight="bold">
          {round.prompt}
        </Typography>
      </Box>
      <Box as="div" className={styles.options} role="group" aria-label="Alternativas">
        {round.optionIds.map((id) => (
          <ChoiceButton key={id} selected={chosenIds.includes(id)} onClick={() => onChoose(id)}>
            {HEURISTICS[id][round.optionField]}
          </ChoiceButton>
        ))}
      </Box>
    </Box>
  )
}
