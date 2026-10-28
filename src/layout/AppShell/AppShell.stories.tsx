import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { AppRoutes } from '../../AppRoutes'
import { mockNotifications } from '../../mocks/notifications'
import { navigation } from '../../navigation/pages'
import { AppShell } from '../AppShell/AppShell'

const meta = {
  title: 'Layout/AppShell',
  component: AppShell,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: {
    groups: navigation,
    notifications: mockNotifications,
    user: { name: 'Usuário' },
  },
  render: () => <AppRoutes />,
} satisfies Meta<typeof AppShell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('UltraHub')).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'Início' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Tech' })).toHaveAttribute('aria-expanded', 'true')
  },
}

export const CompactLayoutUsesBottomNav: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Abrir menu de navegação' })).toBeVisible()
    await expect(canvas.queryByRole('navigation', { name: 'Navegação principal' })).toBeNull()
    await expect(canvas.queryByRole('button', { name: /barra lateral/ })).toBeNull()
  },
}

export const SelectingAPageNavigatesAndUpdatesHeader: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: 'React' }))
    await expect(canvas.getByRole('heading', { name: 'React' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'React' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByText(/Exercícios e revisão/)).toBeVisible()
    await expect(canvas.getByText('Conteúdo em construção.')).toBeVisible()
  },
}

export const OpeningAnUrlDirectlyShowsThatPage: Story = {
  parameters: { initialEntries: ['/languages/japanese'] },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Japonês' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Japonês' })).toHaveAttribute('aria-current', 'page')
  },
}

export const JapanesePageHasActivitiesAndStudySections: Story = {
  parameters: { initialEntries: ['/languages/japanese'] },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('heading', { name: 'Suas atividades' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'Estude e pratique' })).toBeVisible()
    await expect(canvas.getByText('Estude alfabetos, palavras e textos em japonês.')).toBeVisible()
    await expect(canvas.queryByRole('link', { name: /Estude alfabetos/ })).toBeNull()
    await expect(canvas.getByText('Em breve')).toBeVisible()
    await expect(canvas.getByText('Estude alfabetos, palavras e textos em japonês.').closest('[aria-disabled]')).not.toBeNull()
    await userEvent.click(canvas.getByRole('link', { name: 'Pratique o que você estudou' }))
    await expect(canvas.getByRole('heading', { name: 'Praticar japonês' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'O que você quer praticar?' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Japonês' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('heading', { name: 'Alfabeto' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'Palavras' })).toBeVisible()
  },
}

export const UnknownUrlShowsNotFound: Story = {
  parameters: { initialEntries: ['/nao-existe'] },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('heading', { name: 'Página não encontrada' })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Ir para o início' }))
    await expect(canvas.getByRole('heading', { name: 'Início' })).toBeVisible()
  },
}

export const BrandLinksToHome: Story = {
  parameters: { initialEntries: ['/tech/react'] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: 'UltraHub' }))
    await expect(canvas.getByRole('heading', { name: 'Início' })).toBeVisible()
  },
}

export const ModuleCollapses: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Tech' }))
    await expect(canvas.getByRole('button', { name: 'Tech' })).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => expect(canvas.queryByRole('link', { name: 'React' })).toBeNull())
  },
}

export const SidebarCollapsedShowsOnlyIcons: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Recolher barra lateral' }))
    const nav = within(canvas.getByRole('navigation', { name: 'Navegação principal' }))
    await expect(canvas.queryByText('UltraHub')).toBeNull()
    await expect(nav.queryByText('Tech')).toBeNull()
    await expect(nav.queryByText('React')).toBeNull()
    await expect(nav.getByRole('button', { name: 'Tech' })).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Expandir barra lateral' })).toBeVisible()
  },
}

export const CollapsedModulesOpenAFlyout: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Recolher barra lateral' }))
    await waitFor(() => expect(canvas.queryByRole('link', { name: 'React' })).toBeNull())
    await userEvent.click(canvas.getByRole('button', { name: 'Tech' }))
    const flyout = within(await screen.findByRole('dialog'))
    await expect(await flyout.findByRole('heading', { name: 'Tech' })).toBeVisible()
    await userEvent.click(await flyout.findByRole('link', { name: 'React' }))
    await expect(canvas.getByRole('heading', { name: 'React' })).toBeVisible()
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
  },
}

export const ModulesReopenWhenSidebarExpands: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Recolher barra lateral' }))
    await waitFor(() => expect(canvas.queryByRole('link', { name: 'React' })).toBeNull())
    await userEvent.click(canvas.getByRole('button', { name: 'Expandir barra lateral' }))
    await waitFor(async () =>
      expect(await canvas.findByRole('link', { name: 'React' })).toBeVisible(),
    )
  },
}

export const NotificationsOpenWithInternalScroll: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Notificações/ }))
    const dialog = await screen.findByText('Revisão pendente')
    await expect(dialog).toBeVisible()
    const list = dialog.closest('ul') as HTMLElement
    await waitFor(() => expect(getComputedStyle(list).overflowY).toBe('auto'))
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight)
  },
}

export const ThemeMenuChangesAndPersistsTheme: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Tema:/ }))
    await userEvent.click(await screen.findByRole('button', { name: 'Escuro' }))
    await expect(document.documentElement.dataset.theme).toBe('dark')
    await expect(localStorage.getItem('ultrahub-theme')).toBe('dark')
    await expect(canvas.getByRole('button', { name: 'Tema: Escuro' })).toBeVisible()
    await userEvent.click(await screen.findByRole('button', { name: 'Claro' }))
    await expect(document.documentElement.dataset.theme).toBe('light')
    await userEvent.click(await screen.findByRole('button', { name: 'Sistema' }))
    await expect(document.documentElement.dataset.theme).toBeUndefined()
    await expect(localStorage.getItem('ultrahub-theme')).toBeNull()
  },
}

export const ProfileMenuOpens: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu do perfil' }))
    await expect(await screen.findByRole('button', { name: 'Ver perfil' })).toBeVisible()
  },
}
