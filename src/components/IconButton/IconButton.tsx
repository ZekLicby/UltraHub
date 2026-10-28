import type { ComponentPropsWithRef } from 'react'
import styles from './IconButton.module.css'

export interface IconButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'aria-label'> {
  label: string
  size?: 'sm' | 'md'
  badge?: number
}

export function IconButton({
  label,
  size = 'md',
  badge,
  type = 'button',
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={[styles.button, className].filter(Boolean).join(' ')}
      data-size={size}
      {...rest}
    >
      {children}
      {badge ? (
        <span className={styles.badge} aria-hidden="true">
          {badge > 9 ? '9+' : badge}
        </span>
      ) : null}
    </button>
  )
}
