import { useId, useState, type ChangeEvent, type ComponentPropsWithRef, type CSSProperties } from 'react'
import styles from '../Input/Field.module.css'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends ComponentPropsWithRef<'select'> {
  label: string
  options: SelectOption[]
  helperText?: string
  error?: boolean | string
  fullWidth?: boolean
  labelBackground?: string
}

export function Select({
  label,
  options,
  helperText,
  error,
  fullWidth,
  labelBackground,
  id,
  disabled,
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}: SelectProps) {
  const autoId = useId()
  const selectId = id ?? autoId
  const [inner, setInner] = useState(String(defaultValue ?? ''))
  const filled = String(value ?? inner) !== ''
  const message = typeof error === 'string' ? error : helperText
  const helperId = message ? `${selectId}-helper` : undefined
  const fieldStyle = labelBackground
    ? ({ '--field-label-bg': labelBackground, ...style } as CSSProperties)
    : style

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setInner(e.target.value)
    onChange?.(e)
  }

  const valueProps = value !== undefined ? { value } : { defaultValue: defaultValue ?? '' }

  return (
    <div
      className={styles.field}
      data-full-width={fullWidth || undefined}
      data-filled={filled || undefined}
      data-invalid={error ? '' : undefined}
      data-disabled={disabled || undefined}
      style={fieldStyle}
    >
      <div className={styles.box} data-select="">
        <select
          id={selectId}
          className={`${styles.control} ${styles.select}`}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={helperId}
          onChange={handleChange}
          {...valueProps}
          {...rest}
        >
          <option value="" hidden />
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      </div>
      {message && (
        <span id={helperId} className={styles.helper}>
          {message}
        </span>
      )}
    </div>
  )
}
