import type { Letter } from '../data/hiragana'
import type { Word, WordMode, WordType } from '../data/words'

export type PracticeModule = 'letters' | 'words'

export interface LetterAnswer {
  letter: Letter
  userAnswer: string
  correct: boolean
}

export interface WordAnswer {
  word: Word
  userAnswer: string
  correct: boolean
}

export interface LettersSession {
  module: 'letters'
  deck: Letter[]
  index: number
  answers: LetterAnswer[]
}

export interface WordsSession {
  module: 'words'
  mode: WordMode
  deck: Word[]
  index: number
  answers: WordAnswer[]
}

export type Session = LettersSession | WordsSession

export interface GameConfig {
  selectedGroupIds: string[]
  cardCount: number
  wordMode: WordMode
  selectedCategoryIds: WordType[]
  wordCount: number
}
