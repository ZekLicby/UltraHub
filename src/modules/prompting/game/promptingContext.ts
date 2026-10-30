import { createContext, useContext, type Dispatch } from 'react'
import type { PromptingAction, PromptingState } from './reducer'

export interface PromptingContextValue {
  state: PromptingState
  dispatch: Dispatch<PromptingAction>
}

export const PromptingContext = createContext<PromptingContextValue | null>(null)

export function usePrompting(): PromptingContextValue {
  const context = useContext(PromptingContext)
  if (!context) throw new Error('usePrompting must be used inside PromptingProvider')
  return context
}
