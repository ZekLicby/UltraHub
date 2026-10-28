import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, fireEvent, screen, waitFor, within } from 'storybook/test'
import { AppRoutes } from '../../../AppRoutes'
import { HIRAGANA_GROUPS } from '../../../modules/japanese/data/hiragana'
import { WORDS } from '../../../modules/japanese/data/words'
import { japanesePaths } from '../../../navigation/pages'

const meta = {
  title: 'Pages/Japanese game',
  component: AppRoutes,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppRoutes>

export default meta
type Story = StoryObj<typeof meta>

const allLetters = HIRAGANA_GROUPS.flatMap((group) => group.chars)
const slow = { timeout: 5000 }

const currentJapanese = (root: HTMLElement): string =>
  root.querySelector('main [lang="ja"]')?.textContent ?? ''

type User = { type: (el: Element, text: string) => Promise<void> }

async function submit(canvas: ReturnType<typeof within>, userEvent: User, text: string) {
  const input = canvas.getByRole('textbox')
  await userEvent.type(input, `${text}{Enter}`)
}

async function waitForNextCard(canvas: ReturnType<typeof within>) {
  await waitFor(() => expect(canvas.getByRole('textbox')).toBeEnabled(), slow)
}

export const ModulesPageGroupsAlphabetAndWords: Story = {
  parameters: { initialEntries: [japanesePaths.practice] },
  play: async ({ canvas, userEvent }) => {
    const alphabet = within(canvas.getByRole('region', { name: 'Alfabeto' }))
    const words = within(canvas.getByRole('region', { name: 'Palavras' }))
    for (const section of [alphabet, words]) {
      await expect(section.getByText('Hiragana')).toBeVisible()
      await expect(section.getByText('Katakana')).toBeVisible()
      await expect(section.getByText('Kanji')).toBeVisible()
    }
    await expect(canvas.getAllByText('Em breve')).toHaveLength(4)
    await expect(canvas.getByText('Memorize os katakanas um a um.').closest('[aria-disabled]')).not.toBeNull()
    await expect(alphabet.getByRole('link', { name: /Hiragana/ })).not.toHaveAttribute('aria-disabled')
    await expect(alphabet.getAllByRole('link')).toHaveLength(1)
    await expect(words.getAllByRole('link')).toHaveLength(1)

    await userEvent.click(alphabet.getByRole('link', { name: /Hiragana/ }))
    await expect(canvas.getByRole('heading', { name: 'Praticar hiragana' })).toBeVisible()
    await userEvent.click(canvas.getByRole('link', { name: 'Módulos' }))
    await userEvent.click(within(canvas.getByRole('region', { name: 'Palavras' })).getByRole('link', { name: /Hiragana/ }))
    await expect(canvas.getByRole('heading', { name: 'Praticar palavras' })).toBeVisible()
  },
}

export const ModulesPageHasBackLinkToJapanese: Story = {
  parameters: { initialEntries: [japanesePaths.practice] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('link', { name: 'Voltar' }))
    await expect(await canvas.findByRole('heading', { name: 'Suas atividades' })).toBeVisible()
  },
}

export const LettersFullFlowWithTrainingOfMistakes: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /さしすせそ/ }))
    await expect(canvas.getByText(/Os 5 hiraganas selecionados/)).toBeVisible()
    fireEvent.change(canvas.getByRole('slider'), { target: { value: '5' } })
    await expect(canvas.getByText('Cards: 5')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))

    for (let i = 0; i < 5; i++) {
      await expect(canvas.getByText(`${i + 1} / 5`)).toBeVisible()
      const letter = allLetters.find((l) => l.char === currentJapanese(canvasElement))
      await submit(canvas, userEvent, i === 2 ? 'zzz' : (letter?.romaji ?? ''))
      if (i < 4) await waitForNextCard(canvas)
    }

    await canvas.findByRole('heading', { name: 'Partida finalizada!' }, slow)
    await expect(canvas.getByText('Acertos').previousSibling).toHaveTextContent('4')
    await expect(canvas.getByText('Erros').previousSibling).toHaveTextContent('1')
    await expect(canvas.getByText(/esperado:/)).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: 'Treinar erros' }))
    await expect(await canvas.findByText('1 / 1')).toBeVisible()
    const letter = allLetters.find((l) => l.char === currentJapanese(canvasElement))
    await submit(canvas, userEvent, letter?.romaji ?? '')
    await canvas.findByRole('heading', { name: 'Partida finalizada!' }, slow)
    await expect(canvas.getByText('Erros').previousSibling).toHaveTextContent('0')
    await expect(canvas.queryByRole('button', { name: 'Treinar erros' })).toBeNull()

    await userEvent.click(canvas.getByRole('button', { name: 'Nova partida' }))
    await expect(canvas.getByRole('heading', { name: 'Praticar hiragana' })).toBeVisible()
  },
}

