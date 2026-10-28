import { createElement, type CSSProperties, type ElementType, type HTMLAttributes } from 'react'
import type { ColorToken, FontSize } from '../../tokens'

export type TypographyVariant = 'display' | 'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'code'
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'

export interface TypographyOwnProps {
  variant?: TypographyVariant
  as?: ElementType
  size?: FontSize
  weight?: FontWeight
  color?: ColorToken | 'inherit'
  align?: CSSProperties['textAlign']
  uppercase?: boolean
  italic?: boolean
  truncate?: boolean
}

export type TypographyProps = TypographyOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof TypographyOwnProps>

const variants: Record<
  TypographyVariant,
  { as: ElementType; size: FontSize; weight: FontWeight; color: ColorToken; extra?: CSSProperties }
> = {
  display: { as: 'h1', size: '2xl', weight: 'bold', color: 'text', extra: { lineHeight: 1.2 } },
  title: { as: 'h2', size: 'xl', weight: 'bold', color: 'text', extra: { lineHeight: 1.25 } },
  subtitle: { as: 'h3', size: 'lg', weight: 'semibold', color: 'text', extra: { lineHeight: 1.3 } },
  body: { as: 'p', size: 'md', weight: 'regular', color: 'text', extra: { lineHeight: 1.5 } },
  caption: { as: 'span', size: 'sm', weight: 'regular', color: 'text-muted', extra: { lineHeight: 1.4 } },
  label: { as: 'span', size: 'sm', weight: 'semibold', color: 'text-muted', extra: { lineHeight: 1.3 } },
  code: {
    as: 'code',
    size: 'sm',
    weight: 'regular',
    color: 'text',
    extra: { fontFamily: 'var(--mono)' },
  },
}

const weights: Record<FontWeight, number> = { regular: 400, medium: 500, semibold: 600, bold: 700 }

export function Typography({
  variant = 'body',
  as,
  size,
  weight,
  color,
  align,
  uppercase,
  italic,
  truncate,
  style,
  ...rest
}: TypographyProps) {
  const v = variants[variant]
  const css: CSSProperties = {
    margin: 0,
    fontSize: `var(--font-size-${size ?? v.size})`,
    fontWeight: weights[weight ?? v.weight],
    color: color === 'inherit' ? 'inherit' : `var(--color-${color ?? v.color})`,
    textAlign: align,
    textTransform: uppercase ? 'uppercase' : undefined,
    letterSpacing: uppercase ? '0.04em' : undefined,
    fontStyle: italic ? 'italic' : undefined,
    ...(truncate && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }),
    ...v.extra,
    ...style,
  }
  return createElement(as ?? v.as, { style: css, ...rest })
}
