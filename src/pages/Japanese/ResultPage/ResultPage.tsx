import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Button, Typography } from '../../../components'
import { expectedWordAnswer } from '../../../modules/japanese/game/answers'
import { shuffle } from '../../../modules/japanese/game/deck'
import { useGame } from '../../../modules/japanese/game/gameContext'
import type { Session } from '../../../modules/japanese/game/types'
import { japanesePaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import { PracticeScreen } from '../PracticeScreen/PracticeScreen'
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
        <span className={styles.char} lang="ja">
          {answer.word.japanese}
        </span>
        {session.mode === 'sound' && <div className={styles.expected}>{answer.word.meaning}</div>}
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
      <span className={styles.markCorrect} aria-label="Correto">
        ✓
      </span>
    )
  }
  return (
    <div>
      <span className={styles.markIncorrect} aria-label="Incorreto">
        ✗
      </span>
      <div className={styles.expected}>esperado: {expected}</div>
    </div>
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
      <div className={styles.summary}>
        <div className={styles.stat} data-kind="correct">
          <span className={styles.statValue}>{correctCount}</span>
          <span className={styles.statLabel}>Acertos</span>
        </div>
        <div className={styles.stat} data-kind="incorrect">
          <span className={styles.statValue}>{incorrectCount}</span>
          <span className={styles.statLabel}>Erros</span>
        </div>
      </div>
      <Typography variant="label" uppercase>
        Revisão
      </Typography>
      <div className={styles.tableWrap}>
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
      </div>
      <div className={styles.actions}>
        {incorrectCount > 0 && <Button onClick={trainErrors}>Treinar erros</Button>}
        <Button variant="outline" color="gray" onClick={newGame}>
          Nova partida
        </Button>
      </div>
    </PracticeScreen>
  )
}
