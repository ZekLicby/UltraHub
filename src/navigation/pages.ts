import { Atom, Code, House, Landmark, Languages, Pencil, Puzzle, type LucideIcon } from 'lucide-react'

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
        id: 'heuristics',
        path: '/tech/heuristics',
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

const heuristicsBase = '/tech/heuristics'

export const heuristicsPaths = {
  home: heuristicsBase,
  practice: `${heuristicsBase}/practice`,
  game: `${heuristicsBase}/game`,
  result: `${heuristicsBase}/result`,
} as const

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
]

export const findPageByPath = (pathname: string): PageDefinition | undefined => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return allPages.find((page) => page.path === normalized)
}
