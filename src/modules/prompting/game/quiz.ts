import { shuffle } from '../../../utils/shuffle'
import { getPromptType, type PromptTypeId } from '../data/promptTypes'
import type { PromptQuestion } from '../data/questions'
import type { SessionQuestion } from './types'

const optionId = (question: PromptQuestion, typeId: PromptTypeId): string => `${question.id}-opt-${typeId}`

export function buildSessionQuestion(question: PromptQuestion): SessionQuestion {
  const typeIds: PromptTypeId[] = [question.answer, ...question.distractors]
  return {
    ...question,
    options: shuffle(typeIds).map((typeId) => ({
      id: optionId(question, typeId),
      text: getPromptType(typeId).name,
    })),
    correctAnswer: optionId(question, question.answer),
  }
}

export const buildSessionQuestions = (pool: readonly PromptQuestion[], count?: number): SessionQuestion[] =>
  (count ? shuffle(pool).slice(0, count) : shuffle(pool)).map(buildSessionQuestion)
