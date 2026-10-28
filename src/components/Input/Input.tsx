import { useId, type ComponentPropsWithRef, type CSSProperties } from 'react'
import styles from './Field.module.css'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string
  helperText?: string
  error?: boolean | string
  fullWidth?: boolean
  labelBackground?: string
}

export function Input({
  label,
  helperText,
  error,
  fullWidth,
  labelBackground,
  id,
  placeholder,
  disabled,
  style,
  ...rest
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const message = typeof error === 'string' ? error : helperText
  const helperId = message ? `${inputId}-helper` : undefined
  const fieldStyle = labelBackground
    ? ({ '--field-label-bg': labelBackground, ...style } as CSSProperties)
    : style

  return (
    <div
      className={styles.field}
      data-full-width={fullWidth || undefined}
      data-invalid={error ? '' : undefined}
      data-disabled={disabled || undefined}
      style={fieldStyle}
    >
      <div className={styles.box}>
        <input
          id={inputId}
          className={styles.control}
          placeholder={placeholder ?? ' '}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={helperId}
          {...rest}
        />
        <label htmlFor={inputId} className={styles.label}>
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
