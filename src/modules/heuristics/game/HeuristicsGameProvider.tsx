import { useReducer, type ReactNode } from 'react'
import { HeuristicsGameContext } from './gameContext'
import { gameReducer, initialGameState } from './reducer'

export function HeuristicsGameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)
  return (
    <HeuristicsGameContext.Provider value={{ state, dispatch }}>
      {children}
    </HeuristicsGameContext.Provider>
  )
}
