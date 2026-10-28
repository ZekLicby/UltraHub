import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { HEURISTICS, HEURISTIC_IDS } from '../data/heuristics'
import { PHASES } from '../data/questions'
import { mockups, type MockupName } from './mockups'

const names = Object.keys(mockups) as MockupName[]

function AllMockups() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(32rem, 1fr))', gap: 'var(--space-4)' }}>
      {names.map((name) => (
        <figure key={name} style={{ margin: 0 }} aria-label={name}>
          {mockups[name]()}
          <figcaption style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

const meta = {
  title: 'Modules/Heuristics/Mockups',
  component: AllMockups,
  tags: ['ai-generated'],
} satisfies Meta<typeof AllMockups>

export default meta
type Story = StoryObj<typeof meta>

export const AllRender: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('figure')).toHaveLength(40)
  },
}

export const QuestionBankIsConsistent: Story = {
  play: async () => {
    const used = new Set<string>()
    for (const phase of PHASES) {
      await expect(HEURISTIC_IDS).toContain(phase.heuristicId)
      for (const question of phase.questions) {
        used.add(question.mockup)
        await expect(names).toContain(question.mockup)
        await expect(question.distractorIds).toHaveLength(3)
        await expect(question.distractorIds).not.toContain(question.correctId)
        for (const id of [question.correctId, ...question.distractorIds]) {
          await expect(HEURISTICS[id]).toBeDefined()
          await expect(question.explanations[id]?.length ?? 0).toBeGreaterThan(10)
        }
      }
    }
    await expect(used.size).toBe(names.length)
  },
}
