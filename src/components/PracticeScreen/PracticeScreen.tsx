import type { ReactNode } from 'react'
import { BackLink } from '../BackLink/BackLink'
import { Box } from '../Box/Box'
import { Tag } from '../Tag/Tag'
import { Typography } from '../Typography/Typography'
import styles from './PracticeScreen.module.css'

export interface PracticeScreenProps {
  backTo?: string
  backLabel?: string
  badge?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function PracticeScreen({
  backTo,
  backLabel,
  badge,
  title,
  subtitle,
  children,
}: PracticeScreenProps) {
  return (
    <Box as="div" className={styles.screen}>
      {backTo && <BackLink to={backTo}>{backLabel ?? 'Voltar'}</BackLink>}
      <Box className={styles.panel}>
        <Box as="header" className={styles.header}>
          {badge && (
            <Tag size="sm" color="blue">
              {badge}
            </Tag>
          )}
          <Typography variant="subtitle" size="xl">
            {title}
          </Typography>
          {subtitle && <Typography variant="caption">{subtitle}</Typography>}
        </Box>
        {children}
      </Box>
    </Box>
  )
}
