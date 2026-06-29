import type { Dictionary } from '@/i18n'
import { contact } from '@/constants/portfolioData'

interface ContactProps {
  dict: Dictionary
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-6 border-t border-p-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-p-accent tracking-widest uppercase mb-10">
          {dict.sections.contact}
        </p>

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
            <span className="text-p-accent mr-2">→</span>
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          >
            <span className="text-p-accent mr-2">→</span>
            linkedin.com/in/facuperezbri ↗
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          >
            <span className="text-p-accent mr-2">→</span>
            github.com/facuperezbri ↗
          </a>
        </div>
      </div>
    </section>
  )
}
