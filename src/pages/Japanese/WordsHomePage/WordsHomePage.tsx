import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ActionCard, Typography } from '../../../components'
import type { WordMode } from '../../../modules/japanese/data/words'
import { buildWordDeck } from '../../../modules/japanese/game/deck'
import { useGame } from '../../../modules/japanese/game/gameContext'
import { getWordsForCategories, randomWordsSelection } from '../../../modules/japanese/game/pools'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { PracticeScreen } from '../PracticeScreen/PracticeScreen'

const studyModes: { id: WordMode; title: string; description: string }[] = [
  { id: 'sound', title: 'Som', description: 'Veja a palavra e o significado; escreva como se lê.' },
  { id: 'meaning', title: 'Significado', description: 'Veja só a palavra; escreva o significado em português.' },
]

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))', gap: 'var(--space-4)' } as const

export function WordsHomePage() {
  const { state, dispatch } = useGame()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'clearSession' })
  }, [dispatch])
  const { wordMode } = state.config

  const startRandom = () => {
    const { categoryIds, count } = randomWordsSelection()
    dispatch({
      type: 'startWords',
      mode: wordMode,
      deck: buildWordDeck(getWordsForCategories(categoryIds), count),
    })
    enterFullscreen()
    navigate(japanesePaths.game)
  }

  return (
    <PracticeScreen
      backTo={japanesePaths.practice}
      backLabel="Módulos"
      badge="Palavras"
      title="Praticar palavras"
      subtitle="Escolha o modo de estudo e como deseja praticar. No modo livre você configura as categorias e a quantidade de palavras; no modo aleatório tudo é definido automaticamente para você."
    >
      <Typography variant="label" uppercase>
        Modo de estudo
      </Typography>
      <div style={grid} role="radiogroup" aria-label="Modo de estudo">
        {studyModes.map((mode) => (
          <ActionCard
            key={mode.id}
            title={mode.title}
            role="radio"
            aria-checked={wordMode === mode.id}
            onClick={() => dispatch({ type: 'setWordMode', mode: mode.id })}
          >
            {mode.description}
          </ActionCard>
        ))}
      </div>
      <Typography variant="label" uppercase>
        Como praticar
      </Typography>
      <div style={grid}>
        <ActionCard title="Modo Livre" to={japanesePaths.wordsConfig}>
          Escolha as categorias e a quantidade de palavras.
        </ActionCard>
        <ActionCard title="Modo Aleatório" onClick={startRandom}>
          Categorias e quantidade de palavras definidas automaticamente.
        </ActionCard>
      </div>
    </PracticeScreen>
  )
}
