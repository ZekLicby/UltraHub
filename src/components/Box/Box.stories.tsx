import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from './Box'

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['ai-generated'],
  args: { children: 'Conteúdo do Box' },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Card: Story = {
  args: {
    style: {
      padding: 'var(--space-5)',
      maxWidth: 360,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    },
  },
}

export const Flex: Story = {
  args: {
    style: { display: 'flex', gap: 'var(--space-3)', alignItems: 'center' },
    children: (
      <>
        <span>A</span>
        <span>B</span>
        <span>C</span>
      </>
    ),
  },
}

export const AcceptsStyle: Story = {
  args: { 'data-testid': 'box', style: { padding: 'var(--space-4)' } } as never,
  play: async ({ canvas }) => {
    const box = canvas.getByTestId('box')
    await expect(box.tagName).toBe('SECTION')
    await expect(getComputedStyle(box).paddingTop).toBe('16px')
  },
}
