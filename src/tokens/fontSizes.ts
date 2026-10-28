export const fontSizes = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2.4rem',
  '2xl': '3.2rem',
} as const

export type FontSize = keyof typeof fontSizes
