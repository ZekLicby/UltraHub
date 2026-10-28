export const breakpoints = {
  mobile: 480,
  tablet: 1024,
} as const

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.tablet + 1}px)`,
} as const

export type Screen = keyof typeof mediaQueries
