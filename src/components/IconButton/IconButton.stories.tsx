import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { Bell } from 'lucide-react'
import { IconButton } from './IconButton'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['ai-generated'],
  args: { label: 'Notificações', onClick: fn(), children: <Bell width={20} height={20} aria-hidden="true" /> },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Notificações' }))
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Small: Story = { args: { size: 'sm' } }

export const WithBadge: Story = { args: { badge: 3 } }

export const BadgeOverflow: Story = { args: { badge: 25 } }

export const Disabled: Story = { args: { disabled: true } }
