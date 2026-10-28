import { useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'ultrahub-theme'

const readStoredMode = (): ThemeMode => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

const applyMode = (mode: ThemeMode) => {
  if (mode === 'system') delete document.documentElement.dataset.theme
  else document.documentElement.dataset.theme = mode
}

export function useTheme() {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)

  useEffect(() => {
    applyMode(mode)
  }, [mode])

  const setMode = (next: ThemeMode) => {
    try {
      if (next === 'system') localStorage.removeItem(THEME_STORAGE_KEY)
      else localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* storage unavailable: the choice only lasts for this session */
    }
    setModeState(next)
  }

  return { mode, setMode }
}
