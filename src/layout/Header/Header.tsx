import { Menu, Network } from 'lucide-react'
import { Link } from 'react-router'
import { IconButton, Typography } from '../../components'
import type { NotificationItem } from '../../mocks/notifications'
import type { PageDefinition } from '../../navigation/pages'
import { NotificationsMenu } from '../NotificationsMenu/NotificationsMenu'
import { ProfileMenu, type UserInfo } from '../ProfileMenu/ProfileMenu'
import { ThemeMenu } from '../ThemeMenu/ThemeMenu'
import styles from './Header.module.css'

export interface HeaderProps {
  page: PageDefinition
  sidebarCollapsed: boolean
  compact?: boolean
  notifications: NotificationItem[]
  user: UserInfo
  onToggleSidebar: () => void
}

export function Header({
  page,
  sidebarCollapsed,
  compact = false,
  notifications,
  user,
  onToggleSidebar,
}: HeaderProps) {
  return (
    <header className={styles.header} data-compact={compact || undefined}>
      <div className={styles.brandCell}>
        <Link
          to="/"
          className={styles.brand}
          data-collapsed={sidebarCollapsed || undefined}
          aria-label={sidebarCollapsed ? 'UltraHub, ir para o início' : undefined}
        >
          <Network className={styles.brandIcon} aria-hidden="true" />
          {!sidebarCollapsed && (
            <Typography as="span" variant="subtitle" size="lg" weight="bold" className={styles.brandName}>
              UltraHub
            </Typography>
          )}
        </Link>
      </div>
      {!compact && (
        <IconButton
          label={sidebarCollapsed ? 'Expandir barra lateral' : 'Recolher barra lateral'}
          aria-expanded={!sidebarCollapsed}
          onClick={onToggleSidebar}
        >
          <Menu width={20} height={20} aria-hidden="true" />
        </IconButton>
      )}
      <div className={styles.title}>
        <Typography variant="title" size="lg" truncate>
          {page.title}
        </Typography>
        <Typography variant="caption" truncate>
          {page.description}
        </Typography>
      </div>
      <div className={styles.actions}>
        <ThemeMenu />
        <NotificationsMenu notifications={notifications} />
        <ProfileMenu user={user} />
      </div>
    </header>
  )
}
