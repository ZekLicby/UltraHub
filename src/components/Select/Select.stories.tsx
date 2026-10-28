import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Select } from './Select'

const options = [
  { value: 'ts', label: 'TypeScript' },
  { value: 'node', label: 'Node.js' },
  { value: 'oop', label: 'POO' },
  { value: 'old', label: 'Indisponível', disabled: true },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['ai-generated'],
  args: { label: 'Categoria', options },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  args: { defaultValue: 'node' },
}

export const WithError: Story = {
  args: { error: 'Escolha uma categoria' },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'ts' },
}

export const FullWidth: Story = {
  args: { fullWidth: true },
}

export const LabelFloatsOnSelect: Story = {
  play: async ({ canvas, userEvent }) => {
    const select = canvas.getByLabelText('Categoria')
    const label = canvas.getByText('Categoria')
    await expect(getComputedStyle(label).fontSize).toBe('16px')
    await userEvent.selectOptions(select, 'oop')
    await new Promise((r) => setTimeout(r, 300))
    await expect(getComputedStyle(label).fontSize).toBe('12px')
  },
}
