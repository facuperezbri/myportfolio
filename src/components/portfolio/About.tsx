import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { LedgerRow } from '@/components/ui/LedgerRow'
import { workExperience, stackTags } from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'

interface AboutProps {
  dict: Dictionary
  lang: Locale
}

export function About({ dict, lang }: AboutProps) {
  return (
    <Section id="about">
      <SectionHeading meta={`${workExperience.length} ${dict.about.meta}`}>
        {dict.sections.about}
      </SectionHeading>

      <div className="max-w-2xl mb-14">
        <p className="text-p-ink leading-relaxed mb-4">{dict.about.bio1}</p>
        <p className="text-p-ink leading-relaxed mb-4">{dict.about.bio2}</p>
        <p className="font-mono text-sm text-p-muted">{dict.about.bio3}</p>
      </div>

      <div className="mb-10">
        {workExperience.map((exp, i) => (
          <LedgerRow key={exp.company} index={exp.entryNo} first={i === 0}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-2">
              <h3 className="font-display font-semibold text-p-ink text-lg tracking-tight">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-p-muted flex-shrink-0">
                {exp.period}
              </span>
            </div>
            <ExternalLink
              href={exp.link}
              className="font-mono text-xs text-p-accent hover:text-p-ink transition-colors inline-block mb-2"
            >
              {exp.company}
            </ExternalLink>
            <p className="text-p-muted leading-relaxed max-w-xl">
              {exp.description[lang]}
            </p>
          </LedgerRow>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {stackTags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] text-p-muted border border-p-rule px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </Section>
  )
}
