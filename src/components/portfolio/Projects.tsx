import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { LedgerRow } from '@/components/ui/LedgerRow'
import { StatusStamp, type StampTone } from '@/components/ui/StatusStamp'
import {
  portfolioProjects,
  legacyProjects,
  type PortfolioProject,
} from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'

interface ProjectsProps {
  dict: Dictionary
  lang: Locale
}

const STATUS_TONE: Record<PortfolioProject['status'], StampTone> = {
  released: 'green',
  in_development: 'amber',
  private: 'slate',
}

function ProjectEntry({
  project,
  dict,
  lang,
  featured,
}: {
  project: PortfolioProject
  dict: Dictionary
  lang: Locale
  featured?: boolean
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 mb-2">
        <h3
          className={`font-display font-semibold text-p-ink tracking-tight ${
            featured ? 'text-xl sm:text-2xl' : 'text-lg'
          }`}
        >
          {project.title}
        </h3>
        <span className="font-mono text-xs text-p-muted tabular-nums flex-shrink-0">
          {project.year}
        </span>
      </div>

      <p
        className={`text-p-muted leading-relaxed mb-4 ${featured ? 'max-w-xl' : 'max-w-md'}`}
      >
        {project.description[lang]}
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <StatusStamp tone={STATUS_TONE[project.status]}>
          {dict.status[project.status]}
        </StatusStamp>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-p-muted border border-p-rule-night px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {project.github && (
            <ExternalLink
              href={project.github}
              className="font-mono text-xs text-p-muted hover:text-p-ink transition-colors"
            >
              github
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink
              href={project.demo}
              className="font-mono text-xs text-p-accent hover:text-p-ink transition-colors"
            >
              demo
            </ExternalLink>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects({ dict, lang }: ProjectsProps) {
  const featured = portfolioProjects.find((p) => p.featured)
  const others = portfolioProjects.filter((p) => !p.featured)
  const rows = [...(featured ? [featured] : []), ...others]

  return (
    <Section id="projects" tone="night">
      <SectionHeading meta={`${portfolioProjects.length} ${dict.projects.meta}`}>
        {dict.sections.projects}
      </SectionHeading>

      <div>
        {rows.map((p, i) => (
          <LedgerRow key={p.id} index={p.entryNo} tone="night" first={i === 0}>
            <ProjectEntry
              project={p}
              dict={dict}
              lang={lang}
              featured={p.featured}
            />
          </LedgerRow>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-p-rule-night">
        <p className="font-mono text-[11px] text-p-muted uppercase tracking-wide mb-4">
          {dict.projects.legacy}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {legacyProjects.map((p) => (
            <ExternalLink
              key={p.title}
              href={p.url}
              className="font-mono text-xs text-p-muted hover:text-p-ink transition-colors opacity-80 hover:opacity-100"
            >
              {p.title}
            </ExternalLink>
          ))}
        </div>
      </div>
    </Section>
  )
}
