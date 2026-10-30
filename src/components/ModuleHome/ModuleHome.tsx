import { BookOpen, Pencil } from 'lucide-react'
import { ActionCard } from '../ActionCard/ActionCard'
import { Box } from '../Box/Box'
import { CardGrid } from '../CardGrid/CardGrid'
import { Tag } from '../Tag/Tag'
import { Typography } from '../Typography/Typography'
import styles from './ModuleHome.module.css'

export interface ModuleHomeProps {
  studyDescription: string
  practiceDescription?: string
  practiceTo?: string
  practiceDisabled?: boolean
}

export function ModuleHome({
  studyDescription,
  practiceDescription = 'Pratique o que você estudou',
  practiceTo,
  practiceDisabled,
}: ModuleHomeProps) {
  return (
    <Box as="div" className={styles.home}>
      <Box aria-labelledby="module-activities" className={styles.section}>
        <Typography id="module-activities" variant="subtitle">
          Suas atividades
        </Typography>
        <Box as="div" className={styles.activities} />
      </Box>
      <Box aria-labelledby="module-study-practice" className={styles.section}>
        <Typography id="module-study-practice" variant="subtitle">
          Estude e pratique
        </Typography>
        <CardGrid>
          <ActionCard
            visual={<BookOpen />}
            disabled
            badge={
              <Tag size="sm" color="gray">
                Em breve
              </Tag>
            }
          >
            {studyDescription}
          </ActionCard>
          <ActionCard
            visual={<Pencil />}
            to={practiceTo}
            disabled={practiceDisabled}
            badge={
              practiceDisabled && (
                <Tag size="sm" color="gray">
                  Em breve
                </Tag>
              )
            }
          >
            {practiceDescription}
          </ActionCard>
        </CardGrid>
      </Box>
    </Box>
  )
}
