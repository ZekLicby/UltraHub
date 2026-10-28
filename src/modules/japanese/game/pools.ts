import { HIRAGANA_GROUPS, MAX_CARDS, MIN_CARDS, type Letter } from '../data/hiragana'
import { WORDS, WORD_CATEGORIES, WORD_MAX_CARDS, type Word, type WordType } from '../data/words'
import { randomCount, shuffle } from './deck'

export const getLettersForGroups = (groupIds: readonly string[]): Letter[] =>
  HIRAGANA_GROUPS.filter((group) => groupIds.includes(group.id)).flatMap((group) => group.chars)

export const getWordsForCategories = (categoryIds: readonly WordType[]): Word[] =>
  WORDS.filter((word) => categoryIds.includes(word.type))

export const getAvailableCategories = () =>
  WORD_CATEGORIES.filter((category) => WORDS.some((word) => word.type === category.id))

export function randomLettersSelection(): { groupIds: string[]; count: number } {
  const groupCount = Math.floor(Math.random() * HIRAGANA_GROUPS.length) + 1
  const groupIds = shuffle(HIRAGANA_GROUPS.map((group) => group.id)).slice(0, groupCount)
  const available = getLettersForGroups(groupIds).length
  const maxAllowed = Math.min(MAX_CARDS, available)
  return { groupIds, count: randomCount(Math.min(MIN_CARDS, maxAllowed), maxAllowed) }
}

export function randomWordsSelection(): { categoryIds: WordType[]; count: number } {
  const categories = getAvailableCategories()
  const categoryCount = Math.floor(Math.random() * categories.length) + 1
  const categoryIds = shuffle(categories.map((category) => category.id)).slice(0, categoryCount)
  const available = getWordsForCategories(categoryIds).length
  const maxAllowed = Math.min(WORD_MAX_CARDS, available)
  return { categoryIds, count: randomCount(Math.min(MIN_CARDS, maxAllowed), maxAllowed) }
}
