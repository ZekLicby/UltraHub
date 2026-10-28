import { ModuleHome } from '../../../components'
import { japanesePracticePage } from '../../../navigation/pages'

export function JapanesePage() {
  return (
    <ModuleHome
      studyDescription="Estude alfabetos, palavras e textos em japonês."
      practiceTo={japanesePracticePage.path}
    />
  )
}
