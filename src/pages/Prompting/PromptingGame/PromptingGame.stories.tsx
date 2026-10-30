import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { AppRoutes } from '../../../AppRoutes'
import { getPromptType } from '../../../modules/prompting/data/promptTypes'
import { QUESTIONS } from '../../../modules/prompting/data/questions'
import { promptingPaths } from '../../../navigation/pages'

const meta = {
  title: 'Pages/Prompting game',
  component: AppRoutes,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppRoutes>

export default meta
type Story = StoryObj<typeof meta>

type Canvas = ReturnType<typeof within>
type User = { click: (el: Element) => Promise<void> }

const currentQuestion = (canvas: Canvas) => {
  const text = canvas.getByRole('heading', { level: 1 }).textContent?.trim()
  const code = canvas.queryByRole('heading', { level: 1 })?.parentElement?.querySelector('pre')?.textContent?.trim() ?? ''
  const question = QUESTIONS.find(
    (candidate) => candidate.question.trim() === text && (candidate.code?.trim() ?? '') === code,
  )
  if (!question) throw new Error(`Question not found: ${text}`)
  return question
}

const optionButton = (canvas: Canvas, text: string) => {
  const group = within(canvas.getByRole('group', { name: 'Alternativas' }))
  const button = group.getAllByRole('button').find((candidate) => within(candidate).queryByText(text, { exact: true }))
  if (!button) throw new Error(`Option not found: ${text}`)
  return button
}

async function answerCurrent(canvas: Canvas, userEvent: User, correct: boolean) {
  const question = currentQuestion(canvas)
  const correctText = getPromptType(question.answer).name
  const wrongText = getPromptType(question.distractors[0]).name
  await userEvent.click(optionButton(canvas, correct ? correctText : wrongText))
  await userEvent.click(canvas.getByRole('button', { name: 'Confirmar resposta' }))
}

async function nextQuestion(canvas: Canvas, userEvent: User) {
  await userEvent.click(canvas.getByRole('button', { name: /Próxima pergunta|Ver resultado/ }))
}

export const PromptingIsInTechMenuAndHomeLinksToPractice: Story = {
  parameters: { initialEntries: [promptingPaths.home] },
  play: async ({ canvas }) => {
    const nav = within(canvas.getByRole('navigation', { name: 'Navegação principal' }))
    await expect(nav.getByRole('link', { name: 'Prompting' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('heading', { name: 'Prompting' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Pratique o que você estudou' })).toHaveAttribute(
      'href',
      promptingPaths.practice,
    )
    await expect(canvas.getByText('Em breve')).toBeVisible()
  },
}

export const PracticeOnlyAsksForQuestionCount: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('heading', { name: 'Prompting: escolha seu treino' })).toHaveLength(2)
    for (const count of [5, 10, 15, 20]) {
      await expect(canvas.getByRole('radio', { name: String(count) })).toBeEnabled()
    }
    await expect(canvas.getByRole('radio', { name: '10' })).toBeChecked()
    await expect(canvas.queryByRole('group', { name: 'Dificuldade' })).toBeNull()
    await expect(canvas.queryByRole('button', { name: /Rápido|Treino|Desafio/ })).toBeNull()
    await expect(canvas.getByText(`Perguntas disponíveis: ${QUESTIONS.length}.`)).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Voltar' })).toHaveAttribute('href', promptingPaths.home)
  },
}

export const FullFlowWithTrainingOfMistakes: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: '5' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))

    await expect(await canvas.findByText('Questão 1 de 5')).toBeVisible()
    await expect(canvas.queryByRole('link', { name: 'UltraHub' })).toBeNull()
    await expect(canvas.getByText('20%')).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Confirmar resposta' })).toBeDisabled()

    let wrongQuestionId = ''
    for (let i = 0; i < 5; i++) {
      await expect(canvas.getByText(`Questão ${i + 1} de 5`)).toBeVisible()
      await expect(within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')).toHaveLength(4)
      await expect(canvas.queryByText(/🟢|🟡|🔴/)).toBeNull()
      const question = currentQuestion(canvas)
      const correct = i !== 1
      if (!correct) wrongQuestionId = question.id
      await answerCurrent(canvas, userEvent, correct)
      await expect(
        await canvas.findByText(correct ? '✅ Resposta correta!' : '❌ Resposta incorreta.'),
      ).toBeVisible()
      await expect(canvas.getByText(question.explanation)).toBeVisible()
      await nextQuestion(canvas, userEvent)
    }

    await expect(await canvas.findByRole('heading', { name: /Quiz finalizado/ })).toBeVisible()
    await expect(canvas.getByText('4 / 5')).toBeVisible()
    await expect(canvas.getByText('80% de acerto')).toBeVisible()
    await expect(canvas.getByText('Muito bom')).toBeVisible()
    await expect(canvas.getByText('✅ 4 acertos')).toBeVisible()
    await expect(canvas.getByText('❌ 1 erros')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'UltraHub' })).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: 'Treinar meus erros' }))
    await expect(await canvas.findByText('Questão 1 de 1')).toBeVisible()
    await expect(currentQuestion(canvas).id).toBe(wrongQuestionId)
    await answerCurrent(canvas, userEvent, true)
    await userEvent.click(canvas.getByRole('button', { name: 'Ver resultado' }))
    await expect(await canvas.findByText('1 / 1')).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'Treinar meus erros' })).toBeNull()

    await userEvent.click(canvas.getByRole('button', { name: 'Novo quiz' }))
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

