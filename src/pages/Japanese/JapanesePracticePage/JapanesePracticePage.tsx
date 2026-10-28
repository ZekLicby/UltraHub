import { ActionCard, BackLink, Box, CardGrid, Tag, Typography } from '../../../components'
import { japanesePaths } from '../../../navigation/pages'
import styles from './JapanesePracticePage.module.css'

interface MiniModule {
  id: string
  sample: string
  title: string
  description: string
  to?: string
}

interface ModuleSection {
  id: string
  title: string
  modules: MiniModule[]
}

const sections: ModuleSection[] = [
  {
    id: 'alphabet',
    title: 'Alfabeto',
    modules: [
      { id: 'hiragana', sample: 'あ', title: 'Hiragana', description: 'Memorize os hiraganas um a um.', to: japanesePaths.lettersHome },
      { id: 'katakana', sample: 'ア', title: 'Katakana', description: 'Memorize os katakanas um a um.' },
      { id: 'kanji', sample: '漢', title: 'Kanji', description: 'Memorize os kanjis um a um.' },
    ],
  },
  {
    id: 'words',
    title: 'Palavras',
    modules: [
      { id: 'hiragana', sample: 'ねこ', title: 'Hiragana', description: 'Memorize palavras simples escritas em hiragana.', to: japanesePaths.wordsHome },
      { id: 'katakana', sample: 'ネコ', title: 'Katakana', description: 'Memorize palavras escritas em katakana.' },
      { id: 'kanji', sample: '猫', title: 'Kanji', description: 'Memorize palavras escritas em kanji.' },
    ],
  },
]

const comingSoon = (
  <Tag size="sm" color="gray">
    Em breve
  </Tag>
)

export function JapanesePracticePage() {
  return (
    <Box as="div" className={styles.page}>
      <BackLink to="/languages/japanese">Voltar</BackLink>
      <Box as="div" className={styles.intro}>
        <Typography variant="subtitle" size="xl">
          O que você quer praticar?
        </Typography>
        <Typography variant="caption">
          Escolha um minimódulo. Os disponíveis funcionam do mesmo jeito: você configura, responde os
          cards, revisa e treina seus erros.
        </Typography>
      </Box>
      {sections.map((section) => (
        <Box key={section.id} aria-labelledby={`practice-${section.id}`} className={styles.section}>
          <Typography id={`practice-${section.id}`} variant="subtitle">
            {section.title}
          </Typography>
          <CardGrid>
            {section.modules.map((module) => (
              <ActionCard
                key={module.id}
                visual={
                  <Typography as="span" size="2xl" weight="semibold" color="inherit" lang="ja">
                    {module.sample}
                  </Typography>
                }
                title={module.title}
                to={module.to}
                badge={module.to ? undefined : comingSoon}
                disabled={!module.to}
              >
                {module.description}
              </ActionCard>
            ))}
          </CardGrid>
        </Box>
      ))}
    </Box>
  )
}
