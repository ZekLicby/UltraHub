import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { IconButton, Typography } from '../../components'
import type { NavigationGroup } from '../../navigation/pages'
import styles from './MobileMenu.module.css'

export interface MobileMenuProps {
  groups: NavigationGroup[]
}

export function MobileMenu({ groups }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <IconButton label="Abrir menu de navegação">
          <Menu width={24} height={24} aria-hidden="true" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.sheet} aria-describedby={undefined}>
          <div className={styles.header}>
            <Dialog.Title asChild>
              <Typography variant="subtitle">Menu</Typography>
            </Dialog.Title>
            <Dialog.Close asChild>
              <IconButton label="Fechar menu" size="sm">
                <X width={20} height={20} aria-hidden="true" />
              </IconButton>
            </Dialog.Close>
          </div>
          <div className={styles.body}>
            {groups.map((group) => {
              const GroupIcon = group.icon
              return (
                <section key={group.id} className={styles.group} aria-labelledby={`menu-${group.id}`}>
                  <h3 id={`menu-${group.id}`} className={styles.groupTitle}>
                    <GroupIcon className={styles.icon} aria-hidden="true" />
                    {group.label}
                  </h3>
                  <ul className={styles.list}>
                    {group.pages.map((page) => {
                      const PageIcon = page.icon
                      return (
                        <li key={page.id}>
                          <NavLink
                            to={page.path}
                            className={styles.item}
                            onClick={() => setOpen(false)}
                          >
                            <PageIcon className={styles.icon} aria-hidden="true" />
                            <span>{page.label}</span>
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
