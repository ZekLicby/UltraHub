import type { CSSProperties } from 'react'
import type { ColorName } from '../tokens'

export const colorVars = (color: ColorName): CSSProperties =>
  ({
    '--c-solid': `var(--color-${color}-solid)`,
    '--c-solid-hover': `var(--color-${color}-solid-hover)`,
    '--c-soft': `var(--color-${color}-soft)`,
    '--c-soft-text': `var(--color-${color}-soft-text)`,
    '--c-border': `var(--color-${color}-border)`,
  }) as CSSProperties
