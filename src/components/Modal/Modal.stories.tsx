import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, screen } from 'storybook/test'
import { Modal } from './Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['ai-generated'],
  args: { open: true, onOpenChange: fn(), title: 'Título do modal', children: 'Conteúdo do modal.' },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  play: async ({ userEvent, args }) => {
    await expect(await screen.findByRole('dialog', { name: 'Título do modal' })).toBeVisible()
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }))
    await expect(args.onOpenChange).toHaveBeenCalledWith(false)
  },
}
