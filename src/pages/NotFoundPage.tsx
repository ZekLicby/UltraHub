import { useNavigate } from 'react-router'
import { Button, Typography } from '../components'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
      <Typography variant="body">Verifique o endereço ou volte para o início.</Typography>
      <Button variant="soft" onClick={() => navigate('/')}>
        Ir para o início
      </Button>
    </div>
  )
}
