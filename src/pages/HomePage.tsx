import { Box, Typography } from '../components'
import { navigation } from '../navigation/pages'

export function HomePage() {
  return (
    <>
      {navigation.map((group) => (
        <Box
          key={group.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <Typography variant="subtitle">{group.label}</Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  height: '16rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-surface)',
                }}
              />
            ))}
          </div>
        </Box>
      ))}
    </>
  )
}
