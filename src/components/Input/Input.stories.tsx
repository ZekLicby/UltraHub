import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from '../Box/Box'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['ai-generated'],
  args: { label: 'Nome' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  args: { defaultValue: 'Carlos' },
}

export const WithPlaceholder: Story = {
  args: { label: 'E-mail', placeholder: 'voce@exemplo.com' },
}

export const WithHelperText: Story = {
  args: { label: 'Usuário', helperText: 'Use apenas letras e números' },
}

export const WithError: Story = {
  args: { label: 'E-mail', defaultValue: 'abc', error: 'E-mail inválido' },
}

export const Disabled: Story = {
  args: { label: 'Bloqueado', defaultValue: 'Não editável', disabled: true },
}

export const FullWidth: Story = {
  args: { fullWidth: true },
}

export const OnColoredBackground: Story = {
  render: () => (
    <Box style={{ padding: 'var(--space-5)', background: 'var(--color-blue-soft)', borderRadius: 'var(--radius-md)' }}>
      <Input label="Fundo colorido" labelBackground="var(--color-blue-soft)" />
    </Box>
  ),
}

export const LabelFloatsOnFocus: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Nome')
    const label = canvas.getByText('Nome')
    const before = label.getBoundingClientRect().top
    await userEvent.click(input)
    await new Promise((r) => setTimeout(r, 300))
    await expect(label.getBoundingClientRect().top).toBeLessThan(before)
    await expect(getComputedStyle(label).fontSize).toBe('12px')
  },
}
