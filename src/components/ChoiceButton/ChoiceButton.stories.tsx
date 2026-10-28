import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { ChoiceButton } from './ChoiceButton'

const meta = {
  title: 'Components/ChoiceButton',
  component: ChoiceButton,
  tags: ['ai-generated'],
  args: { children: 'Uma alternativa de resposta', onClick: fn() },
} satisfies Meta<typeof ChoiceButton>

export default meta
type Story = StoryObj<typeof meta>

export const Block: Story = {
  args: { selected: false },
  play: async ({ canvas, userEvent, args }) => {
    await expect(canvas.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Selected: Story = {
  args: { selected: true },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  },
}

export const Squares: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
      <ChoiceButton shape="square" current aria-label="Pergunta atual">1</ChoiceButton>
      <ChoiceButton shape="square" marked>2</ChoiceButton>
      <ChoiceButton shape="square">3</ChoiceButton>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Pergunta atual' })).toHaveAttribute('aria-current', 'step')
  },
}
