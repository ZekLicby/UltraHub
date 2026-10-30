import type { ReactElement } from 'react'
import { QUIZ_CATEGORIES } from '../modules/codeQuest/categories'
import { QuizGamePage } from './Quiz/QuizGamePage/QuizGamePage'
import { QuizHomePage } from './Quiz/QuizHomePage/QuizHomePage'
import { QuizPracticePage } from './Quiz/QuizPracticePage/QuizPracticePage'
import { QuizResultPage } from './Quiz/QuizResultPage/QuizResultPage'
import { HeuristicsGamePage } from './Heuristics/HeuristicsGamePage/HeuristicsGamePage'
import { HeuristicsPage } from './Heuristics/HeuristicsPage/HeuristicsPage'
import { HeuristicsPracticePage } from './Heuristics/HeuristicsPracticePage/HeuristicsPracticePage'
import { HeuristicsResultPage } from './Heuristics/HeuristicsResultPage/HeuristicsResultPage'
import { JapanesePage } from './Japanese/JapanesePage/JapanesePage'
import { GamePage } from './Japanese/GamePage/GamePage'
import { JapanesePracticePage } from './Japanese/JapanesePracticePage/JapanesePracticePage'
import { LettersConfigPage } from './Japanese/LettersConfigPage/LettersConfigPage'
import { LettersHomePage } from './Japanese/LettersHomePage/LettersHomePage'
import { ResultPage } from './Japanese/ResultPage/ResultPage'
import { WordsConfigPage } from './Japanese/WordsConfigPage/WordsConfigPage'
import { WordsHomePage } from './Japanese/WordsHomePage/WordsHomePage'
import { PlaceholderPage } from './PlaceholderPage'
import { PromptingGamePage } from './Prompting/PromptingGamePage/PromptingGamePage'
import { PromptingPage } from './Prompting/PromptingPage/PromptingPage'
import { PromptingPracticePage } from './Prompting/PromptingPracticePage/PromptingPracticePage'
import { PromptingResultPage } from './Prompting/PromptingResultPage/PromptingResultPage'

export const pageElements: Record<string, ReactElement> = {
  ...Object.fromEntries(
    QUIZ_CATEGORIES.flatMap((category) => [
      [category.id, <QuizHomePage category={category.id} />],
      [`${category.id}-practice`, <QuizPracticePage category={category.id} />],
      [`${category.id}-game`, <QuizGamePage category={category.id} />],
      [`${category.id}-result`, <QuizResultPage category={category.id} />],
    ]),
  ),
  heuristics: <HeuristicsPage />,
  'heuristics-practice': <HeuristicsPracticePage />,
  'heuristics-game': <HeuristicsGamePage />,
  'heuristics-result': <HeuristicsResultPage />,
  prompting: <PromptingPage />,
  'prompting-practice': <PromptingPracticePage />,
  'prompting-game': <PromptingGamePage />,
  'prompting-result': <PromptingResultPage />,
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
