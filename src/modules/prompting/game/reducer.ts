import type { PromptingSession, SessionQuestion } from './types'

export interface PromptingState {
  session: PromptingSession | null
}

export type PromptingAction =
  | { type: 'start'; questions: SessionQuestion[] }
  | { type: 'select'; optionId: string }
  | { type: 'confirm' }
  | { type: 'next' }
  | { type: 'clear' }

export const initialPromptingState: PromptingState = { session: null }

export function promptingReducer(state: PromptingState, action: PromptingAction): PromptingState {
  const { session } = state

  switch (action.type) {
    case 'start':
      return {
        session: {
          questions: action.questions,
          index: 0,
          selectedId: null,
          answered: false,
          correctCount: 0,
          wrongQuestions: [],
        },
      }
    case 'select':
      if (!session || session.answered) return state
      return { session: { ...session, selectedId: action.optionId } }
    case 'confirm': {
      if (!session || session.answered || !session.selectedId) return state
      const current = session.questions[session.index]
      const correct = session.selectedId === current.correctAnswer
      return {
        session: {
          ...session,
          answered: true,
          correctCount: session.correctCount + (correct ? 1 : 0),
          wrongQuestions: correct ? session.wrongQuestions : [...session.wrongQuestions, current],
        },
      }
    }
    case 'next':
      if (!session) return state
      return { session: { ...session, index: session.index + 1, selectedId: null, answered: false } }
    case 'clear':
      return { session: null }
  }
}
