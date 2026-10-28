import type { ComponentPropsWithRef } from 'react'

export type BoxProps = ComponentPropsWithRef<'section'>

export function Box(props: BoxProps) {
  return <section {...props} />
}
