import { colors, type ColorName, type Theme } from './colors'

export type SurfaceRole =
  | 'bg'
  | 'surface'
  | 'surface-alt'
  | 'border'
  | 'border-strong'
  | 'text'
  | 'text-muted'
  | 'text-subtle'
  | 'focus'
  | 'on-solid'

export type ColorRoleName = 'solid' | 'solid-hover' | 'soft' | 'soft-text' | 'border'

export type ColorToken = SurfaceRole | `${ColorName}-${ColorRoleName}`

export const surfaceRoles = (theme: Theme): Record<SurfaceRole, string> => {
  const { gray, blue } = colors[theme]
  return theme === 'light'
    ? {
        bg: gray[200],
        surface: gray[100],
        'surface-alt': gray[200],
        border: gray[300],
        'border-strong': gray[400],
        text: gray[800],
        'text-muted': gray[600],
        'text-subtle': gray[500],
        focus: blue[700],
        'on-solid': '#ffffff',
      }
    : {
        bg: gray[800],
        surface: gray[700],
        'surface-alt': gray[900],
        border: gray[600],
        'border-strong': gray[500],
        text: gray[100],
        'text-muted': gray[300],
        'text-subtle': gray[400],
        focus: blue[400],
        'on-solid': '#ffffff',
      }
}

export const colorRoles = (
  theme: Theme,
  name: ColorName,
): Record<ColorRoleName, string> => {
  const s = colors[theme][name]
  if (theme === 'light') {
    return {
      solid: s[name === 'gray' ? 700 : 600],
      'solid-hover': s[name === 'gray' ? 800 : 700],
      soft: s[100],
      'soft-text': s[700],
      border: s[300],
    }
  }
  return {
    solid: s[name === 'gray' ? 400 : 600],
    'solid-hover': s[name === 'gray' ? 300 : 500],
    soft: s[900],
    'soft-text': s[200],
    border: s[700],
  }
}
