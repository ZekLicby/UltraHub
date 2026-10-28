import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from '../Box/Box'
import { ProgressBar } from './ProgressBar'

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['ai-generated'],
  args: { value: 40 },
  argTypes: { color: { control: 'select', options: ['blue', 'green', 'red', 'orange', 'gray'] } },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabelAndPercentage: Story = {
  args: { value: 3, max: 10, label: 'Pergunta 3 de 10', showPercentage: true },
}

export const Colors: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {(['blue', 'green', 'red', 'orange', 'gray'] as const).map((c) => (
        <ProgressBar key={c} value={60} color={c} />
      ))}
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <ProgressBar value={50} size="sm" />
      <ProgressBar value={50} size="md" />
      <ProgressBar value={50} size="lg" />
    </Box>
  ),
}

export const Complete: Story = {
  args: { value: 100, color: 'green', showPercentage: true, label: 'Concluído' },
}

export const Accessible: Story = {
  args: { value: 3, max: 10, label: 'Pergunta 3 de 10' },
  play: async ({ canvas }) => {
    const bar = canvas.getByRole('progressbar', { name: 'Pergunta 3 de 10' })
    await expect(bar).toHaveAttribute('aria-valuenow', '3')
    await expect(bar).toHaveAttribute('aria-valuemax', '10')
  },
}
