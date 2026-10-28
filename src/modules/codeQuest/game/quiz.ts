import { shuffle } from '../../../utils/shuffle'
import { QUESTIONS, type Question, type QuestionCategory, type QuestionDifficulty } from '../data/questions'
import type { DifficultyFilter, QuizConfig, SessionQuestion } from './types'

export const ALLOWED_QUESTION_COUNTS = [5, 10, 15, 20] as const

export const ALL_DIFFICULTIES: readonly QuestionDifficulty[] = ['easy', 'medium', 'hard']

export const PREDEFINED_MODES: Record<
  'quick' | 'training' | 'challenge',
  Omit<QuizConfig, 'category'> & { label: string; icon: string; description: string }
> = {
  quick: {
    mode: 'quick',
    label: 'Rápido',
    icon: '⚡',
    description: '5 perguntas · Fácil e Médio',
    difficulties: ['easy', 'medium'],
    questionCount: 5,
  },
  training: {
    mode: 'training',
    label: 'Treino',
    icon: '🎯',
    description: '10 perguntas · Médio',
    difficulties: ['medium'],
    questionCount: 10,
  },
  challenge: {
    mode: 'challenge',
    label: 'Desafio',
    icon: '🧠',
    description: '15 perguntas · Médio e Difícil',
    difficulties: ['medium', 'hard'],
    questionCount: 15,
  },
}

export const toDifficulties = (filter: DifficultyFilter): readonly QuestionDifficulty[] =>
  filter === 'all' ? ALL_DIFFICULTIES : [filter]

export const filterQuestions = (
  category: QuestionCategory,
  difficulties: readonly QuestionDifficulty[],
): Question[] =>
  QUESTIONS.filter(
    (question) =>
      question.category === category && difficulties.includes(question.difficulty),
  )

export const countAvailable = (category: QuestionCategory, difficulties: readonly QuestionDifficulty[]): number =>
  filterQuestions(category, difficulties).length

export function buildSessionQuestion(question: Question): SessionQuestion {
  const options = shuffle(
    question.options.map((text, index) => ({
      id: `${question.id}-opt-${index}`,
      text,
      isCorrect: index === question.correctAnswer,
    })),
  )
  const correct = options.find((option) => option.isCorrect)
  return {
    ...question,
    options: options.map(({ id, text }) => ({ id, text })),
    correctAnswer: correct ? correct.id : '',
  }
}

export const buildSessionQuestions = (pool: readonly Question[], count?: number): SessionQuestion[] =>
  (count ? shuffle(pool).slice(0, count) : shuffle(pool)).map(buildSessionQuestion)

export const optionLetter = (index: number): string => String.fromCharCode(65 + index)
