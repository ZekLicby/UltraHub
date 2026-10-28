import { colors, type ColorName, type Theme } from './colors'
import { colorRoles, surfaceRoles } from './semantic'
import { spacing } from './spacing'
import { fontSizes } from './fontSizes'
import { radius } from './radius'

const colorNames = Object.keys(colors.light).filter((k) => k !== 'black') as ColorName[]

const themeVars = (theme: Theme): string => {
  const lines: string[] = [`--color-black: ${colors[theme].black};`]
  for (const name of colorNames) {
    for (const [step, value] of Object.entries(colors[theme][name])) {
      lines.push(`--color-${name}-${step}: ${value};`)
    }
    for (const [role, value] of Object.entries(colorRoles(theme, name))) {
      lines.push(`--color-${name}-${role}: ${value};`)
    }
  }
  for (const [role, value] of Object.entries(surfaceRoles(theme))) {
    lines.push(`--color-${role}: ${value};`)
  }
  return lines.join('\n  ')
}

const staticVars = [
  ...Object.entries(spacing).map(([k, v]) => `--space-${k}: ${v}px;`),
  ...Object.entries(fontSizes).map(([k, v]) => `--font-size-${k}: ${v};`),
  ...Object.entries(radius).map(([k, v]) => `--radius-${k}: ${v}px;`),
].join('\n  ')

export const tokensCss = `:root {
  ${staticVars}
  ${themeVars('light')}
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
  ${themeVars('dark')}
  }
}
:root[data-theme="dark"] {
  ${themeVars('dark')}
}
`

export const injectTokens = (): void => {
  if (typeof document === 'undefined' || document.getElementById('ui-tokens')) return
  const style = document.createElement('style')
  style.id = 'ui-tokens'
  style.textContent = tokensCss
  document.head.appendChild(style)
}
