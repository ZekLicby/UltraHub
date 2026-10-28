import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { ToggleChip } from './ToggleChip'

const meta = {
  title: 'Components/ToggleChip',
  component: ToggleChip,
  tags: ['ai-generated'],
  args: { selected: false, sample: 'かきくけこ', label: 'K', onClick: fn() },
} satisfies Meta<typeof ToggleChip>

export default meta
type Story = StoryObj<typeof meta>

export const Unselected: Story = {
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

export const WithCount: Story = {
  args: { count: '20 palavras', sample: 'ねこ', label: 'Substantivos' },
}
