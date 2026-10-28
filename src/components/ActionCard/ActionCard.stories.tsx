import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { BookOpen, Pencil } from 'lucide-react'
import { Tag } from '../Tag/Tag'
import { ActionCard } from './ActionCard'

const meta = {
  title: 'Components/ActionCard',
  component: ActionCard,
  tags: ['ai-generated'],
  args: {
    visual: <BookOpen aria-hidden="true" />,
    children: 'Estude alfabetos, palavras e textos em japonês.',
  },
} satisfies Meta<typeof ActionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Static: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Estude alfabetos/)).toBeVisible()
    await expect(canvas.queryByRole('link')).toBeNull()
  },
}

export const AsLink: Story = {
  args: { visual: <Pencil aria-hidden="true" />, children: 'Pratique o que você estudou', to: '/destino' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Pratique o que você estudou' })).toHaveAttribute('href', '/destino')
  },
}

export const WithTitleAndBadge: Story = {
  args: {
    visual: 'あ',
    title: 'Letras',
    children: 'Memorize os hiraganas um a um.',
    badge: (
      <Tag size="sm" color="gray">
        Em breve
      </Tag>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    to: '/destino',
    badge: (
      <Tag size="sm" color="gray">
        Em breve
      </Tag>
    ),
  },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('link')).toBeNull()
    await expect(canvas.getByText(/Estude alfabetos/).closest('[aria-disabled]')).not.toBeNull()
  },
}
