import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, screen, waitFor, within } from 'storybook/test'
import { AppRoutes } from '../../../AppRoutes'
import { QUESTIONS, type QuestionCategory } from '../../../modules/codeQuest/data/questions'
import { CATEGORY_LABELS } from '../../../modules/codeQuest/game/labels'
import { countAvailable } from '../../../modules/codeQuest/game/quiz'
import { quizPaths } from '../../../navigation/pages'

const meta = {
  title: 'Pages/Quiz games',
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
  const question = QUESTIONS.find((candidate) => candidate.question.trim() === text)
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
  const correctText = question.options[question.correctAnswer]
  const wrongText = question.options.find((_, index) => index !== question.correctAnswer) as string
  await userEvent.click(optionButton(canvas, correct ? correctText : wrongText))
  await userEvent.click(canvas.getByRole('button', { name: 'Confirmar resposta' }))
}

async function nextQuestion(canvas: Canvas, userEvent: User) {
  await userEvent.click(canvas.getByRole('button', { name: /Próxima pergunta|Ver resultado/ }))
}

const ts = quizPaths('typescript')

export const EachGameHasItsOwnPageInTechMenu: Story = {
  parameters: { initialEntries: [ts.home] },
  play: async ({ canvas }) => {
    const nav = within(canvas.getByRole('navigation', { name: 'Navegação principal' }))
    for (const name of ['React', 'Heurísticas', 'TypeScript', 'Node.js', 'POO']) {
      await expect(nav.getByRole('link', { name })).toBeVisible()
    }
    await expect(nav.getByRole('link', { name: 'TypeScript' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('heading', { name: 'TypeScript' })).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Pratique o que você estudou' })).toHaveAttribute(
      'href',
      ts.practice,
    )
  },
}

export const HomePagesExistForNodeAndOop: Story = {
  parameters: { initialEntries: [quizPaths('node').home] },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByRole('heading', { name: 'Node.js' })).toBeVisible()
    await expect(canvas.getByText(/Estude módulos, assincronismo/)).toBeVisible()
    await userEvent.click(within(canvas.getByRole('navigation', { name: 'Navegação principal' })).getByRole('link', { name: 'POO' }))
    await expect(await canvas.findByRole('heading', { name: 'Orientação a Objetos' })).toBeVisible()
    await expect(canvas.getByText('Em breve')).toBeVisible()
  },
}

export const PracticeShowsModesAndCustomForm: Story = {
  parameters: { initialEntries: [ts.practice] },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('heading', { name: 'TypeScript: escolha seu treino' })).toHaveLength(2)
    for (const name of ['Rápido', 'Treino', 'Desafio']) {
      await expect(canvas.getByRole('button', { name: new RegExp(name) })).toBeVisible()
    }
    await expect(canvas.getByRole('separator')).toHaveTextContent('ou')
    await expect(canvas.queryByRole('group', { name: 'Categoria' })).toBeNull()
    await expect(within(canvas.getByRole('group', { name: 'Dificuldade' })).getByRole('radio', { name: 'Todas' })).toBeChecked()
    await expect(canvas.getByRole('radio', { name: '10' })).toBeChecked()
    await expect(canvas.getByRole('button', { name: 'Começar quiz' })).toBeEnabled()
    await expect(canvas.getByRole('link', { name: 'Voltar' })).toHaveAttribute('href', ts.home)
  },
}

export const CountOptionsFollowAvailableQuestions: Story = {
  parameters: { initialEntries: [quizPaths('oop').practice] },
  play: async ({ canvas, userEvent }) => {
    const available = countAvailable('oop', ['easy'])
    await userEvent.click(within(canvas.getByRole('group', { name: 'Dificuldade' })).getByText('Fácil'))
    for (const count of [5, 10, 15, 20]) {
      const radio = canvas.getByRole('radio', { name: String(count) })
      if (count > available) await expect(radio).toBeDisabled()
      else await expect(radio).toBeEnabled()
    }
    await expect(canvas.getByText(new RegExp(`disponíveis com esses filtros: ${available} de 60`))).toBeVisible()
  },
}

