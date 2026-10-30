import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Box } from '../../../components'
import { buildSessionQuestion } from '../game/quiz'
import { PROMPT_TYPES } from './promptTypes'
import { QUESTIONS } from './questions'

const meta = {
  title: 'Modules/Prompting question bank',
  render: () => <Box as="div" />,
  tags: ['ai-generated'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CoversEveryTypeWithBothFormats: Story = {
  play: async () => {
    await expect(PROMPT_TYPES).toHaveLength(20)
    await expect(QUESTIONS).toHaveLength(40)
    await expect(new Set(QUESTIONS.map((question) => question.id)).size).toBe(QUESTIONS.length)
    for (const type of PROMPT_TYPES) {
      const formats = QUESTIONS.filter((question) => question.answer === type.id)
        .map((question) => question.format)
        .sort()
      await expect(formats).toEqual(['description', 'example'])
    }
  },
}

export const EveryQuestionHasFourDistinctOptionsAndOneCorrect: Story = {
  play: async () => {
    for (const question of QUESTIONS) {
      await expect(new Set([question.answer, ...question.distractors]).size).toBe(4)
      const session = buildSessionQuestion(question)
      await expect(session.options).toHaveLength(4)
      await expect(new Set(session.options.map((option) => option.text)).size).toBe(4)
      await expect(session.options.filter((option) => option.id === session.correctAnswer)).toHaveLength(1)
    }
  },
}

export const EveryQuestionHasTextHintAndExplanation: Story = {
  play: async () => {
    for (const question of QUESTIONS) {
      await expect(question.question.trim()).not.toBe('')
      await expect(question.hint.trim()).not.toBe('')
      await expect(question.explanation.trim()).not.toBe('')
      if (question.format === 'example') await expect(question.code?.trim()).toBeTruthy()
    }
  },
}

export const VisibleTextNeverRevealsTheAnswer: Story = {
  play: async () => {
    for (const question of QUESTIONS) {
      const answer = PROMPT_TYPES.find((type) => type.id === question.answer)
      if (!answer) throw new Error(`Unknown type: ${question.answer}`)
      const visible = `${question.question}\n${question.code ?? ''}\n${question.hint}`.toLowerCase()
      const names = [answer.name, answer.name.replace(/\s*\(.*\)/, '')]
      for (const name of names) await expect(visible.includes(name.toLowerCase())).toBe(false)
    }
  },
}
