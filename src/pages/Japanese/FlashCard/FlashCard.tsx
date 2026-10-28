import type { HTMLAttributes, ReactNode } from 'react'
import styles from './FlashCard.module.css'

export interface FlashCardProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'correct' | 'incorrect'
  corner?: ReactNode
}

export function FlashCard({ status, corner, className, children, ...rest }: FlashCardProps) {
  return (
    <div
      className={[styles.card, className].filter(Boolean).join(' ')}
      data-status={status}
      {...rest}
    >
      {corner && <div className={styles.corner}>{corner}</div>}
      {children}
    </div>
  )
}
