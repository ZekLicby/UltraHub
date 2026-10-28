import { Boxes, FileCode, Server, type LucideIcon } from 'lucide-react'
import type { QuestionCategory } from './data/questions'

export interface QuizCategory {
  id: QuestionCategory
  label: string
  icon: LucideIcon
  title: string
  description: string
  studyDescription: string
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'typescript',
    label: 'TypeScript',
    icon: FileCode,
    title: 'TypeScript',
    description: 'Quizzes de tipos, generics, classes e demais recursos do TypeScript.',
    studyDescription: 'Estude tipos, generics, classes e demais recursos do TypeScript.',
  },
  {
    id: 'node',
    label: 'Node.js',
    icon: Server,
    title: 'Node.js',
    description: 'Quizzes de módulos, assincronismo, streams e o ecossistema Node.js.',
    studyDescription: 'Estude módulos, assincronismo, streams e o ecossistema Node.js.',
  },
  {
    id: 'oop',
    label: 'POO',
    icon: Boxes,
    title: 'Orientação a Objetos',
    description: 'Quizzes de classes, herança, polimorfismo e princípios de design.',
    studyDescription: 'Estude classes, herança, polimorfismo e princípios de design.',
  },
]

export const getQuizCategory = (id: QuestionCategory): QuizCategory =>
  QUIZ_CATEGORIES.find((category) => category.id === id) ?? QUIZ_CATEGORIES[0]
