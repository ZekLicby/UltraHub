import { createContext, useContext, type Dispatch } from 'react'
import type { QuizAction, QuizState } from './reducer'

export interface QuizContextValue {
  state: QuizState
  dispatch: Dispatch<QuizAction>
}

export const QuizContext = createContext<QuizContextValue | null>(null)

export function useQuiz(): QuizContextValue {
  const context = useContext(QuizContext)
  if (!context) throw new Error('useQuiz must be used inside QuizProvider')
  return context
}
