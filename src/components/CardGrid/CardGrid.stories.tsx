import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { ActionCard } from '../ActionCard/ActionCard'
import { CardGrid } from './CardGrid'

const meta = {
  title: 'Components/CardGrid',
  component: CardGrid,
  tags: ['ai-generated'],
  args: {
    'aria-label': 'Cartões',
    children: [1, 2, 3].map((n) => (
      <ActionCard key={n} title={`Cartão ${n}`}>
        Descrição {n}
      </ActionCard>
    )),
  },
} satisfies Meta<typeof CardGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    const grid = canvas.getByLabelText('Cartões')
    await expect(getComputedStyle(grid).display).toBe('grid')
    await expect(canvas.getByText('Cartão 3')).toBeVisible()
  },
}