export const GameHidesLayoutAndResultBringsItBack: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(canvas.getByRole('link', { name: 'UltraHub' })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: /さしすせそ/ }))
    fireEvent.change(canvas.getByRole('slider'), { target: { value: '5' } })
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))

    await expect(canvas.queryByRole('link', { name: 'UltraHub' })).toBeNull()
    await expect(canvas.queryByRole('navigation')).toBeNull()
    await expect(canvas.getByRole('button', { name: 'Sair' })).toBeVisible()

    for (let i = 0; i < 5; i++) {
      const letter = allLetters.find((l) => l.char === currentJapanese(canvasElement))
      await submit(canvas, userEvent, letter?.romaji ?? '')
      if (i < 4) await waitForNextCard(canvas)
    }
    await canvas.findByRole('heading', { name: 'Partida finalizada!' }, slow)
    await expect(canvas.getByRole('link', { name: 'UltraHub' })).toBeVisible()
  },
}

export const StartingAGameRequestsBrowserFullscreen: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, userEvent }) => {
    const request = fn(() => Promise.resolve())
    Object.defineProperty(document.documentElement, 'requestFullscreen', { value: request, configurable: true })
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))
    await expect(request).toHaveBeenCalledTimes(1)
    Reflect.deleteProperty(document.documentElement, 'requestFullscreen')
  },
}

export const FeedbackShowsExpectedAnswerWhenWrong: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))
    await submit(canvas, userEvent, 'zzz')
    await expect(await canvas.findByText(/Incorreto — resposta:/)).toBeVisible()
    await expect(canvas.getByRole('textbox')).toBeDisabled()
  },
}

export const RandomModeStartsAGame: Story = {
  parameters: { initialEntries: [japanesePaths.lettersHome] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Modo Aleatório/ }))
    await expect(await canvas.findByRole('textbox')).toBeVisible()
    await expect(canvas.getByText(/^1 \/ \d+$/)).toBeVisible()
  },
}

export const ExitAsksForConfirmation: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))
    await userEvent.click(canvas.getByRole('button', { name: 'Sair' }))
    const dialog = within(await screen.findByRole('alertdialog'))
    await userEvent.click(dialog.getByRole('button', { name: 'Continuar partida' }))
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull())
    await expect(canvas.getByRole('textbox')).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Sair' }))
    await userEvent.click(within(await screen.findByRole('alertdialog')).getByRole('button', { name: 'Sair da partida' }))
    await expect(await canvas.findByRole('heading', { name: 'Praticar hiragana' })).toBeVisible()
  },
}

export const ConfigBlocksStartWithoutSelection: Story = {
  parameters: { initialEntries: [japanesePaths.lettersConfig] },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /かきくけこ/ }))
    await userEvent.click(canvas.getByRole('button', { name: /さしすせそ/ }))
    await expect(canvas.getByRole('alert')).toHaveTextContent('Selecione ao menos um grupo de hiragana.')
    await expect(canvas.getByRole('button', { name: 'Começar' })).toBeDisabled()
  },
}

export const WordsSoundModeShowsMeaning: Story = {
  parameters: { initialEntries: [japanesePaths.wordsHome] },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await expect(canvas.getByRole('radio', { name: /Som/ })).toHaveAttribute('aria-checked', 'true')
    await userEvent.click(canvas.getByRole('link', { name: /Modo Livre/ }))
    await expect(canvas.getByText('Palavras · Som', { selector: 'span' })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))

    const word = WORDS.find((w) => w.japanese === currentJapanese(canvasElement))
    await expect(word).toBeDefined()
    await expect(canvas.getByText(word!.meaning)).toBeVisible()
    await submit(canvas, userEvent, word!.acceptedAnswers.sound[0])
    await expect(await canvas.findByText('✓ Correto')).toBeVisible()
  },
}

export const WordsMeaningModeHidesMeaning: Story = {
  parameters: { initialEntries: [japanesePaths.wordsHome] },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('radio', { name: /Significado/ }))
    await userEvent.click(canvas.getByRole('link', { name: /Modo Livre/ }))
    await userEvent.click(canvas.getByRole('button', { name: 'Começar' }))

    const word = WORDS.find((w) => w.japanese === currentJapanese(canvasElement))
    await expect(word).toBeDefined()
    await expect(canvas.queryByText(word!.meaning, { selector: 'main span' })).toBeNull()
    await expect(canvas.getByLabelText('O que significa?')).toBeVisible()
    await submit(canvas, userEvent, word!.acceptedAnswers.meaning[0])
    await expect(await canvas.findByText('✓ Correto')).toBeVisible()
  },
}

export const GameWithoutSessionRedirectsToModules: Story = {
  parameters: { initialEntries: [japanesePaths.game] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('heading', { name: 'O que você quer praticar?' })).toBeVisible()
  },
}

export const ResultWithoutSessionRedirectsToModules: Story = {
  parameters: { initialEntries: [japanesePaths.result] },
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole('heading', { name: 'O que você quer praticar?' })).toBeVisible()
  },
}
