import type { Question, QuestionCategory } from '../data/questions'
import type { QuizMode, QuizSession, SessionQuestion } from './types'

export interface QuizState {
  session: QuizSession | null
}

export type QuizAction =
  | { type: 'start'; mode: QuizMode; category: QuestionCategory; questions: SessionQuestion[] }
  | { type: 'select'; optionId: string }
  | { type: 'confirm'; rawQuestion: Question }
  | { type: 'next' }
  | { type: 'clear' }

export const initialQuizState: QuizState = { session: null }

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  const { session } = state

  switch (action.type) {
    case 'start':
      return {
        session: {
          mode: action.mode,
          category: action.category,
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
          wrongQuestions: correct ? session.wrongQuestions : [...session.wrongQuestions, action.rawQuestion],
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
