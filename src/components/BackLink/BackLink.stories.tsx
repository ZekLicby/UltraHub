import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { BackLink } from './BackLink'

const meta = {
  title: 'Components/BackLink',
  component: BackLink,
  tags: ['ai-generated'],
  args: { to: '/', children: 'Voltar' },
} satisfies Meta<typeof BackLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'Voltar' })).toHaveAttribute('href', '/')
  },
}
