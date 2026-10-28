import { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger, Typography } from '../../../components'
import { WORDS, type Word, type WordMode } from '../../../modules/japanese/data/words'
import { formatAnswerList } from '../../../modules/japanese/game/answers'
import { hasSeen, markSeen } from '../../../utils/seenFlag'
import styles from './VariantsHint.module.css'

export const VARIANTS_HINT_SEEN_KEY = 'ultrahub-variants-hint-seen'

export interface VariantsHintProps {
  word: Word
  mode: WordMode
}

export function VariantsHint({ word, mode }: VariantsHintProps) {
  const [pulse] = useState(() => !hasSeen(VARIANTS_HINT_SEEN_KEY))

  useEffect(() => {
    markSeen(VARIANTS_HINT_SEEN_KEY)
  }, [])

  const example = WORDS.find(
    (candidate) =>
      candidate.japanese !== word.japanese &&
      candidate.acceptedAnswers[mode].length > 1 &&
      [...candidate.japanese].length <= 4,
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={styles.trigger}
          data-pulse={pulse || undefined}
          aria-label="Variações aceitas: veja um exemplo"
          onMouseDown={(event) => event.preventDefault()}
        >
          🔄
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={styles.content}
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <Typography variant="label" color="text">
          Variações aceitas
        </Typography>
        <Typography variant="caption">
          Esta palavra tem mais de uma resposta correta. Digitar qualquer uma delas conta como
          acerto.
        </Typography>
        {example && (
          <Typography variant="caption">
            Exemplo: para <span lang="ja">{example.japanese}</span>, vale{' '}
            {formatAnswerList(example.acceptedAnswers[mode])}.
          </Typography>
        )}
      </PopoverContent>
    </Popover>
  )
}
