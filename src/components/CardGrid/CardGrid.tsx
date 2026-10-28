import type { ComponentPropsWithRef } from 'react'
import styles from './CardGrid.module.css'

export function CardGrid({ className, ...rest }: ComponentPropsWithRef<'div'>) {
  return <div className={[styles.grid, className].filter(Boolean).join(' ')} {...rest} />
}
