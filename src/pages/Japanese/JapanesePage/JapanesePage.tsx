import { BookOpen, Pencil } from 'lucide-react'
import { ActionCard, Tag, Typography } from '../../../components'
import { japanesePracticePage } from '../../../navigation/pages'

const sectionStyle = { display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' } as const

export function JapanesePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <section aria-labelledby="japanese-activities" style={sectionStyle}>
        <Typography id="japanese-activities" variant="subtitle">
          Suas atividades
        </Typography>
        <div
          style={{
            minHeight: 'min(48rem, 50svh)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-surface)',
          }}
        />
      </section>
      <section aria-labelledby="japanese-study-practice" style={sectionStyle}>
        <Typography id="japanese-study-practice" variant="subtitle">
          Estude e pratique
        </Typography>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          <ActionCard
            visual={<BookOpen />}
            disabled
            badge={
              <Tag size="sm" color="gray">
                Em breve
              </Tag>
            }
          >
            Estude alfabetos, palavras e textos em japonês.
          </ActionCard>
          <ActionCard visual={<Pencil />} to={japanesePracticePage.path}>
            Pratique o que você estudou
          </ActionCard>
        </div>
      </section>
    </div>
  )
}
