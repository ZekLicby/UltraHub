import { ModuleHome } from '../../../components'
import { heuristicsPaths } from '../../../navigation/pages'

export function HeuristicsPage() {
  return (
    <ModuleHome
      studyDescription="Estude as 10 heurísticas de usabilidade de Jakob Nielsen."
      practiceTo={heuristicsPaths.practice}
    />
  )
}
