import { MobileMenu, type MobileMenuProps } from '../MobileMenu/MobileMenu'
import styles from './BottomNav.module.css'

export function BottomNav(props: MobileMenuProps) {
  return (
    <nav aria-label="Navegação inferior" className={styles.bar}>
      <MobileMenu {...props} />
    </nav>
  )
}
