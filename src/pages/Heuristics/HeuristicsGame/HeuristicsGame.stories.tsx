import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, screen, waitFor, within } from 'storybook/test'
import { AppRoutes } from '../../../AppRoutes'
import { heuristicsPaths } from '../../../navigation/pages'

const meta = {
  title: 'Pages/Heuristics game',
  component: AppRoutes,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppRoutes>

export default meta
type Story = StoryObj<typeof meta>

type Canvas = ReturnType<typeof within>

async function startGame(canvas: Canvas, userEvent: { click: (el: Element) => Promise<void> }, quantity = 5) {
  fireEvent.change(canvas.getByRole('slider'), { target: { value: String(quantity) } })
  await userEvent.click(canvas.getByRole('button', { name: 'Iniciar jogo' }))
}

async function answerAll(canvas: Canvas, userEvent: { click: (el: Element) => Promise<void> }, total: number) {
  for (let i = 0; i < total; i++) {
    const options = within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')
    await userEvent.click(options[0])
  }
}

export const HeuristicsPageHasActivitiesAndPracticeLink: Story = {
  parameters: { initialEntries: [heuristicsPaths.home] },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Heurísticas de Nielsen' })).toBeVisible()
    await expect(canvas.getByRole('heading', { name: 'Suas atividades' })).toBeVisible()
    await expect(canvas.getByText('Em breve')).toBeVisible()
    await expect(canvas.getByRole('link', { name: 'Pratique o que você estudou' })).toHaveAttribute(
      'href',
      heuristicsPaths.practice,
    )
    await expect(canvas.getByRole('link', { name: 'Heurísticas' })).toHaveAttribute('aria-current', 'page')
  },
}

export const SummaryDialogListsTenHeuristics: Story = {
  parameters: { initialEntries: [heuristicsPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('20 perguntas')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: /Ver resumo das heurísticas/ }))
    const dialog = within(await screen.findByRole('dialog'))
    await expect(dialog.getAllByRole('listitem')).toHaveLength(10)
    await expect(dialog.getByText(/Visibilidade do status do sistema/)).toBeVisible()
  },
}

export const FullGameFlowWithReviewAndAnswerKey: Story = {
  parameters: { initialEntries: [heuristicsPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await startGame(canvas, userEvent, 5)
    await expect(await canvas.findByText('0 de 5 respondidas')).toBeVisible()
    await expect(canvas.queryByRole('link', { name: 'UltraHub' })).toBeNull()
    await expect(canvas.getByRole('button', { name: 'Finalizar quiz' })).toBeDisabled()

    const first = within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')
    await userEvent.click(first[0])
    await expect(await canvas.findByText('1 de 5 respondidas')).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: 'Ir para a pergunta 1' }))
    const revisited = within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')
    await expect(revisited[0]).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(revisited[1])
    await expect(canvas.getByText('1 de 5 respondidas')).toBeVisible()
    await expect(revisited[1]).toHaveAttribute('aria-pressed', 'true')
    await expect(revisited[0]).toHaveAttribute('aria-pressed', 'false')

    await userEvent.click(canvas.getByRole('button', { name: 'Ir para a pergunta 2' }))
    await answerAll(canvas, userEvent, 4)
    await expect(await canvas.findByText('5 de 5 respondidas')).toBeVisible()
    await expect(canvas.getByRole('button', { name: 'Finalizar quiz' })).toBeEnabled()
    await userEvent.click(canvas.getByRole('button', { name: 'Finalizar quiz' }))

    await expect(await canvas.findByRole('heading', { name: /Fim de jogo/ })).toBeVisible()
    await expect(canvas.getByText(/Você acertou/)).toHaveTextContent(/de 5 perguntas/)
    await expect(canvas.getByRole('link', { name: 'UltraHub' })).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: 'Ver gabarito completo' }))
    await expect(canvas.getAllByRole('article')).toHaveLength(5)
    await expect(canvas.getAllByText('sua resposta').length).toBeGreaterThanOrEqual(5)
    await userEvent.click(canvas.getByRole('button', { name: 'Ocultar gabarito' }))
    await expect(canvas.queryAllByRole('article')).toHaveLength(0)

    await userEvent.click(canvas.getByRole('button', { name: 'Jogar novamente' }))
    await expect(await canvas.findByRole('button', { name: 'Iniciar jogo' })).toBeVisible()
  },
}

export const QuestionsMixPositiveAndNegativeWithKindBadge: Story = {
  parameters: { initialEntries: [heuristicsPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await startGame(canvas, userEvent, 5)
    await expect(await canvas.findByRole('group', { name: 'Alternativas' })).toBeVisible()
    await expect(
      canvas.getByText(/^(Positiva|Negativa|Nome → Descrição|Descrição → Nome)$/i),
    ).toBeVisible()
    await expect(within(canvas.getByRole('group', { name: 'Alternativas' })).getAllByRole('button')).toHaveLength(4)
  },
}

export const ExitAsksForConfirmation: Story = {
  parameters: { initialEntries: [heuristicsPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await startGame(canvas, userEvent)
    await userEvent.click(await canvas.findByRole('button', { name: /Sair/ }))
    const dialog = within(await screen.findByRole('alertdialog'))
    await userEvent.click(dialog.getByRole('button', { name: 'Continuar quiz' }))
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull())
    await expect(canvas.getByText('0 de 5 respondidas')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: /Sair/ }))
    await userEvent.click(within(await screen.findByRole('alertdialog')).getByRole('button', { name: 'Sair do quiz' }))
    await expect(await canvas.findByRole('button', { name: 'Iniciar jogo' })).toBeVisible()
  },
}

export const SummaryDialogAvailableDuringTheGame: Story = {
  parameters: { initialEntries: [heuristicsPaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await startGame(canvas, userEvent)
    await userEvent.click(await canvas.findByRole('button', { name: /Heurísticas/ }))
    await expect(await screen.findByRole('dialog')).toBeVisible()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
  },
}

export const GameWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [heuristicsPaths.game] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('button', { name: 'Iniciar jogo' })).toBeVisible()
  },
}

export const ResultWithoutSessionRedirectsToPractice: Story = {
  parameters: { initialEntries: [heuristicsPaths.result] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('button', { name: 'Iniciar jogo' })).toBeVisible()
  },
}
