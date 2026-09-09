import { Container } from './Container'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  /** Suppress the top rule (e.g. the first section after Hero) */
  noBorder?: boolean
  /** The night ledger (Projects): cooler paper, cooler rule. Omit for the day ledger. */
  tone?: 'night'
}

export function Section({ id, children, className, noBorder, tone }: SectionProps) {
  const bg = tone === 'night' ? 'bg-p-bg-night' : ''
  const rule = tone === 'night' ? 'border-p-rule-night' : 'border-p-rule'
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 px-6 ${bg}${noBorder ? '' : ` border-t ${rule}`}${className ? ` ${className}` : ''}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
