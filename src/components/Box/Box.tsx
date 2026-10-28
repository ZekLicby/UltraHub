import type { ComponentPropsWithRef, ElementType } from 'react'

export type BoxProps = ComponentPropsWithRef<'section'> & { as?: ElementType }

export function Box({ as: Component = 'section', ...props }: BoxProps) {
  return <Component {...props} />
}
