import type { HTMLAttributes, ReactNode } from 'react'
import type { ColorName } from '../../tokens'
import { colorVars } from '../colorVars'
import styles from './Tag.module.css'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  color?: ColorName
  variant?: 'soft' | 'solid' | 'outline'
  size?: 'sm' | 'md'
  uppercase?: boolean
  detail?: ReactNode
}

export function Tag({
  color = 'blue',
  variant = 'soft',
  size = 'md',
  uppercase,
  detail,
  className,
  style,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={[styles.tag, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-uppercase={uppercase || undefined}
      style={{ ...colorVars(color), ...style }}
      {...rest}
    >
      {children}
      {detail !== undefined && (
        <>
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
          <span className={styles.detail}>{detail}</span>
        </>
      )}
    </span>
  )
}
