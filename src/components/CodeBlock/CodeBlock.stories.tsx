import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { CodeBlock } from './CodeBlock'

const meta = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['ai-generated'],
  args: { code: 'class User {\n  private name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}' },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/private name/)).toBeVisible()
    await expect(getComputedStyle(canvas.getByText(/private name/).closest('pre')!).fontFamily).toContain('monospace')
  },
}
