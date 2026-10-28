import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Box, Button, PracticeScreen, Tag, Typography } from '../../../components'
import type { QuestionCategory } from '../../../modules/codeQuest/data/questions'
import { calculatePercentage, getClassification } from '../../../modules/codeQuest/game/labels'
import { buildSessionQuestions } from '../../../modules/codeQuest/game/quiz'
import { useQuiz } from '../../../modules/codeQuest/game/quizContext'
import { quizPaths } from '../../../navigation/pages'
import { enterFullscreen } from '../../../utils/fullscreen'
import styles from './QuizResultPage.module.css'

export function QuizResultPage({ category }: { category: QuestionCategory }) {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()
  const { session } = state
  const paths = quizPaths(category)
  const [startedWithoutSession] = useState(
    () => !session || session.questions.length === 0 || session.category !== category,
  )

  if (startedWithoutSession || !session) {
    return <Navigate to={paths.practice} replace />
  }

  const total = session.questions.length
  const correct = session.correctCount
  const wrong = total - correct
  const percentage = calculatePercentage(correct, total)

  const trainErrors = () => {
    dispatch({
      type: 'start',
      mode: 'review',
      category,
      questions: buildSessionQuestions(session.wrongQuestions),
    })
    enterFullscreen()
    navigate(paths.game)
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
        <Button onClick={() => navigate(paths.practice)}>Novo quiz</Button>
        <Button variant="outline" color="gray" onClick={() => navigate(paths.home)}>
          Voltar ao módulo
        </Button>
      </Box>
    </PracticeScreen>
  )
}
