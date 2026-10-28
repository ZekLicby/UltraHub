import { MAX_CARDS } from '../data/hiragana'
import type { Letter } from '../data/hiragana'
import type { Word, WordMode, WordType } from '../data/words'
import { WORD_MAX_CARDS } from '../data/words'
import type { GameConfig, LetterAnswer, Session, WordAnswer } from './types'

export interface GameState {
  config: GameConfig
  session: Session | null
}

export type GameAction =
  | { type: 'toggleGroup'; id: string }
  | { type: 'setCardCount'; value: number }
  | { type: 'setWordMode'; mode: WordMode }
  | { type: 'toggleCategory'; id: WordType }
  | { type: 'setWordCount'; value: number }
  | { type: 'startLetters'; deck: Letter[] }
  | { type: 'startWords'; deck: Word[]; mode: WordMode }
  | { type: 'answerLetter'; answer: LetterAnswer }
  | { type: 'answerWord'; answer: WordAnswer }
  | { type: 'next' }
  | { type: 'clearSession' }

export const initialGameState: GameState = {
  config: {
    selectedGroupIds: ['K', 'S'],
    cardCount: 10,
    wordMode: 'sound',
    selectedCategoryIds: ['noun', 'verb', 'adjective', 'pronoun', 'adverb', 'other'],
    wordCount: 10,
  },
  session: null,
}

const toggle = <T,>(list: T[], item: T): T[] =>
  list.includes(item) ? list.filter((value) => value !== item) : [...list, item]

export function gameReducer(state: GameState, action: GameAction): GameState {
  const { config, session } = state

  switch (action.type) {
    case 'toggleGroup':
      return { ...state, config: { ...config, selectedGroupIds: toggle(config.selectedGroupIds, action.id) } }
    case 'setCardCount':
      return { ...state, config: { ...config, cardCount: Math.min(MAX_CARDS, action.value) } }
    case 'setWordMode':
      return { ...state, config: { ...config, wordMode: action.mode } }
    case 'toggleCategory':
      return { ...state, config: { ...config, selectedCategoryIds: toggle(config.selectedCategoryIds, action.id) } }
    case 'setWordCount':
      return { ...state, config: { ...config, wordCount: Math.min(WORD_MAX_CARDS, action.value) } }
    case 'startLetters':
      return { ...state, session: { module: 'letters', deck: action.deck, index: 0, answers: [] } }
    case 'startWords':
      return { ...state, session: { module: 'words', mode: action.mode, deck: action.deck, index: 0, answers: [] } }
    case 'answerLetter':
      if (session?.module !== 'letters') return state
      return { ...state, session: { ...session, answers: [...session.answers, action.answer] } }
    case 'answerWord':
      if (session?.module !== 'words') return state
      return { ...state, session: { ...session, answers: [...session.answers, action.answer] } }
    case 'next':
      return session ? { ...state, session: { ...session, index: session.index + 1 } as Session } : state
    case 'clearSession':
      return { ...state, session: null }
  }
}
