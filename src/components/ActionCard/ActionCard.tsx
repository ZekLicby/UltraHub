import type { HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './ActionCard.module.css'

export interface ActionCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  visual?: ReactNode
  title?: ReactNode
  badge?: ReactNode
  to?: string
  disabled?: boolean
}

export function ActionCard({
  visual,
  title,
  badge,
  to,
  disabled,
  className,
  children,
  ...rest
}: ActionCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ')
  const content = (
    <>
      {badge && <span className={styles.badge}>{badge}</span>}
      {visual && (
        <span className={styles.visual} aria-hidden="true">
          {visual}
        </span>
      )}
      {title && <span className={styles.title}>{title}</span>}
      {children && <span className={styles.description}>{children}</span>}
    </>
  )

  if (disabled) {
    return (
      <div className={classes} aria-disabled="true" data-disabled="" {...rest}>
        {content}
      </div>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} data-interactive="" {...rest}>
        {content}
      </Link>
    )
  }

  if (rest.onClick) {
    return (
      <button type="button" className={classes} data-interactive="" {...rest}>
        {content}
      </button>
    )
  }

  return (
    <div className={classes} {...rest}>
      {content}
    </div>
  )
}
