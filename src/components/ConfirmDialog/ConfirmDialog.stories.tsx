import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, screen } from 'storybook/test'
import { ConfirmDialog } from './ConfirmDialog'

const meta = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['ai-generated'],
  args: {
    open: true,
    onOpenChange: fn(),
    onConfirm: fn(),
    title: 'Sair da partida?',
    description: 'Todo o progresso desta partida será perdido. Deseja realmente sair?',
    cancelLabel: 'Continuar partida',
    confirmLabel: 'Sair da partida',
    confirmColor: 'red',
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  play: async ({ userEvent, args }) => {
    const dialog = await screen.findByRole('alertdialog', { name: 'Sair da partida?' })
    await expect(dialog).toBeVisible()
    await userEvent.click(screen.getByRole('button', { name: 'Sair da partida' }))
    await expect(args.onConfirm).toHaveBeenCalledTimes(1)
  },
}

export const Cancel: Story = {
  play: async ({ userEvent, args }) => {
    await userEvent.click(await screen.findByRole('button', { name: 'Continuar partida' }))
    await expect(args.onOpenChange).toHaveBeenCalledWith(false)
  },
}
