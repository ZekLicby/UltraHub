import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor } from 'storybook/test'
import { navigation } from '../../navigation/pages'
import { BottomNav } from '../BottomNav/BottomNav'

const meta = {
  title: 'Layout/BottomNav',
  component: BottomNav,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: { groups: navigation },
} satisfies Meta<typeof BottomNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Abrir menu de navegação' })).toBeVisible()
  },
}

export const MenuListsModulesAndPages: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu de navegação' }))
    await expect(await screen.findByRole('dialog', { name: 'Menu' })).toBeVisible()
    await expect(screen.getByRole('heading', { name: 'Tech' })).toBeVisible()
    await expect(screen.getByRole('heading', { name: 'Línguas' })).toBeVisible()
    await expect(screen.getByRole('link', { name: 'React' })).toBeVisible()
    await expect(screen.getByRole('link', { name: 'Japonês' })).toBeVisible()
  },
}

export const CurrentPageIsMarked: Story = {
  parameters: { initialEntries: ['/tech/react'] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu de navegação' }))
    await expect(await screen.findByRole('link', { name: 'React' })).toHaveAttribute('aria-current', 'page')
    await expect(screen.getByRole('link', { name: 'Japonês' })).not.toHaveAttribute('aria-current')
  },
}

export const SelectingAPageClosesMenu: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu de navegação' }))
    await userEvent.click(await screen.findByRole('link', { name: 'Japonês' }))
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
  },
}

export const CloseButtonClosesMenu: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Abrir menu de navegação' }))
    await userEvent.click(await screen.findByRole('button', { name: 'Fechar menu' }))
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
  },
}
