import { Container } from './Container'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  /** Suppress the top border (e.g. the first section after Hero) */
  noBorder?: boolean
}

export function Section({ id, children, className, noBorder }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6${noBorder ? '' : ' border-t border-p-border'}${className ? ` ${className}` : ''}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
