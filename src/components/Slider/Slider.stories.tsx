import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent } from 'storybook/test'
import { useState } from 'react'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['ai-generated'],
  args: { label: 'Quantidade de cards', min: 5, max: 50, value: 10, onValueChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value)
    return <Slider {...args} value={value} valueLabel={`Cards: ${value}`} onValueChange={setValue} />
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Cards: 10')).toBeVisible()
    fireEvent.change(canvas.getByRole('slider'), { target: { value: '20' } })
    await expect(canvas.getByText('Cards: 20')).toBeVisible()
  },
}
