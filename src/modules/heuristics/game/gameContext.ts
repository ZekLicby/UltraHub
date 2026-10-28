import { createContext, useContext, type Dispatch } from 'react'
import type { GameAction, GameState } from './reducer'

export interface GameContextValue {
  state: GameState
  dispatch: Dispatch<GameAction>
}

export const HeuristicsGameContext = createContext<GameContextValue | null>(null)

export function useHeuristicsGame(): GameContextValue {
  const context = useContext(HeuristicsGameContext)
  if (!context) throw new Error('useHeuristicsGame must be used inside HeuristicsGameProvider')
  return context
}
