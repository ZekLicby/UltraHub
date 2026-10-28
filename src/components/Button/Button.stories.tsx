import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { Box } from '../Box/Box'
import { Button } from './Button'

const colors = ['blue', 'green', 'red', 'orange', 'gray'] as const
const variants = ['solid', 'soft', 'outline', 'ghost'] as const

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Botão', onClick: fn() },
  argTypes: {
    color: { control: 'select', options: colors },
    variant: { control: 'select', options: variants },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Matrix: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {variants.map((v) => (
        <Box key={v} style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          {colors.map((c) => (
            <Button key={c} variant={v} color={c}>
              {v} {c}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
      {variants.map((v) => (
        <Button key={v} variant={v} disabled>
          {v} inativo
        </Button>
      ))}
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
    </Box>
  ),
}

export const Shapes: Story = {
  render: () => (
    <Box style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
      <Button shape="rounded">Arredondado</Button>
      <Button shape="pill">Pílula</Button>
    </Box>
  ),
}

export const WithIcons: Story = {
  args: { startIcon: <span aria-hidden>＋</span>, endIcon: <span aria-hidden>→</span>, children: 'Adicionar' },
}

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Ocupa toda a largura' },
}

export const ClicksOnlyWhenEnabled: Story = {
  render: (args) => (
    <Box style={{ display: 'flex', gap: 'var(--space-3)' }}>
      <Button {...args}>Ativo</Button>
      <Button {...args} disabled>
        Inativo
      </Button>
    </Box>
  ),
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Ativo' }))
    await expect(args.onClick).toHaveBeenCalledTimes(1)
    await expect(canvas.getByRole('button', { name: 'Inativo' })).toBeDisabled()
  },
}
