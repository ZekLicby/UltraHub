import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Callout } from './Callout'

const meta = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['ai-generated'],
  args: { title: '💡 Dica', children: 'Pense no motivo de `unknown` ser mais seguro que `any`.' },
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('💡 Dica')).toBeVisible()
  },
}

export const Success: Story = { args: { tone: 'success', title: '✅ Resposta correta!' } }

export const Danger: Story = { args: { tone: 'danger', title: '❌ Resposta incorreta.' } }
