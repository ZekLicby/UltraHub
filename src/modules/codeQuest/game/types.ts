import type { Question, QuestionCategory, QuestionDifficulty } from '../data/questions'

export type DifficultyFilter = QuestionDifficulty | 'all'

export type QuizMode = 'quick' | 'training' | 'challenge' | 'custom' | 'review'

export interface QuizConfig {
  mode: QuizMode
  category: QuestionCategory
  difficulties: readonly QuestionDifficulty[]
  questionCount: number
}

export interface SessionOption {
  id: string
  text: string
}

export interface SessionQuestion extends Omit<Question, 'options' | 'correctAnswer'> {
  options: SessionOption[]
  correctAnswer: string
}

export interface QuizSession {
  mode: QuizMode
  category: QuestionCategory
  questions: SessionQuestion[]
  index: number
  selectedId: string | null
  answered: boolean
  correctCount: number
  wrongQuestions: Question[]
}
