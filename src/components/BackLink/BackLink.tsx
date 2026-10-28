import { ArrowLeft } from 'lucide-react'
import { Link, type LinkProps } from 'react-router'
import styles from './BackLink.module.css'

export function BackLink({ className, children, ...rest }: LinkProps) {
  return (
    <Link className={[styles.link, className].filter(Boolean).join(' ')} {...rest}>
      <ArrowLeft width={16} height={16} aria-hidden="true" />
      {children}
    </Link>
  )
}
