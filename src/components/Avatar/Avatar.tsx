import { User } from 'lucide-react'
import type { HTMLAttributes } from 'react'
import styles from './Avatar.module.css'

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ src, alt = '', size = 'md', className, ...rest }: AvatarProps) {
  return (
    <span
      className={[styles.avatar, className].filter(Boolean).join(' ')}
      data-size={size}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <User className={styles.fallback} aria-hidden="true" />
      )}
    </span>
  )
}
