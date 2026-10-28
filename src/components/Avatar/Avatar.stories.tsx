import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const photo =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' fill='%236a8ce8'/><circle cx='32' cy='26' r='12' fill='white'/></svg>"

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['ai-generated'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithoutPhoto: Story = {}

export const WithPhoto: Story = { args: { src: photo, alt: 'Foto do usuário' } }

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </div>
  ),
}
