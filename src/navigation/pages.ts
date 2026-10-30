import { QUIZ_CATEGORIES } from '../modules/codeQuest/categories'
import type { QuestionCategory } from '../modules/codeQuest/data/questions'
import { Atom, Code, House, Landmark, Languages, MessageSquareText, Palette, Pencil, Puzzle, type LucideIcon } from 'lucide-react'

export interface PageDefinition {
  id: string
  path: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  immersive?: boolean
}

export interface NavigationGroup {
  id: string
  label: string
  icon: LucideIcon
  pages: PageDefinition[]
}

export const homePage: PageDefinition = {
  id: 'home',
  path: '/',
  label: 'Início',
  icon: House,
  title: 'Início',
  description: 'Visão geral dos módulos de estudo do UltraHub.',
}

export const navigation: NavigationGroup[] = [
  {
    id: 'tech',
    label: 'Tech',
    icon: Code,
    pages: [
      {
        id: 'react',
        path: '/tech/react',
        label: 'React',
        icon: Atom,
        title: 'React',
        description: 'Exercícios e revisão dos conceitos de React.',
      },
      {
        id: 'prompting',
        path: '/tech/prompting',
        label: 'Prompting',
        icon: MessageSquareText,
        title: 'Prompting',
        description: 'Aprenda os tipos de prompt: zero-shot, one-shot, few-shot e mais.',
      },
      ...QUIZ_CATEGORIES.map((category) => ({
        id: category.id,
        path: `/tech/${category.id}`,
        label: category.label,
        icon: category.icon,
        title: category.title,
        description: category.description,
      })),
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: Palette,
    pages: [
      {
        id: 'heuristics',
        path: '/design/heuristics',
        label: 'Heurísticas',
        icon: Puzzle,
        title: 'Heurísticas de Nielsen',
        description: 'Aprenda a reconhecer as 10 heurísticas de usabilidade.',
      },
    ],
  },
  {
    id: 'languages',
    label: 'Línguas',
    icon: Languages,
    pages: [
      {
        id: 'japanese',
        path: '/languages/japanese',
        label: 'Japonês',
        icon: Landmark,
        title: 'Japonês',
        description: 'Prática de kana, vocabulário e frases em japonês.',
      },
    ],
  },
]

const practiceBase = '/languages/japanese/practice'

export const japanesePaths = {
  practice: practiceBase,
  lettersHome: `${practiceBase}/letters`,
  lettersConfig: `${practiceBase}/letters/config`,
  wordsHome: `${practiceBase}/words`,
  wordsConfig: `${practiceBase}/words/config`,
  game: `${practiceBase}/game`,
  result: `${practiceBase}/result`,
} as const

const heuristicsBase = '/design/heuristics'

export const heuristicsPaths = {
  home: heuristicsBase,
  practice: `${heuristicsBase}/practice`,
  game: `${heuristicsBase}/game`,
  result: `${heuristicsBase}/result`,
} as const

const promptingBase = '/tech/prompting'

export const promptingPaths = {
  home: promptingBase,
  practice: `${promptingBase}/practice`,
  game: `${promptingBase}/game`,
  result: `${promptingBase}/result`,
} as const

export const quizPaths =(category: QuestionCategory) => {
  const base = `/tech/${category}`
  return {
    home: base,
    practice: `${base}/practice`,
    game: `${base}/game`,
    result: `${base}/result`,
  }
}

const detailPage = (
  id: string,
  path: string,
  title: string,
  description: string,
  immersive = false,
): PageDefinition => ({ id, path, label: title, icon: Pencil, title, description, immersive })

export const japanesePracticePage = detailPage(
  'japanese-practice',
  japanesePaths.practice,
  'Praticar japonês',
  'Escolha o módulo e treine hiragana e palavras.',
)

export const japaneseDetailPages: PageDefinition[] = [
  japanesePracticePage,
  detailPage('japanese-letters', japanesePaths.lettersHome, 'Letras', 'Pratique hiragana, um caractere por vez.'),
  detailPage('japanese-letters-config', japanesePaths.lettersConfig, 'Letras: modo livre', 'Escolha os grupos e a quantidade de cards.'),
  detailPage('japanese-words', japanesePaths.wordsHome, 'Palavras', 'Pratique palavras simples escritas em hiragana.'),
  detailPage('japanese-words-config', japanesePaths.wordsConfig, 'Palavras: modo livre', 'Escolha as categorias e a quantidade de palavras.'),
  detailPage('japanese-game', japanesePaths.game, 'Partida', 'Responda os cards um a um.', true),
  detailPage('japanese-result', japanesePaths.result, 'Resultado', 'Revise seus acertos e erros.'),
]

export const heuristicsDetailPages: PageDefinition[] = [
  detailPage('heuristics-practice', heuristicsPaths.practice, 'Heurísticas: o jogo', 'Identifique a heurística de Nielsen de cada situação.'),
  detailPage('heuristics-game', heuristicsPaths.game, 'Partida', 'Responda as perguntas e navegue entre elas.', true),
  detailPage('heuristics-result', heuristicsPaths.result, 'Resultado', 'Veja sua pontuação e o gabarito completo.'),
]

export const promptingDetailPages: PageDefinition[] = [
  detailPage('prompting-practice', promptingPaths.practice, 'Prompting: escolha seu treino', 'Escolha a quantidade de perguntas do quiz.'),
  detailPage('prompting-game', promptingPaths.game, 'Quiz', 'Identifique o tipo de prompt de cada pergunta.', true),
  detailPage('prompting-result', promptingPaths.result, 'Resultado', 'Veja seu desempenho e treine seus erros.'),
]

export const quizDetailPages:PageDefinition[] = QUIZ_CATEGORIES.flatMap((category) => {
  const paths = quizPaths(category.id)
  return [
    detailPage(`${category.id}-practice`, paths.practice, `${category.label}: escolha seu treino`, 'Escolha um modo pronto ou monte seu próprio quiz.'),
    detailPage(`${category.id}-game`, paths.game, 'Quiz', 'Responda as perguntas uma a uma.', true),
    detailPage(`${category.id}-result`, paths.result, 'Resultado', 'Veja seu desempenho e treine seus erros.'),
  ]
})

export const notFoundPage: PageDefinition = {
  id: 'not-found',
  path: '*',
  label: 'Não encontrada',
  icon: House,
  title: 'Página não encontrada',
  description: 'O endereço acessado não existe no UltraHub.',
}

export const allPages: PageDefinition[] = [
  homePage,
  ...navigation.flatMap((group) => group.pages),
  ...japaneseDetailPages,
  ...heuristicsDetailPages,
  ...promptingDetailPages,
  ...quizDetailPages,
]

export const findPageByPath = (pathname: string): PageDefinition | undefined => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return allPages.find((page) => page.path === normalized)
}
