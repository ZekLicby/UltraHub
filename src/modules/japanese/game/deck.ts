import { shuffle } from '../../../utils/shuffle'

function separateAdjacentDuplicates<T>(deck: T[]): void {
  const clashes = (index: number) =>
    (index > 0 && deck[index - 1] === deck[index]) ||
    (index < deck.length - 1 && deck[index + 1] === deck[index])

  for (let i = 1; i < deck.length; i++) {
    if (deck[i] !== deck[i - 1]) continue
    for (let j = 0; j < deck.length; j++) {
      if (j === i) continue
      ;[deck[i], deck[j]] = [deck[j], deck[i]]
      if (!clashes(i) && !clashes(j)) break
      ;[deck[i], deck[j]] = [deck[j], deck[i]]
    }
  }
}

export function buildDeck<T>(pool: readonly T[], count: number): T[] {
  if (pool.length === 0) return []
  if (count <= pool.length) return shuffle(pool).slice(0, count)

  const extras = Array.from(
    { length: count - pool.length },
    () => pool[Math.floor(Math.random() * pool.length)],
  )
  const deck = shuffle([...pool, ...extras])
  separateAdjacentDuplicates(deck)
  return deck
}

export function buildWordDeck<T>(pool: readonly T[], count: number): T[] {
  if (pool.length === 0) return []
  const deck: T[] = []
  while (deck.length < count) {
    const cycle = shuffle(pool)
    if (pool.length > 1 && deck.length > 0 && cycle[0] === deck[deck.length - 1]) {
      cycle.push(cycle.shift() as T)
    }
    deck.push(...cycle)
  }
  return deck.slice(0, count)
}

export function randomCount(min: number, max: number): number {
  const low = Math.min(min, max)
  return low >= max ? max : Math.floor(Math.random() * (max - low + 1)) + low
}
