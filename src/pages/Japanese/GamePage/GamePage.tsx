import { useEffect, useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, ConfirmDialog, Input, ProgressBar, Tag, Typography } from '../../../components'
import { WORD_MAX_MEANING_LENGTH, WORD_MAX_SOUND_LENGTH, type Word } from '../../../modules/japanese/data/words'
import {
  expectedWordAnswer,
  isLetterCorrect,
  isWordCorrect,
} from '../../../modules/japanese/game/answers'
import { useGame } from '../../../modules/japanese/game/gameContext'
import type { Session } from '../../../modules/japanese/game/types'
import { japanesePaths } from '../../../navigation/pages'
import { FlashCard } from '../FlashCard/FlashCard'
import { VariantsHint } from '../VariantsHint/VariantsHint'
import styles from './GamePage.module.css'

const CORRECT_HOLD_MS = 550
const WORD_ERROR_HOLD_MS = 1600

const wordFontSize = (text: string): string => {
  const length = [...text].length
  if (length <= 2) return 'clamp(3rem, 16vw, 4.5rem)'
  if (length === 3) return 'clamp(2.6rem, 13vw, 3.6rem)'
  if (length === 4) return 'clamp(2.2rem, 11vw, 3rem)'
  if (length === 5) return 'clamp(1.9rem, 9.5vw, 2.5rem)'
  return 'clamp(1.6rem, 8vw, 2.1rem)'
}

const moduleBadge = (session: Session): string =>
  session.module === 'letters'
    ? 'Letras'
    : `Palavras · ${session.mode === 'sound' ? 'Som' : 'Significado'}`

interface Submission {
  correct: boolean
  expected: string
}

function WordFace({ word, session }: { word: Word; session: Extract<Session, { module: 'words' }> }) {
  return (
    <>
      <Typography
        as="span"
        lang="ja"
        weight="medium"
        className={styles.wordChar}
        style={{ fontSize: wordFontSize(word.japanese) }}
      >
        {word.japanese}
      </Typography>
      {session.mode === 'sound' && (
        <Typography as="span" size="lg" color="text-muted">
          {word.meaning}
        </Typography>
      )}
    </>
  )
}

function Round({ session }: { session: Session }) {
  const { dispatch } = useGame()
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [submission, setSubmission] = useState<Submission | null>(null)
  const isLast = session.index + 1 >= session.deck.length
  const holdMs = session.module === 'words' && submission && !submission.correct ? WORD_ERROR_HOLD_MS : CORRECT_HOLD_MS

  useEffect(() => {
    if (!submission) return
    const id = window.setTimeout(() => {
      if (isLast) navigate(japanesePaths.result)
      else dispatch({ type: 'next' })
    }, holdMs)
    return () => window.clearTimeout(id)
  }, [submission, holdMs, isLast, dispatch, navigate])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (submission) return
    const userAnswer = value.trim()

    if (session.module === 'letters') {
      const letter = session.deck[session.index]
      const correct = isLetterCorrect(letter, userAnswer)
      dispatch({ type: 'answerLetter', answer: { letter, userAnswer, correct } })
      setSubmission({ correct, expected: letter.romaji })
      return
    }

    const word = session.deck[session.index]
    const correct = isWordCorrect(word, session.mode, userAnswer)
    dispatch({ type: 'answerWord', answer: { word, userAnswer, correct } })
    setSubmission({ correct, expected: expectedWordAnswer(word, session.mode) })
  }

  const status = submission ? (submission.correct ? 'correct' : 'incorrect') : undefined
  const letter = session.module === 'letters' ? session.deck[session.index] : null
  const word = session.module === 'words' ? session.deck[session.index] : null

  const label =
    session.module === 'letters' ? 'Sua resposta:' : session.mode === 'sound' ? 'Como se lê?' : 'O que significa?'
  const maxLength =
    session.module === 'letters' ? 3 : session.mode === 'sound' ? WORD_MAX_SOUND_LENGTH : WORD_MAX_MEANING_LENGTH
  const placeholder =
    session.module === 'letters' ? 'ex: ka' : session.mode === 'sound' ? 'romaji' : 'em português'
  const hasVariants = word && session.module === 'words' && word.acceptedAnswers[session.mode].length > 1

  return (
    <>
      <FlashCard
        status={status}
        corner={hasVariants && session.module === 'words' ? <VariantsHint word={word} mode={session.mode} /> : undefined}
      >
        {letter && (
          <Typography
            as="span"
            lang="ja"
            weight="medium"
            className={styles.char}
            style={{ fontSize: '9.6rem', lineHeight: 1.1 }}
          >
            {letter.char}
          </Typography>
        )}
        {word && session.module === 'words' && <WordFace word={word} session={session} />}
      </FlashCard>
      <form className={styles.form} onSubmit={submit}>
        <Input
          label={label}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          disabled={Boolean(submission)}
          error={submission ? !submission.correct : false}
          success={submission?.correct}
          fullWidth
        />
        <Button type="submit" disabled={Boolean(submission)} fullWidth>
          Confirmar
        </Button>
        <Box as="div" role="status" className={styles.feedback} data-status={status}>
          {submission?.correct && '✓ Correto'}
          {submission && !submission.correct && (
            <>
              ✗ Incorreto — resposta: <strong>{submission.expected}</strong>
            </>
          )}
        </Box>
      </form>
    </>
  )
}

export function GamePage() {
  const { state } = useGame()
  const navigate = useNavigate()
  const [exitOpen, setExitOpen] = useState(false)
  const { session } = state
  const [startedWithoutSession] = useState(() => !session || session.deck.length === 0)

  if (startedWithoutSession || !session) {
    return <Navigate to={japanesePaths.practice} replace />
  }

  const total = session.deck.length
  const number = session.index + 1

  const exit = () => {
    const home = session.module === 'letters' ? japanesePaths.lettersHome : japanesePaths.wordsHome
    navigate(home)
  }

  return (
    <Box as="div" className={styles.screen}>
      <Box as="div" className={styles.top}>
        <Tag size="sm" color="blue">
          {moduleBadge(session)}
        </Tag>
        <ProgressBar
          value={session.index}
          max={total}
          label={`${number} / ${total}`}
          className={styles.progress}
        />
        <Button variant="ghost" color="gray" size="sm" onClick={() => setExitOpen(true)}>
          Sair
        </Button>
      </Box>
      <Box className={styles.panel}>
        <Round key={`${total}-${session.index}`} session={session} />
      </Box>
      <ConfirmDialog
        open={exitOpen}
        onOpenChange={setExitOpen}
        title="Sair da partida?"
        description="Todo o progresso desta partida será perdido. Deseja realmente sair?"
        cancelLabel="Continuar partida"
        confirmLabel="Sair da partida"
        confirmColor="red"
        onConfirm={exit}
      />
    </Box>
  )
}
