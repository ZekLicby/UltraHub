import type { ReactNode } from 'react'
import { Button, Slider, ToggleChip, Typography } from '../../../components'
import { MIN_CARDS } from '../../../modules/japanese/data/hiragana'
import { PracticeScreen } from '../PracticeScreen/PracticeScreen'
import styles from './PoolConfigScreen.module.css'

export interface PoolChip {
  id: string
  sample: string
  label: string
  count?: string
}

export interface PoolConfigScreenProps {
  backTo: string
  badge: string
  title: string
  subtitle: string
  chipsLabel: string
  chips: PoolChip[]
  selectedIds: readonly string[]
  onToggle: (id: string) => void
  sliderSectionLabel: string
  sliderLabel: string
  formatValue: (count: number) => string
  storedCount: number
  maxCount: number
  poolSize: number
  describePool: (count: number, size: number, min: number) => string
  emptyMessage: string
  onCountChange: (count: number) => void
  onStart: (count: number) => void
}

export function PoolConfigScreen({
  backTo,
  badge,
  title,
  subtitle,
  chipsLabel,
  chips,
  selectedIds,
  onToggle,
  sliderSectionLabel,
  sliderLabel,
  formatValue,
  storedCount,
  maxCount,
  poolSize,
  describePool,
  emptyMessage,
  onCountChange,
  onStart,
}: PoolConfigScreenProps): ReactNode {
  const minCount = Math.max(MIN_CARDS, poolSize)
  const count = Math.min(maxCount, Math.max(minCount, storedCount))
  const canStart = poolSize > 0

  return (
    <PracticeScreen backTo={backTo} backLabel="Voltar" badge={badge} title={title} subtitle={subtitle}>
      <section className={styles.section} aria-labelledby="pool-chips">
        <Typography id="pool-chips" variant="label" uppercase>
          {chipsLabel}
        </Typography>
        <div className={styles.chips} role="group" aria-label={chipsLabel}>
          {chips.map((chip) => (
            <ToggleChip
              key={chip.id}
              selected={selectedIds.includes(chip.id)}
              sample={chip.sample}
              label={chip.label}
              count={chip.count}
              onClick={() => onToggle(chip.id)}
            />
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="pool-count">
        <Typography id="pool-count" variant="label" uppercase>
          {sliderSectionLabel}
        </Typography>
        <Slider
          label={sliderLabel}
          value={count}
          min={minCount}
          max={maxCount}
          valueLabel={formatValue(count)}
          onValueChange={onCountChange}
        />
        <Typography variant="caption" role={canStart ? undefined : 'alert'} color={canStart ? 'text-muted' : 'red-solid'}>
          {canStart ? describePool(count, poolSize, minCount) : emptyMessage}
        </Typography>
      </section>
      <Button fullWidth disabled={!canStart} onClick={() => onStart(count)}>
        Começar
      </Button>
    </PracticeScreen>
  )
}
