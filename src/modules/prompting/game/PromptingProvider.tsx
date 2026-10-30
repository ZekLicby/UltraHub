import { useReducer, type ReactNode } from 'react'
import { PromptingContext } from './promptingContext'
import { initialPromptingState, promptingReducer } from './reducer'

export function PromptingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(promptingReducer, initialPromptingState)
  return <PromptingContext.Provider value={{ state, dispatch }}>{children}</PromptingContext.Provider>
}
