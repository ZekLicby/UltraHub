import { ModuleHome } from '../../../components'
import { promptingPaths } from '../../../navigation/pages'

export function PromptingPage() {
  return (
    <ModuleHome
      studyDescription="Estude os tipos de prompt: zero-shot, one-shot, few-shot, chain-of-thought e tree-of-thought."
      practiceTo={promptingPaths.practice}
    />
  )
}
