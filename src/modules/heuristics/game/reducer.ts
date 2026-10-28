import type { HeuristicId } from '../data/heuristics'
import { DEFAULT_QUESTIONS, sameSet } from './rounds'
import type { Round, Session } from './types'

export interface GameState {
  quantity: number
  session: Session | null
}

export type GameAction =
  | { type: 'setQuantity'; value: number }
  | { type: 'start'; rounds: Round[] }
  | { type: 'goTo'; index: number }
  | { type: 'answer'; chosenIds: HeuristicId[] }
  | { type: 'clearSession' }

export const initialGameState: GameState = { quantity: DEFAULT_QUESTIONS, session: null }

export function gameReducer(state: GameState, action: GameAction): GameState {
  const { session } = state

  switch (action.type) {
    case 'setQuantity':
      return { ...state, quantity: action.value }
    case 'start':
      return {
        ...state,
        session: {
          rounds: action.rounds,
          current: 0,
          answers: new Array(action.rounds.length).fill(null),
        },
      }
    case 'goTo':
      return session ? { ...state, session: { ...session, current: action.index } } : state
    case 'answer': {
      if (!session) return state
      const round = session.rounds[session.current]
      const wasRevision = session.answers[session.current] !== null
      const answers = session.answers.slice()
      answers[session.current] = {
        chosenIds: action.chosenIds,
        correct: sameSet(action.chosenIds, round.correctIds),
      }
      const isLast = session.current >= session.rounds.length - 1
      const current = wasRevision || isLast ? session.current : session.current + 1
      return { ...state, session: { ...session, answers, current } }
    }
    case 'clearSession':
      return { ...state, session: null }
  }
}
