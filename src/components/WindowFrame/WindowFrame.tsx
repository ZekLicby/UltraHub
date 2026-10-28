import type { HTMLAttributes, ReactNode } from 'react'
import type { Spacing } from '../../tokens'
import styles from './WindowFrame.module.css'

export interface WindowFrameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  controls?: 'neutral' | 'colorful'
  padding?: Spacing
}

export function WindowFrame({
  title,
  controls = 'neutral',
  padding = 4,
  className,
  children,
  ...rest
}: WindowFrameProps) {
  return (
    <div className={[styles.window, className].filter(Boolean).join(' ')} {...rest}>
      <div className={styles.titleBar}>
        <div className={styles.controls} data-controls={controls} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body} style={{ padding: `var(--space-${padding})` }}>
        {children}
      </div>
    </div>
  )
}
