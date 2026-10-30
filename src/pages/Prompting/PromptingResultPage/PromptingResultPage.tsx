import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, PracticeScreen, Tag, Typography } from '../../../components'
import { calculatePercentage, getClassification } from '../../../modules/codeQuest/game/labels'
import { usePrompting } from '../../../modules/prompting/game/promptingContext'
import { buildSessionQuestions } from '../../../modules/prompting/game/quiz'
import { promptingPaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import styles from './PromptingResultPage.module.css'

export function PromptingResultPage() {
  const { state, dispatch } = usePrompting()
  const navigate = useNavigate()
  const { session } = state
  const [startedWithoutSession] = useState(() => !session || session.questions.length === 0)

  if (startedWithoutSession || !session) {
    return <Navigate to={promptingPaths.practice} replace />
  }

  const total = session.questions.length
  const correct = session.correctCount
  const wrong = total - correct
  const percentage = calculatePercentage(correct, total)

  const trainErrors = () => {
    dispatch({ type: 'start', questions: buildSessionQuestions(session.wrongQuestions) })
    enterFullscreen()
    navigate(promptingPaths.game)
  }

  return (
    <PracticeScreen badge="Quiz" title="🎉 Quiz finalizado!">
      <Box as="div" className={styles.score}>
        <Typography variant="display" align="center">
          {correct} / {total}
        </Typography>
        <Typography variant="body" align="center">
          {percentage}% de acerto
        </Typography>
        <Tag size="md" color={percentage >= 70 ? 'green' : percentage >= 50 ? 'orange' : 'red'}>
          {getClassification(percentage)}
        </Tag>
      </Box>
      <Box as="div" className={styles.counts}>
        <Typography variant="body">✅ {correct} acertos</Typography>
        <Typography variant="body">❌ {wrong} erros</Typography>
      </Box>
      <Box as="div" className={styles.actions}>
        {session.wrongQuestions.length > 0 && (
          <Button variant="soft" onClick={trainErrors}>
            Treinar meus erros
          </Button>
        )}
        <Button onClick={() => navigate(promptingPaths.practice)}>Novo quiz</Button>
        <Button variant="outline" color="gray" onClick={() => navigate(promptingPaths.home)}>
          Voltar ao módulo
        </Button>
      </Box>
    </PracticeScreen>
  )
}
