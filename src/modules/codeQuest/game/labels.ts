import type { QuestionCategory, QuestionDifficulty } from '../data/questions'

export const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  typescript: 'TypeScript',
  node: 'Node.js',
  oop: 'Orientação a Objetos',
}

export const CATEGORY_ICONS: Record<QuestionCategory, string> = {
  typescript: '🔷',
  node: '🟩',
  oop: '🟪',
}

export const DIFFICULTY_LABELS: Record<QuestionDifficulty, string> = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
}

export const DIFFICULTY_ICONS: Record<QuestionDifficulty, string> = {
  easy: '🟢',
  medium: '🟡',
  hard: '🔴',
}

const CLASSIFICATIONS = [
  { min: 90, label: 'Excelente' },
  { min: 70, label: 'Muito bom' },
  { min: 50, label: 'Pode melhorar' },
  { min: 0, label: 'Precisa revisar' },
]

export const calculatePercentage = (correct: number, total: number): number =>
  total === 0 ? 0 : Math.round((correct / total) * 100)

export const getClassification = (percentage: number): string =>
  (CLASSIFICATIONS.find((entry) => percentage >= entry.min) ?? CLASSIFICATIONS[CLASSIFICATIONS.length - 1]).label
