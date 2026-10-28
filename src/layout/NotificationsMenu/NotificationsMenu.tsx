import { Bell } from 'lucide-react'
import { IconButton, Popover, PopoverContent, PopoverTrigger, Typography } from '../../components'
import type { NotificationItem } from '../../mocks/notifications'
import styles from './NotificationsMenu.module.css'

export interface NotificationsMenuProps {
  notifications: NotificationItem[]
}

export function NotificationsMenu({ notifications }: NotificationsMenuProps) {
  const unread = notifications.filter((n) => !n.read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton
          label={unread ? `Notificações (${unread} não lidas)` : 'Notificações'}
          badge={unread}
        >
          <Bell width={20} height={20} aria-hidden="true" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <div className={styles.header}>
          <Typography variant="subtitle" size="md">
            Notificações
          </Typography>
        </div>
        {notifications.length === 0 ? (
          <Typography variant="caption" className={styles.empty}>
            Nenhuma notificação.
          </Typography>
        ) : (
          <ul className={styles.list}>
            {notifications.map((item) => (
              <li key={item.id} className={styles.item} data-unread={!item.read || undefined}>
                <span className={styles.dot} aria-hidden="true" />
                <div className={styles.text}>
                  <Typography variant="label" color="text">
                    {item.title}
                  </Typography>
                  <Typography variant="caption">{item.description}</Typography>
                  <Typography variant="caption" size="xs" color="text-subtle">
                    {item.time}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  )
}
