import { useId, type ComponentPropsWithRef } from 'react'
import styles from './Slider.module.css'

export interface SliderProps extends Omit<ComponentPropsWithRef<'input'>, 'type' | 'value' | 'onChange'> {
  label: string
  value: number
  min: number
  max: number
  valueLabel?: string
  onValueChange: (value: number) => void
}

export function Slider({
  label,
  value,
  min,
  max,
  valueLabel,
  onValueChange,
  id,
  className,
  ...rest
}: SliderProps) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <div className={[styles.row, className].filter(Boolean).join(' ')}>
      <input
        id={inputId}
        type="range"
        aria-label={label}
        className={styles.slider}
        min={min}
        max={max}
        value={value}
        onChange={(event) => onValueChange(Number(event.target.value))}
        {...rest}
      />
      <output htmlFor={inputId} className={styles.value}>
        {valueLabel ?? value}
      </output>
    </div>
  )
}
