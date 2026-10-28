import { useState, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { NotificationItem } from '../../mocks/notifications'
import { findPageByPath, notFoundPage, type NavigationGroup } from '../../navigation/pages'
import { mediaQueries } from '../../tokens'
import { BottomNav } from '../BottomNav/BottomNav'
import { Header } from '../Header/Header'
import type { UserInfo } from '../ProfileMenu/ProfileMenu'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './AppShell.module.css'

export interface AppShellProps {
  groups: NavigationGroup[]
  notifications: NotificationItem[]
  user: UserInfo
}

export function AppShell({ groups, notifications, user }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false)
  const compact = useMediaQuery(mediaQueries.compact)
  const { pathname } = useLocation()
  const page = findPageByPath(pathname) ?? notFoundPage

  return (
    <div
      className={styles.shell}
      data-collapsed={collapsed || undefined}
      data-compact={compact || undefined}
      style={{ '--sidebar-width': collapsed ? '6.4rem' : '24rem' } as CSSProperties}
    >
      <Header
        page={page}
        sidebarCollapsed={collapsed && !compact}
        compact={compact}
        notifications={notifications}
        user={user}
        onToggleSidebar={() => setCollapsed((value) => !value)}
      />
      <div className={styles.body}>
        {!compact && <Sidebar groups={groups} collapsed={collapsed} />}
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
      {compact && <BottomNav groups={groups} />}
    </div>
  )
}
