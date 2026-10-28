import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { useState } from 'react'
import { RadioCardGroup } from './RadioCardGroup'

const options = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '15', label: '15', disabled: true },
] as const

const meta = {
  title: 'Components/RadioCardGroup',
  component: RadioCardGroup,
  tags: ['ai-generated'],
  args: { legend: 'Quantidade', options, value: '10', onValueChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value)
    return <RadioCardGroup {...args} value={value} onValueChange={setValue} />
  },
} satisfies Meta<typeof RadioCardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('group', { name: 'Quantidade' })).toBeVisible()
    await expect(canvas.getByRole('radio', { name: '10' })).toBeChecked()
    await userEvent.click(canvas.getByText('5'))
    await expect(canvas.getByRole('radio', { name: '5' })).toBeChecked()
    await expect(canvas.getByRole('radio', { name: '15' })).toBeDisabled()
  },
}
