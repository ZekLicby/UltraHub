import type { ComponentPropsWithRef } from 'react'
import styles from './ChoiceButton.module.css'

export interface ChoiceButtonProps extends ComponentPropsWithRef<'button'> {
  shape?: 'block' | 'square'
  selected?: boolean
  marked?: boolean
  current?: boolean
}

export function ChoiceButton({
  shape = 'block',
  selected,
  marked,
  current,
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
      aria-pressed={selected}
      aria-current={current ? 'step' : undefined}
      {...rest}
    />
  )
}
