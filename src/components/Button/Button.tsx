import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { ColorName } from '../../tokens'
import { colorVars } from '../colorVars'
import styles from './Button.module.css'

export interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'color'> {
  variant?: 'solid' | 'soft' | 'outline' | 'ghost'
  color?: ColorName
  size?: 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'pill'
  fullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export function Button({
  variant = 'solid',
  color = 'blue',
  size = 'md',
  shape = 'rounded',
  fullWidth,
  startIcon,
  endIcon,
  type = 'button',
  className,
  style,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[styles.button, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      data-full-width={fullWidth || undefined}
      style={{ ...colorVars(color), ...style }}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
