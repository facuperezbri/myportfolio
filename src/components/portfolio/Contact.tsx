import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { MailIcon, LinkIcon, BracketsIcon } from '@/components/ui/icons'
import { contact } from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'

interface ContactProps {
  dict: Dictionary
}

export function Contact({ dict }: ContactProps) {
  return (
    <Section id="contact">
      <SectionHeading>{dict.sections.contact}</SectionHeading>

      <p className="font-display font-semibold text-p-ink text-2xl sm:text-3xl mb-3 tracking-tight">
        {dict.contact.heading}
      </p>
      <p className="text-p-muted mb-12 max-w-sm leading-relaxed">
        {dict.contact.subheading}
      </p>

      <div className="flex flex-col gap-4 max-w-sm">
        <a
          href={`mailto:${contact.email}`}
          className="group flex items-center gap-3 font-mono text-sm text-p-muted hover:text-p-ink transition-colors"
        >
          <MailIcon className="w-4 h-4 text-p-accent flex-shrink-0" />
          <span className="underline decoration-p-rule decoration-1 underline-offset-4 group-hover:decoration-p-ink">
            {contact.email}
          </span>
        </a>
        <ExternalLink
          href={contact.linkedin}
          arrow={false}
          className="group flex items-center gap-3 font-mono text-sm text-p-muted hover:text-p-ink transition-colors"
        >
          <LinkIcon className="w-4 h-4 text-p-accent flex-shrink-0" />
          <span className="underline decoration-p-rule decoration-1 underline-offset-4 group-hover:decoration-p-ink">
            linkedin.com/in/facuperezbri
          </span>
        </ExternalLink>
        <ExternalLink
          href={contact.github}
          arrow={false}
          className="group flex items-center gap-3 font-mono text-sm text-p-muted hover:text-p-ink transition-colors"
        >
          <BracketsIcon className="w-4 h-4 text-p-accent flex-shrink-0" />
          <span className="underline decoration-p-rule decoration-1 underline-offset-4 group-hover:decoration-p-ink">
            github.com/facuperezbri
          </span>
        </ExternalLink>
      </div>
    </Section>
  )
}
