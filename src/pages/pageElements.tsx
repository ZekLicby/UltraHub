import type { ReactElement } from 'react'
import { JapanesePage } from './Japanese/JapanesePage/JapanesePage'
import { GamePage } from './Japanese/GamePage/GamePage'
import { JapanesePracticePage } from './Japanese/JapanesePracticePage/JapanesePracticePage'
import { LettersConfigPage } from './Japanese/LettersConfigPage/LettersConfigPage'
import { LettersHomePage } from './Japanese/LettersHomePage/LettersHomePage'
import { ResultPage } from './Japanese/ResultPage/ResultPage'
import { WordsConfigPage } from './Japanese/WordsConfigPage/WordsConfigPage'
import { WordsHomePage } from './Japanese/WordsHomePage/WordsHomePage'
import { PlaceholderPage } from './PlaceholderPage'

export const pageElements: Record<string, ReactElement> = {
  japanese: <JapanesePage />,
  'japanese-practice': <JapanesePracticePage />,
  'japanese-letters': <LettersHomePage />,
  'japanese-letters-config': <LettersConfigPage />,
  'japanese-words': <WordsHomePage />,
  'japanese-words-config': <WordsConfigPage />,
  'japanese-game': <GamePage />,
  'japanese-result': <ResultPage />,
}

export const placeholderElement = <PlaceholderPage />
