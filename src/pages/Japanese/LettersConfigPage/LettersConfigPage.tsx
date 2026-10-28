import { useNavigate } from 'react-router'
import { HIRAGANA_GROUPS, MAX_CARDS, MIN_CARDS } from '../../../modules/japanese/data/hiragana'
import { buildDeck } from '../../../modules/japanese/game/deck'
import { useGame } from '../../../modules/japanese/game/gameContext'
import { getLettersForGroups } from '../../../modules/japanese/game/pools'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { PoolConfigScreen } from '../PoolConfigScreen/PoolConfigScreen'

const chips = HIRAGANA_GROUPS.map((group) => ({
  id: group.id,
  sample: group.chars.map((c) => c.char).join(''),
  label: group.label,
}))

const describePool = (count: number, size: number, min: number): string => {
  if (count > size) {
    return `Os ${size} hiraganas selecionados aparecerão ao menos uma vez; os outros ${count - size} cards serão sorteados entre eles.`
  }
  const base = `Hiraganas disponíveis nos grupos selecionados: ${size}.`
  return min > MIN_CARDS
    ? `${base} Mínimo ajustado para ${min} para que todos apareçam ao menos uma vez.`
    : base
}

export function LettersConfigPage() {
  const { state, dispatch } = useGame()
  const navigate = useNavigate()
  const { selectedGroupIds, cardCount } = state.config

  return (
    <PoolConfigScreen
      backTo={japanesePaths.lettersHome}
      badge="Letras"
      title="Modo Livre"
      subtitle="Selecione os grupos de hiragana e a quantidade de cards da partida."
      chipsLabel="Grupos"
      chips={chips}
      selectedIds={selectedGroupIds}
      onToggle={(id) => dispatch({ type: 'toggleGroup', id })}
      sliderSectionLabel="Quantidade de cards"
      sliderLabel="Quantidade de cards"
      formatValue={(count) => `Cards: ${count}`}
      storedCount={cardCount}
      maxCount={MAX_CARDS}
      poolSize={getLettersForGroups(selectedGroupIds).length}
      describePool={describePool}
      emptyMessage="Selecione ao menos um grupo de hiragana."
      onCountChange={(value) => dispatch({ type: 'setCardCount', value })}
      onStart={(count) => {
        dispatch({ type: 'startLetters', deck: buildDeck(getLettersForGroups(selectedGroupIds), count) })
        enterFullscreen()
        navigate(japanesePaths.game)
      }}
    />
  )
}
