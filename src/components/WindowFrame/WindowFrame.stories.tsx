import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Tag } from '../Tag/Tag'
import { WindowFrame } from './WindowFrame'

const meta = {
  title: 'Components/WindowFrame',
  component: WindowFrame,
  tags: ['ai-generated'],
  args: { title: 'Meu app', children: 'Conteúdo da janela' },
} satisfies Meta<typeof WindowFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ColorfulControls: Story = {
  args: { controls: 'colorful' },
}

export const WithoutTitle: Story = {
  args: { title: undefined },
}

export const Mockup: Story = {
  args: { controls: 'colorful', title: 'Cadastro' },
  render: (args) => (
    <WindowFrame {...args} style={{ maxWidth: 360 }}>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Input label="E-mail" fullWidth />
        <Box style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Button size="sm">Salvar</Button>
          <Button size="sm" variant="ghost" color="gray">
            Cancelar
          </Button>
          <Tag color="orange" uppercase size="sm">
            Rascunho
          </Tag>
        </Box>
      </Box>
    </WindowFrame>
  ),
}