export const QuickModeFullFlowWithTrainingOfMistakes: Story = {
  parameters: { initialEntries: [ts.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Rápido/ }))

    await expect(await canvas.findByText('Questão 1 de 5')).toBeVisible()
    await expect(canvas.queryByRole('link', { name: 'UltraHub' })).toBeNull()
    await expect(canvas.getByText('20%')).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Confirmar resposta' })).toBeDisabled()

    for (let i = 0; i < 5; i++) {
      await expect(canvas.getByText(`Questão ${i + 1} de 5`)).toBeVisible()
      await expect(currentQuestion(canvas).category).toBe('typescript')
      const correct = i !== 1
      await answerCurrent(canvas, userEvent, correct)
      await expect(
        await canvas.findByText(correct ? '✅ Resposta correta!' : '❌ Resposta incorreta.'),
      ).toBeVisible()
      await expect(canvas.getByText(currentQuestion(canvas).explanation)).toBeVisible()
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
    await answerCurrent(canvas, userEvent, true)
    await userEvent.click(canvas.getByRole('button', { name: 'Ver resultado' }))
    await expect(await canvas.findByText('1 / 1')).toBeVisible()
    await expect(canvas.queryByRole('button', { name: 'Treinar meus erros' })).toBeNull()

    await userEvent.click(canvas.getByRole('button', { name: 'Novo quiz' }))
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

const quickModeStory = (category: QuestionCategory): Story => ({
  parameters: { initialEntries: [quizPaths(category).practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Rápido/ }))
    await expect(await canvas.findByText('Questão 1 de 5')).toBeVisible()
    for (let i = 0; i < 5; i++) {
      await expect(currentQuestion(canvas).category).toBe(category)
      if (i < 4) {
        await answerCurrent(canvas, userEvent, true)
        await nextQuestion(canvas, userEvent)
      }
    }
    await expect(canvas.getAllByText(new RegExp(CATEGORY_LABELS[category]))[0]).toBeVisible()
  },
})

export const NodeQuizOnlyAsksNodeQuestions: Story = quickModeStory('node')

export const OopQuizOnlyAsksOopQuestions: Story = quickModeStory('oop')

export const OptionsShowStateAfterConfirming: Story = {
  parameters: { initialEntries: [ts.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Rápido/ }))
    await canvas.findByText('Questão 1 de 5')
    const question = currentQuestion(canvas)
    const wrongText = question.options.find((_, index) => index !== question.correctAnswer) as string

    await userEvent.click(optionButton(canvas, wrongText))
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
  parameters: { initialEntries: [ts.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Rápido/ }))
    await canvas.findByText('Questão 1 de 5')
    const hint = currentQuestion(canvas).hint
    await userEvent.click(canvas.getByRole('button', { name: /Mostrar dica/ }))
    await expect(canvas.getByText(`💡 Dica: ${hint}`)).toBeVisible()
    await expect(canvas.queryByRole('button', { name: /Mostrar dica/ })).toBeNull()
  },
}

export const ExitAsksForConfirmation: Story = {
  parameters: { initialEntries: [ts.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Rápido/ }))
    await userEvent.click(await canvas.findByRole('button', { name: 'Sair do quiz' }))
    const dialog = within(await screen.findByRole('alertdialog'))
    await userEvent.click(dialog.getByRole('button', { name: 'Continuar quiz' }))
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull())
    await expect(canvas.getByText('Questão 1 de 5')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Sair do quiz' }))
    await userEvent.click(within(await screen.findByRole('alertdialog')).getByRole('button', { name: 'Sair' }))
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

export const CustomQuizUsesChosenDifficultyAndCount: Story = {
  parameters: { initialEntries: [quizPaths('node').practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(within(canvas.getByRole('group', { name: 'Dificuldade' })).getByText('Difícil'))
    await userEvent.click(canvas.getByRole('radio', { name: '5' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Começar quiz' }))
    await expect(await canvas.findByText('Questão 1 de 5')).toBeVisible()
    await expect(canvas.getByText('🟩 Node.js')).toBeVisible()
    await expect(canvas.getByText('🔴 Difícil')).toBeVisible()
  },
}

export const GameWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [ts.game] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('button', { name: 'Começar quiz' })).toBeVisible()
  },
}

export const ResultWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [quizPaths('oop').result] },
  play: async ({ canvas }) => {
    await expect((await canvas.findAllByRole('heading', { name: 'POO: escolha seu treino' }))[0]).toBeVisible()
  },
}
