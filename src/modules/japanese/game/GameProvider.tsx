import { useReducer, type ReactNode } from 'react'
import { GameContext } from './gameContext'
import { gameReducer, initialGameState } from './reducer'

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)
  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
}
