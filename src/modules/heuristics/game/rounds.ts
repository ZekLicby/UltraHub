import { shuffle } from '../../../utils/shuffle'
import { HEURISTICS, HEURISTIC_IDS, type HeuristicId } from '../data/heuristics'
import { ALL_QUESTIONS, type Question } from '../data/questions'
import type { OptionField, Round } from './types'

export const MIN_QUESTIONS = 5
export const MAX_QUESTIONS = 40
export const QUESTIONS_STEP = 5
export const DEFAULT_QUESTIONS = 20

export const KIND_LABELS: Record<Round['kind'], string> = {
  positive: 'Positiva',
  negative: 'Negativa',
  name: 'Nome → Descrição',
  description: 'Descrição → Nome',
}

export const KIND_COLORS = {
  positive: 'blue',
  negative: 'orange',
  name: 'green',
  description: 'green',
} as const

export const sameSet = (a: readonly number[], b: readonly number[]): boolean =>
  a.length === b.length && a.every((id) => b.includes(id))

function scenarioRound(question: Question, kind: 'positive' | 'negative', optionField: OptionField): Round {
  const base = {
    scenario: question.scenario,
    mockup: question.mockup,
    mainHeuristicId: question.correctId,
    optionField,
  }

  if (kind === 'positive') {
    return {
      ...base,
      kind,
      prompt: 'Qual heurística de Nielsen melhor explica esta situação?',
      optionIds: shuffle([question.correctId, ...question.distractorIds]),
      correctIds: [question.correctId],
      explanations: { ...question.explanations },
    }
  }

  const scenarioIds = [question.correctId, ...question.distractorIds]
  const [firstKept, secondKept] = shuffle(question.distractorIds)
  const kept = [question.correctId, firstKept, secondKept]
  const outsiders = HEURISTIC_IDS.filter((id) => !scenarioIds.includes(id))
  const intruderId = shuffle(outsiders)[0]

  const explanations: Round['explanations'] = {}
  kept.forEach((id) => {
    explanations[id] = question.explanations[id]
  })
  explanations[intruderId] = `"${HEURISTICS[intruderId].name}" trata de: ${HEURISTICS[intruderId].description} Isso não tem relação direta com a situação descrita — diferente das outras opções, que ao menos tangenciam o cenário —, o que torna esta a heurística que não se encaixa aqui.`

  return {
    ...base,
    kind,
    prompt: 'Selecione a heurística que NÃO se encaixa nesta situação.',
    optionIds: shuffle([...kept, intruderId]),
    correctIds: [intruderId],
    explanations,
  }
}

function pickDistractors(heuristicId: HeuristicId): HeuristicId[] {
  return shuffle(HEURISTIC_IDS.filter((id) => id !== heuristicId)).slice(0, 3)
}

function nameToDescriptionRound(heuristicId: HeuristicId): Round {
  const h = HEURISTICS[heuristicId]
  const distractors = pickDistractors(heuristicId)
  const explanations: Round['explanations'] = {
    [heuristicId]: `Esta é, de fato, a descrição oficial de "${h.icon} ${h.name}".`,
  }
  distractors.forEach((id) => {
    explanations[id] = `Esta descrição pertence a "${HEURISTICS[id].icon} ${HEURISTICS[id].name}", não a "${h.name}".`
  })
  return {
    kind: 'name',
    prompt: 'Qual é a descrição correta desta heurística?',
    scenario: `${h.icon} ${h.name}`,
    mockup: null,
    mainHeuristicId: heuristicId,
    optionField: 'description',
    optionIds: shuffle([heuristicId, ...distractors]),
    correctIds: [heuristicId],
    explanations,
  }
}

function descriptionToNameRound(heuristicId: HeuristicId): Round {
  const h = HEURISTICS[heuristicId]
  const distractors = pickDistractors(heuristicId)
  const explanations: Round['explanations'] = {
    [heuristicId]: `Esta descrição é, de fato, de "${h.icon} ${h.name}".`,
  }
  distractors.forEach((id) => {
    explanations[id] = `"${HEURISTICS[id].icon} ${HEURISTICS[id].name}" trata de: ${HEURISTICS[id].description} Não é a descrição apresentada.`
  })
  return {
    kind: 'description',
    prompt: 'A qual heurística pertence esta descrição?',
    scenario: `"${h.description}"`,
    mockup: null,
    mainHeuristicId: heuristicId,
    optionField: 'name',
    optionIds: shuffle([heuristicId, ...distractors]),
    correctIds: [heuristicId],
    explanations,
  }
}

export function buildRounds(quantity: number): Round[] {
  const scenarioRounds = ALL_QUESTIONS.map((question) =>
    scenarioRound(
      question,
      Math.random() < 0.5 ? 'positive' : 'negative',
      Math.random() < 0.5 ? 'name' : 'description',
    ),
  )
  const directRounds = HEURISTIC_IDS.flatMap((id) => [nameToDescriptionRound(id), descriptionToNameRound(id)])
  return shuffle([...scenarioRounds, ...directRounds]).slice(0, quantity)
}
