import { Check, Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'
import { IconButton, Popover, PopoverContent, PopoverTrigger, Typography } from '../../components'
import { useTheme, type ThemeMode } from '../../theme/useTheme'
import styles from './ThemeMenu.module.css'

const options: { mode: ThemeMode; label: string; icon: LucideIcon }[] = [
  { mode: 'light', label: 'Claro', icon: Sun },
  { mode: 'dark', label: 'Escuro', icon: Moon },
  { mode: 'system', label: 'Sistema', icon: Monitor },
]

export function ThemeMenu() {
  const { mode, setMode } = useTheme()
  const current = options.find((option) => option.mode === mode) ?? options[2]
  const CurrentIcon = current.icon

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton label={`Tema: ${current.label}`}>
          <CurrentIcon width={20} height={20} aria-hidden="true" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent className={styles.content}>
        <div className={styles.header}>
          <Typography variant="subtitle" size="md">
            Tema
          </Typography>
        </div>
        <ul className={styles.list}>
          {options.map(({ mode: optionMode, label, icon: Icon }) => (
            <li key={optionMode}>
              <button
                type="button"
                className={styles.option}
                aria-pressed={optionMode === mode}
                onClick={() => setMode(optionMode)}
              >
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{label}</span>
                {optionMode === mode && <Check className={styles.check} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
