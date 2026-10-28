import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import { IconButton } from '../IconButton/IconButton'
import styles from './Modal.module.css'

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: ReactNode
  closeLabel?: string
  children: ReactNode
}

export function Modal({ open, onOpenChange, title, closeLabel = 'Fechar', children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content} aria-describedby={undefined}>
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <IconButton label={closeLabel} size="sm">
                <X width={20} height={20} aria-hidden="true" />
              </IconButton>
            </Dialog.Close>
          </div>
          <div className={styles.body}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
