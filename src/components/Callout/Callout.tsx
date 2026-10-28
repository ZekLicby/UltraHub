import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Callout.module.css'

export interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'info' | 'success' | 'danger'
  title?: ReactNode
}

export function Callout({ tone = 'info', title, className, children, ...rest }: CalloutProps) {
  return (
    <div className={[styles.callout, className].filter(Boolean).join(' ')} data-tone={tone} {...rest}>
      {title && <p className={styles.title}>{title}</p>}
      {children && <div className={styles.body}>{children}</div>}
    </div>
  )
}
