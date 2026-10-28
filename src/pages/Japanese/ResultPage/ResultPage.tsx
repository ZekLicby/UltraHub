import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, Typography, PracticeScreen } from '../../../components'
import { expectedWordAnswer } from '../../../modules/japanese/game/answers'
import { shuffle } from '../../../utils/shuffle'
import { useGame } from '../../../modules/japanese/game/gameContext'
import type { Session } from '../../../modules/japanese/game/types'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import styles from './ResultPage.module.css'

const moduleBadge = (session: Session): string =>
  session.module === 'letters'
    ? 'Letras'
    : `Palavras · ${session.mode === 'sound' ? 'Som' : 'Significado'}`

function ReviewRows({ session }: { session: Session }) {
  if (session.module === 'letters') {
    return session.answers.map((answer, index) => (
      <tr key={index} data-incorrect={!answer.correct || undefined}>
        <td className={styles.char} lang="ja">
          {answer.letter.char}
        </td>
        <td>{answer.userAnswer || '(vazio)'}</td>
        <td>
          <ResultMark correct={answer.correct} expected={answer.letter.romaji} />
        </td>
      </tr>
    ))
  }

  return session.answers.map((answer, index) => (
    <tr key={index} data-incorrect={!answer.correct || undefined}>
      <td>
        <Typography as="span" size="xl" color="inherit" lang="ja">
          {answer.word.japanese}
        </Typography>
        {session.mode === 'sound' && (
          <Typography as="div" variant="caption">
            {answer.word.meaning}
          </Typography>
        )}
      </td>
      <td>{answer.userAnswer || '(vazio)'}</td>
      <td>
        <ResultMark correct={answer.correct} expected={expectedWordAnswer(answer.word, session.mode)} />
      </td>
    </tr>
  ))
}

function ResultMark({ correct, expected }: { correct: boolean; expected: string }) {
  if (correct) {
    return (
      <Typography as="span" weight="bold" color="green-solid" aria-label="Correto">
        ✓
      </Typography>
    )
  }
  return (
    <Box as="div">
      <Typography as="span" weight="bold" color="red-solid" aria-label="Incorreto">
        ✗
      </Typography>
      <Typography as="div" variant="caption">
        esperado: {expected}
      </Typography>
    </Box>
  )
}

export function ResultPage() {
  const { state, dispatch } = useGame()
  const navigate = useNavigate()
  const { session } = state
  const [startedWithoutAnswers] = useState(() => !session || session.answers.length === 0)

  if (startedWithoutAnswers || !session) {
    return <Navigate to={japanesePaths.practice} replace />
  }

  const correctCount = session.answers.filter((answer) => answer.correct).length
  const incorrectCount = session.answers.length - correctCount

  const trainErrors = () => {
    if (session.module === 'letters') {
      const wrong = session.answers.filter((answer) => !answer.correct).map((answer) => answer.letter)
      dispatch({ type: 'startLetters', deck: shuffle(wrong) })
    } else {
      const wrong = [
        ...new Map(
          session.answers.filter((answer) => !answer.correct).map((answer) => [answer.word.japanese, answer.word]),
        ).values(),
      ]
      dispatch({ type: 'startWords', mode: session.mode, deck: shuffle(wrong) })
    }
    enterFullscreen()
    navigate(japanesePaths.game)
  }

  const newGame = () => {
    const home = session.module === 'letters' ? japanesePaths.lettersHome : japanesePaths.wordsHome
    navigate(home)
  }

  return (
    <PracticeScreen badge={moduleBadge(session)} title="Partida finalizada!">
      <Box as="div" className={styles.summary}>
        <Box as="div" className={styles.stat} data-kind="correct">
          <Typography as="span" size="2xl" weight="bold" color="inherit">
            {correctCount}
          </Typography>
          <Typography as="span" size="sm" weight="semibold" color="inherit">
            Acertos
          </Typography>
        </Box>
        <Box as="div" className={styles.stat} data-kind="incorrect">
          <Typography as="span" size="2xl" weight="bold" color="inherit">
            {incorrectCount}
          </Typography>
          <Typography as="span" size="sm" weight="semibold" color="inherit">
            Erros
          </Typography>
        </Box>
      </Box>
      <Typography variant="label" uppercase>
        Revisão
      </Typography>
      <Box as="div" className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{session.module === 'letters' ? 'Hiragana' : 'Japonês'}</th>
              <th>Resposta</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <ReviewRows session={session} />
          </tbody>
        </table>
      </Box>
      <Box as="div" className={styles.actions}>
        {incorrectCount > 0 && <Button onClick={trainErrors}>Treinar erros</Button>}
        <Button variant="outline" color="gray" onClick={newGame}>
          Nova partida
        </Button>
      </Box>
    </PracticeScreen>
  )
}
