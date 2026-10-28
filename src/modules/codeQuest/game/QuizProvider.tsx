import { useReducer, type ReactNode } from 'react'
import { QuizContext } from './quizContext'
import { initialQuizState, quizReducer } from './reducer'

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState)
  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>
}
