import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Divider } from './Divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['ai-generated'],
  args: { children: 'ou' },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabel: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('separator')).toHaveTextContent('ou')
  },
}

export const Plain: Story = { args: { children: undefined } }
