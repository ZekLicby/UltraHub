import type { Letter } from '../data/hiragana'
import type { Word, WordMode } from '../data/words'

export const normalizeAnswer = (text: string): string => text.trim().toLowerCase()

const matches = (accepted: readonly string[], answer: string): boolean =>
  accepted.some((candidate) => normalizeAnswer(candidate) === normalizeAnswer(answer))

export const isLetterCorrect = (letter: Letter, answer: string): boolean =>
  matches([letter.romaji, ...(letter.alt ?? [])], answer)

export const isWordCorrect = (word: Word, mode: WordMode, answer: string): boolean =>
  matches(word.acceptedAnswers[mode], answer)

export const expectedWordAnswer = (word: Word, mode: WordMode): string =>
  mode === 'sound' ? word.romanization : word.meaning

export function formatAnswerList(answers: readonly string[]): string {
  const quoted = answers.map((answer) => `“${answer}”`)
  if (quoted.length <= 1) return quoted.join('')
  return `${quoted.slice(0, -1).join(', ')} ou ${quoted[quoted.length - 1]}`
}
