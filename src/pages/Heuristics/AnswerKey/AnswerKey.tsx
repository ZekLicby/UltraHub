import { Box, Tag, Typography } from '../../../components'
import { HEURISTICS } from '../../../modules/heuristics/data/heuristics'
import { KIND_COLORS, KIND_LABELS } from '../../../modules/heuristics/game/rounds'
import type { Answer, Round } from '../../../modules/heuristics/game/types'
import styles from './AnswerKey.module.css'

export interface AnswerKeyProps {
  rounds: Round[]
  answers: (Answer | null)[]
}

export function AnswerKey({ rounds, answers }: AnswerKeyProps) {
  return (
    <Box as="div" className={styles.list}>
      {rounds.map((round, index) => {
        const answer = answers[index]
        const chosenIds = answer?.chosenIds ?? []
        return (
          <Box as="article" key={index} className={styles.item} aria-label={`Pergunta ${index + 1}`}>
            <Box as="div" className={styles.header}>
              <Tag color={KIND_COLORS[round.kind]}>
                {HEURISTICS[round.mainHeuristicId].icon} Pergunta {index + 1} · {KIND_LABELS[round.kind]}
              </Tag>
              {!answer && <Tag color="gray">⚪ Não respondida</Tag>}
              {answer?.correct && <Tag color="green">✅ Você acertou</Tag>}
              {answer && !answer.correct && <Tag color="red">❌ Você errou</Tag>}
            </Box>
            <Typography variant="body" weight="bold">
              {round.prompt}
            </Typography>
            <Typography variant="body" color="text-muted">
              {round.scenario}
            </Typography>
            <Box as="div" className={styles.options}>
              {round.optionIds.map((id) => {
                const correct = round.correctIds.includes(id)
                const chosen = chosenIds.includes(id)
                return (
                  <Box
                    as="div"
                    key={id}
                    className={styles.option}
                    data-correct={correct || undefined}
                    data-wrong={(chosen && !correct) || undefined}
                  >
                    <Box as="div" className={styles.optionTitle}>
                      <Typography variant="body" weight="semibold" color="inherit">
                        {correct ? '✅' : '▫️'} {HEURISTICS[id][round.optionField]}
                      </Typography>
                      {chosen && (
                        <Tag size="sm" variant="outline" color={correct ? 'green' : 'red'}>
                          sua resposta
                        </Tag>
                      )}
                    </Box>
                    <Typography variant="caption" color="inherit" className={styles.explanation}>
                      {round.explanations[id]}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