export const ResultCanGoBackToTheModule: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: '5' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await canvas.findByText('Questão 1 de 5')
    for (let i = 0; i < 5; i++) {
      await answerCurrent(canvas, userEvent, true)
      await nextQuestion(canvas, userEvent)
    }
    await expect(await canvas.findByText('5 / 5')).toBeVisible()
    await expect(canvas.getByText('100% de acerto')).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'Treinar meus erros' })).toBeNull()
    await userEvent.click(canvas.getByRole('button', { name: 'Voltar ao módulo' }))
    await expect(await canvas.findByRole('link', { name: 'Pratique o que você estudou' })).toBeVisible()
  },
}

export const TwentyQuestionsHaveNoRepeatedQuestion: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: '20' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await expect(await canvas.findByText('Questão 1 de 20')).toBeVisible()
    const seen = new Set<string>()
    for (let i = 0; i < 20; i++) {
      seen.add(currentQuestion(canvas).id)
      if (i < 19) {
        await answerCurrent(canvas, userEvent, true)
        await nextQuestion(canvas, userEvent)
      }
    }
    await expect(seen.size).toBe(20)
  },
}

export const OptionsShowStateAfterConfirming: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await canvas.findByText('Questão 1 de 10')
    const question = currentQuestion(canvas)

    await userEvent.click(optionButton(canvas, getPromptType(question.distractors[0]).name))
    await expect(canvas.getByText('Selecionada')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Confirmar resposta' }))

    await expect(await canvas.findByText('✅ Resposta correta')).toBeVisible()
    await expect(canvas.getByText('❌ Sua resposta')).toBeVisible()
    for (const button of within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')) {
      await expect(button).toBeDisabled()
    }
  },
}

export const HintCanBeRevealedBeforeAnswering: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await canvas.findByText('Questão 1 de 10')
    const hint = currentQuestion(canvas).hint
    await userEvent.click(canvas.getByRole('button', { name: /Mostrar dica/ }))
    await expect(canvas.getByText(`💡 Dica: ${hint}`)).toBeVisible()
    await expect(canvas.queryByRole('button', { name: /Mostrar dica/ })).toBeNull()
  },
}

export const ExitAsksForConfirmation: Story = {
  parameters: { initialEntries: [promptingPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await userEvent.click(await canvas.findByRole('button', { name: 'Sair do quiz' }))
    const dialog = within(await screen.findByRole('alertdialog'))
    await userEvent.click(dialog.getByRole('button', { name: 'Continuar quiz' }))
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull())
    await expect(canvas.getByText('Questão 1 de 10')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Sair do quiz' }))
    await userEvent.click(within(await screen.findByRole('alertdialog')).getByRole('button', { name: 'Sair' }))
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

export const GameWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [promptingPaths.game] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

export const ResultWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [promptingPaths.result] },
  play: async ({ canvas }) => {
    await expect((await canvas.findAllByRole('heading', { name: 'Prompting: escolha seu treino' }))[0]).toBeVisible()
  },
}
