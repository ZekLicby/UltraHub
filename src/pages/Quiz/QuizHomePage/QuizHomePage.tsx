import { ModuleHome } from '../../../components'
import { getQuizCategory } from '../../../modules/codeQuest/categories'
import type { QuestionCategory } from '../../../modules/codeQuest/data/questions'
import { quizPaths } from '../../../navigation/pages'

export function QuizHomePage({ category }: { category: QuestionCategory }) {
  return (
    <ModuleHome
      studyDescription={getQuizCategory(category).studyDescription}
      practiceTo={quizPaths(category).practice}
    />
  )
}
