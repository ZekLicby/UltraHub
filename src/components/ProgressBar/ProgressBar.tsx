import type { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import type { ColorName } from '../../tokens'
import { colorVars } from '../colorVars'
import styles from './ProgressBar.module.css'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  color?: ColorName
  size?: 'sm' | 'md' | 'lg'
  label?: ReactNode
  showPercentage?: boolean
}

export function ProgressBar({
  value,
  max = 100,
  color = 'blue',
  size = 'md',
  label,
  showPercentage,
  className,
  style,
  ...rest
}: ProgressBarProps) {
  const percentage = Math.round(Math.min(Math.max(value / max, 0), 1) * 100)
  const hasHeader = label !== undefined || showPercentage

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')} style={style} {...rest}>
      {hasHeader && (
        <div className={styles.header}>
          <span>{label}</span>
          {showPercentage && <span className={styles.percentage}>{percentage}%</span>}
        </div>
      )}
      <div
        className={styles.track}
        data-size={size}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={typeof label === 'string' ? label : 'Progresso'}
        style={colorVars(color)}
      >
        <div className={styles.fill} style={{ '--progress': `${percentage}%` } as CSSProperties} />
      </div>
    </div>
  )
}
