import type { ReactNode } from 'react'
import { BackLink, Tag, Typography } from '../../../components'
import styles from './PracticeScreen.module.css'

export interface PracticeScreenProps {
  backTo?: string
  backLabel?: string
  badge?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function PracticeScreen({
  backTo,
  backLabel,
  badge,
  title,
  subtitle,
  children,
}: PracticeScreenProps) {
  return (
    <div className={styles.screen}>
      {backTo && <BackLink to={backTo}>{backLabel ?? 'Voltar'}</BackLink>}
      <section className={styles.panel}>
        <header className={styles.header}>
          {badge && (
            <Tag size="sm" color="blue">
              {badge}
            </Tag>
          )}
          <Typography variant="subtitle" size="xl">
            {title}
          </Typography>
          {subtitle && <Typography variant="caption">{subtitle}</Typography>}
        </header>
        {children}
      </section>
    </div>
  )
}
