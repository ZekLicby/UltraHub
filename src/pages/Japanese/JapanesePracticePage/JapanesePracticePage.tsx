import { ActionCard, BackLink, Tag, Typography } from '../../../components'
import { japanesePaths } from '../../../navigation/pages'

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '72rem' }}>
      <BackLink to="/languages/japanese">Voltar</BackLink>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <Typography variant="subtitle" size="xl">
          O que você quer praticar?
        </Typography>
        <Typography variant="caption">
          Escolha um minimódulo. Os disponíveis funcionam do mesmo jeito: você configura, responde os
          cards, revisa e treina seus erros.
        </Typography>
      </div>
      {sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`practice-${section.id}`}
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}
        >
          <Typography id={`practice-${section.id}`} variant="subtitle">
            {section.title}
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {section.modules.map((module) => (
              <ActionCard
                key={module.id}
                visual={<span lang="ja">{module.sample}</span>}
                title={module.title}
                to={module.to}
                badge={module.to ? undefined : comingSoon}
                disabled={!module.to}
              >
                {module.description}
              </ActionCard>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
