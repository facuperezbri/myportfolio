import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { contact } from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'

interface ContactProps {
  dict: Dictionary
}

export function Contact({ dict }: ContactProps) {
  return (
    <Section id="contact">
      <SectionHeading>{dict.sections.contact}</SectionHeading>

      <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-p-text mb-4 leading-tight">
        {dict.contact.heading}
      </h2>
      <p className="font-mono text-xs text-p-muted mb-12 max-w-xs leading-loose">
        {dict.contact.subheading}
      </p>

      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${contact.email}`}
          className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
        >
          <span aria-hidden="true" className="text-p-accent mr-2">→</span>
          {contact.email}
        </a>
        <ExternalLink
          href={contact.linkedin}
          className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          arrow={false}
        >
          <span aria-hidden="true" className="text-p-accent mr-2">→</span>
          linkedin.com/in/facuperezbri
          <span aria-hidden="true"> ↗</span>
        </ExternalLink>
        <ExternalLink
          href={contact.github}
          className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          arrow={false}
        >
          <span aria-hidden="true" className="text-p-accent mr-2">→</span>
          github.com/facuperezbri
          <span aria-hidden="true"> ↗</span>
        </ExternalLink>
      </div>
    </Section>
  )
}
