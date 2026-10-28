import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from '../Box/Box'
import { Typography } from './Typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['ai-generated'],
  args: { children: 'Texto de exemplo' },
  argTypes: {
    variant: { control: 'select', options: ['display', 'title', 'subtitle', 'body', 'caption', 'label', 'code'] },
    size: { control: 'select', options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    weight: { control: 'select', options: [undefined, 'regular', 'medium', 'semibold', 'bold'] },
    color: { control: 'text' },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Typography variant="display">Display</Typography>
      <Typography variant="title">Title</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="body">Body — texto corrido padrão.</Typography>
      <Typography variant="caption">Caption — legenda secundária</Typography>
      <Typography variant="label" uppercase>Label</Typography>
      <Typography variant="code">const code = true</Typography>
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
        <Typography key={s} size={s}>
          size=&quot;{s}&quot;
        </Typography>
      ))}
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <Typography color="text">text</Typography>
      <Typography color="text-muted">text-muted</Typography>
      <Typography color="blue-solid">blue-solid</Typography>
      <Typography color="green-solid">green-solid</Typography>
      <Typography color="red-solid">red-solid</Typography>
      <Typography color="orange-soft-text">orange-soft-text</Typography>
    </Box>
  ),
}

export const Truncated: Story = {
  args: {
    truncate: true,
    style: { maxWidth: 200 },
    children: 'Um texto bem longo que não cabe em uma linha só e deve ser cortado',
  },
}

export const UsesTokens: Story = {
  args: { variant: 'title', children: 'Título' },
  play: async ({ canvas }) => {
    const el = canvas.getByText('Título')
    await expect(getComputedStyle(el).fontSize).toBe('24px')
    await expect(el.tagName).toBe('H2')
  },
}
