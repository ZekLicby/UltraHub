import { Atom, Code, House, Landmark, Languages, type LucideIcon } from 'lucide-react'

export interface PageDefinition {
  id: string
  path: string
  label: string
  icon: LucideIcon
  title: string
  description: string
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
]

export const findPageByPath = (pathname: string): PageDefinition | undefined => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return allPages.find((page) => page.path === normalized)
}
