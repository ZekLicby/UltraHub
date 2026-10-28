import { useId } from 'react'
import styles from './RadioCardGroup.module.css'

export interface RadioCardOption<T extends string> {
  value: T
  label: string
  disabled?: boolean
}

export interface RadioCardGroupProps<T extends string> {
  legend: string
  options: readonly RadioCardOption<T>[]
  value: T
  onValueChange: (value: T) => void
}

export function RadioCardGroup<T extends string>({
  legend,
  options,
  value,
  onValueChange,
}: RadioCardGroupProps<T>) {
  const name = useId()

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.card} data-disabled={option.disabled || undefined}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              disabled={option.disabled}
              onChange={() => onValueChange(option.value)}
              className={styles.input}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
