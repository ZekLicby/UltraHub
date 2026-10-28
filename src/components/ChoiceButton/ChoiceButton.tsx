import type { ComponentPropsWithRef } from 'react'
import styles from './ChoiceButton.module.css'

export interface ChoiceButtonProps extends ComponentPropsWithRef<'button'> {
  shape?: 'block' | 'square'
  selected?: boolean
  marked?: boolean
  current?: boolean
  status?: 'correct' | 'incorrect'
}

export function ChoiceButton({
  shape = 'block',
  selected,
  marked,
  current,
  status,
  type = 'button',
  className,
  ...rest
}: ChoiceButtonProps) {
  return (
    <button
      type={type}
      className={[styles.choice, className].filter(Boolean).join(' ')}
      data-shape={shape}
      data-marked={marked || undefined}
      data-status={status}
      aria-pressed={selected}
      aria-current={current ? 'step' : undefined}
      {...rest}
    />
  )
}
