import { Box, Modal, Typography } from '../../../components'
import { HEURISTICS, HEURISTIC_IDS } from '../../../modules/heuristics/data/heuristics'
import styles from './HeuristicsSummaryDialog.module.css'

export interface HeuristicsSummaryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HeuristicsSummaryDialog({ open, onOpenChange }: HeuristicsSummaryDialogProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange} title="📖 As 10 heurísticas de Nielsen">
      <Box as="ul" className={styles.list}>
        {HEURISTIC_IDS.map((id) => (
          <Box as="li" key={id} className={styles.item}>
            <Typography variant="label" color="blue-soft-text" size="md">
              {HEURISTICS[id].icon} {HEURISTICS[id].name}
            </Typography>
            <Typography variant="caption">{HEURISTICS[id].description}</Typography>
          </Box>
        ))}
      </Box>
    </Modal>
  )
}
