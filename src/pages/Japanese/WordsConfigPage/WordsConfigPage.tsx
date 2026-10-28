import { useNavigate } from 'react-router'
import { MIN_CARDS } from '../../../modules/japanese/data/hiragana'
import { WORDS, WORD_MAX_CARDS, type WordType } from '../../../modules/japanese/data/words'
import { buildWordDeck } from '../../../modules/japanese/game/deck'
import { useGame } from '../../../modules/japanese/game/gameContext'
import { getAvailableCategories, getWordsForCategories } from '../../../modules/japanese/game/pools'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { PoolConfigScreen } from '../PoolConfigScreen/PoolConfigScreen'

const chips = getAvailableCategories().map((category) => ({
  id: category.id,
  sample: category.sample,
  label: category.label,
  count: `${WORDS.filter((word) => word.type === category.id).length} palavras`,
}))

const describePool = (count: number, size: number, min: number): string => {
  if (count > size) {
    return `As ${size} palavras selecionadas aparecerão ao menos uma vez; as outras ${count - size} serão sorteadas entre elas.`
  }
  const base = `Palavras disponíveis nas categorias selecionadas: ${size}.`
  return min > MIN_CARDS
    ? `${base} Mínimo ajustado para ${min} para que todas apareçam ao menos uma vez.`
    : base
}

export function WordsConfigPage() {
  const { state, dispatch } = useGame()
  const navigate = useNavigate()
  const { selectedCategoryIds, wordCount, wordMode } = state.config

  return (
    <PoolConfigScreen
      backTo={japanesePaths.wordsHome}
      badge={`Palavras · ${wordMode === 'sound' ? 'Som' : 'Significado'}`}
      title="Modo Livre"
      subtitle="Selecione as categorias e a quantidade de palavras da partida."
      chipsLabel="Categorias"
      chips={chips}
      selectedIds={selectedCategoryIds}
      onToggle={(id) => dispatch({ type: 'toggleCategory', id: id as WordType })}
      sliderSectionLabel="Quantidade de palavras"
      sliderLabel="Quantidade de palavras"
      formatValue={(count) => `Quantidade: ${count} palavras`}
      storedCount={wordCount}
      maxCount={WORD_MAX_CARDS}
      poolSize={getWordsForCategories(selectedCategoryIds).length}
      describePool={describePool}
      emptyMessage="Selecione ao menos uma categoria."
      onCountChange={(value) => dispatch({ type: 'setWordCount', value })}
      onStart={(count) => {
        dispatch({
          type: 'startWords',
          mode: wordMode,
          deck: buildWordDeck(getWordsForCategories(selectedCategoryIds), count),
        })
        enterFullscreen()
        navigate(japanesePaths.game)
      }}
    />
  )
}
