import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, waitFor } from 'storybook/test'
import { WORDS } from '../../../modules/japanese/data/words'
import { VARIANTS_HINT_SEEN_KEY, VariantsHint } from './VariantsHint'

const wordWithVariants = WORDS.find((word) => word.acceptedAnswers.sound.length > 1)!

const meta = {
  title: 'Pages/Japanese game/VariantsHint',
  component: VariantsHint,
  tags: ['ai-generated'],
  args: { word: wordWithVariants, mode: 'sound' },
} satisfies Meta<typeof VariantsHint>

export default meta
type Story = StoryObj<typeof meta>

export const PulsesTheFirstTime: Story = {
  beforeEach: () => {
    localStorage.removeItem(VARIANTS_HINT_SEEN_KEY)
  },
  play: async ({ canvas }) => {
    const trigger = canvas.getByRole('button', { name: /Variações aceitas/ })
    await expect(trigger).toHaveAttribute('data-pulse')
    await expect(getComputedStyle(trigger).animationName).toContain('variants-pulse')
    await waitFor(() => expect(localStorage.getItem(VARIANTS_HINT_SEEN_KEY)).toBe('1'))
  },
}

export const DoesNotPulseAfterBeingSeen: Story = {
  beforeEach: () => {
    localStorage.setItem(VARIANTS_HINT_SEEN_KEY, '1')
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /Variações aceitas/ })).not.toHaveAttribute('data-pulse')
  },
}
