import { Avatar, Button, Popover, PopoverContent, PopoverTrigger, Typography } from '../../components'
import styles from './ProfileMenu.module.css'

export interface UserInfo {
  name: string
  avatarSrc?: string
}

export interface ProfileMenuProps {
  user: UserInfo
  onViewProfile?: () => void
}

export function ProfileMenu({ user, onViewProfile }: ProfileMenuProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className={styles.trigger} aria-label="Abrir menu do perfil">
          <Avatar src={user.avatarSrc} alt="" />
        </button>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <div className={styles.user}>
          <Avatar src={user.avatarSrc} alt="" size="lg" />
          <Typography variant="subtitle" size="md" truncate>
            {user.name}
          </Typography>
        </div>
        <Button variant="soft" fullWidth onClick={onViewProfile}>
          Ver perfil
        </Button>
      </PopoverContent>
    </Popover>
  )
}
