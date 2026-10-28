import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from '../Box/Box'
import { Tag } from './Tag'

const colors = ['blue', 'green', 'red', 'orange', 'gray'] as const
const variants = ['soft', 'solid', 'outline'] as const

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['ai-generated'],
  args: { children: 'Negativa' },
  argTypes: { color: { control: 'select', options: colors } },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Matrix: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {variants.map((v) => (
        <Box key={v} style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          {colors.map((c) => (
            <Tag key={c} variant={v} color={c}>
              {c}
            </Tag>
          ))}
        </Box>
      ))}
    </Box>
  ),
}

export const Uppercase: Story = {
  args: { uppercase: true, color: 'orange', children: 'Negativa' },
}

export const NameAndDescription: Story = {
  args: { uppercase: true, children: 'Visibilidade', detail: 'Mantenha o usuário informado' },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Visibilidade')).toBeVisible()
    await expect(canvas.getByText('Mantenha o usuário informado')).toBeVisible()
  },
}

export const Sizes: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
      <Tag size="sm">pequena</Tag>
      <Tag size="md">média</Tag>
    </Box>
  ),
}
