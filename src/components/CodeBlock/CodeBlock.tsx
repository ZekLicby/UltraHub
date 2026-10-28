import type { ComponentPropsWithRef } from 'react'
import styles from './CodeBlock.module.css'

export interface CodeBlockProps extends Omit<ComponentPropsWithRef<'pre'>, 'children'> {
  code: string
}

export function CodeBlock({ code, className, ...rest }: CodeBlockProps) {
  return (
    <pre className={[styles.block, className].filter(Boolean).join(' ')} {...rest}>
      <code>{code}</code>
    </pre>
  )
}
