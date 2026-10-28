import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { Popover, PopoverContent, PopoverTrigger, Typography } from '../../components'
import type { NavigationGroup } from '../../navigation/pages'
import styles from './Sidebar.module.css'

export interface SidebarProps {
  groups: NavigationGroup[]
  collapsed?: boolean
}

interface GroupFlyoutProps {
  group: NavigationGroup
}

function GroupFlyout({ group }: GroupFlyoutProps) {
  const [open, setOpen] = useState(false)
  const GroupIcon = group.icon

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={styles.item}
          data-level="module"
          aria-label={group.label}
        >
          <GroupIcon className={styles.icon} aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="right" align="start" sideOffset={12} className={styles.flyout}>
        <div className={styles.flyoutHeader}>
          <Typography variant="subtitle" size="md">
            {group.label}
          </Typography>
        </div>
        <ul className={styles.flyoutList}>
          {group.pages.map((page) => {
            const PageIcon = page.icon
            return (
              <li key={page.id}>
                <NavLink
                  to={page.path}
                  className={styles.item}
                  data-level="flyout"
                  onClick={() => setOpen(false)}
                >
                  <PageIcon className={styles.icon} aria-hidden="true" />
                  <span className={styles.label}>{page.label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </PopoverContent>
    </Popover>
  )
}

export function Sidebar({ groups, collapsed = false }: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.map((group) => [group.id, true])),
  )

  return (
    <nav
      aria-label="Navegação principal"
      className={styles.sidebar}
      data-collapsed={collapsed || undefined}
    >
      {groups.map((group) => {
        const GroupIcon = group.icon
        return (
          <Collapsible.Root
            key={group.id}
            open={Boolean(openGroups[group.id]) && !collapsed}
            onOpenChange={(open) => setOpenGroups((state) => ({ ...state, [group.id]: open }))}
            className={styles.group}
          >
            {collapsed ? (
              <GroupFlyout group={group} />
            ) : (
              <Collapsible.Trigger className={styles.item} data-level="module">
                <GroupIcon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{group.label}</span>
                <ChevronDown className={styles.chevron} aria-hidden="true" />
              </Collapsible.Trigger>
            )}
            <Collapsible.Content className={styles.panel}>
              <ul className={styles.list}>
                {group.pages.map((page) => {
                  const PageIcon = page.icon
                  return (
                    <li key={page.id}>
                      <NavLink
                        to={page.path}
                        className={styles.item}
                        data-level="page"
                        aria-label={collapsed ? page.label : undefined}
                      >
                        <PageIcon className={styles.icon} aria-hidden="true" />
                        {!collapsed && <span className={styles.label}>{page.label}</span>}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </Collapsible.Content>
          </Collapsible.Root>
        )
      })}
    </nav>
  )
}
