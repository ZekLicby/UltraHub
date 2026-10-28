import type { HeuristicId } from '../data/heuristics'
import type { MockupName } from '../mockups/mockups'

export type RoundKind = 'positive' | 'negative' | 'name' | 'description'

export type OptionField = 'name' | 'description'

export interface Round {
  kind: RoundKind
  prompt: string
  scenario: string
  mockup: MockupName | null
  mainHeuristicId: HeuristicId
  optionField: OptionField
  optionIds: HeuristicId[]
  correctIds: HeuristicId[]
  explanations: Partial<Record<HeuristicId, string>>
}

export interface Answer {
  chosenIds: HeuristicId[]
  correct: boolean
}

export interface Session {
  rounds: Round[]
  current: number
  answers: (Answer | null)[]
}
