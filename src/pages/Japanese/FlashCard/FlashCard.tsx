import type { HTMLAttributes, ReactNode } from 'react'
import { Box } from '../../../components'
import styles from './FlashCard.module.css'

export interface FlashCardProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'correct' | 'incorrect'
  corner?: ReactNode
}

export function FlashCard({ status, corner, className, children, ...rest }: FlashCardProps) {
  return (
    <Box
      as="div"
      className={[styles.card, className].filter(Boolean).join(' ')}
      data-status={status}
      {...rest}
    >
      {corner && (
        <Box as="div" className={styles.corner}>
          {corner}
        </Box>
      )}
      {children}
    </Box>
  )
}
