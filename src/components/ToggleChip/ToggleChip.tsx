import type { ComponentPropsWithRef, ReactNode } from 'react'
import styles from './ToggleChip.module.css'

export interface ToggleChipProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  selected: boolean
  sample?: ReactNode
  label: ReactNode
  count?: ReactNode
}

export function ToggleChip({
  selected,
  sample,
  label,
  count,
  type = 'button',
  className,
  ...rest
}: ToggleChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={[styles.chip, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {sample && (
        <span className={styles.sample} lang="ja">
          {sample}
        </span>
      )}
      <span className={styles.label}>
        <span aria-hidden="true">{selected ? '☑' : '☐'}</span> {label}
      </span>
      {count && <span className={styles.count}>{count}</span>}
    </button>
  )
}
