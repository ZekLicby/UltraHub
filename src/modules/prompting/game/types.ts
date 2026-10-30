import type { PromptQuestion } from '../data/questions'

export interface SessionOption {
  id: string
  text: string
}

export interface SessionQuestion extends PromptQuestion {
  options: SessionOption[]
  correctAnswer: string
}

export interface PromptingSession {
  questions: SessionQuestion[]
  index: number
  selectedId: string | null
  answered: boolean
  correctCount: number
  wrongQuestions: PromptQuestion[]
}
