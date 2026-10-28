import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ActionCard } from '../../../components'
import { buildDeck } from '../../../modules/japanese/game/deck'
import { useGame } from '../../../modules/japanese/game/gameContext'
import { getLettersForGroups, randomLettersSelection } from '../../../modules/japanese/game/pools'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { PracticeScreen } from '../PracticeScreen/PracticeScreen'

export function LettersHomePage() {
  const { dispatch } = useGame()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'clearSession' })
  }, [dispatch])

  const startRandom = () => {
    const { groupIds, count } = randomLettersSelection()
    dispatch({ type: 'startLetters', deck: buildDeck(getLettersForGroups(groupIds), count) })
    enterFullscreen()
    navigate(japanesePaths.game)
  }

  return (
    <PracticeScreen
      backTo={japanesePaths.practice}
      backLabel="Módulos"
      badge="Letras"
      title="Praticar hiragana"
      subtitle="Escolha como deseja praticar. No modo livre você configura os grupos e a quantidade de cards; no modo aleatório tudo é definido automaticamente para você."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))', gap: 'var(--space-4)' }}>
        <ActionCard title="Modo Livre" to={japanesePaths.lettersConfig}>
          Escolha os grupos de hiragana e a quantidade de cards.
        </ActionCard>
        <ActionCard title="Modo Aleatório" onClick={startRandom}>
          Grupos e quantidade de cards definidos automaticamente.
        </ActionCard>
      </div>
    </PracticeScreen>
  )
}
