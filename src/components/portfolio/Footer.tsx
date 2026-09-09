import { Container } from '@/components/ui/Container'
import type { Dictionary } from '@/i18n'

interface FooterProps {
  dict: Dictionary
}

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 border-t border-p-rule">
      <Container className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
        <span className="font-mono text-xs text-p-muted tabular-nums">
          <span aria-hidden="true">©</span> {year} Facundo Pérez Brizuela
        </span>
        <span className="font-mono text-xs text-p-muted">
          {dict.footer.location}
        </span>
      </Container>
    </footer>
  )
}
