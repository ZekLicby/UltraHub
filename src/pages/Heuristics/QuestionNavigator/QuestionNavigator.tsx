import { Box, ChoiceButton } from '../../../components'
import styles from './QuestionNavigator.module.css'

export interface QuestionNavigatorProps {
  total: number
  current: number
  answered: readonly boolean[]
  onGoTo: (index: number) => void
}

export function QuestionNavigator({ total, current, answered, onGoTo }: QuestionNavigatorProps) {
  return (
    <Box as="nav" className={styles.navigator} aria-label="Navegar entre perguntas">
      {Array.from({ length: total }, (_, index) => (
        <ChoiceButton
          key={index}
          shape="square"
          marked={answered[index]}
          current={index === current}
          aria-label={`Ir para a pergunta ${index + 1}`}
          onClick={() => onGoTo(index)}
        >
          {index + 1}
        </ChoiceButton>
      ))}
    </Box>
  )
}
