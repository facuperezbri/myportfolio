import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import {
  portfolioProjects,
  legacyProjects,
  type PortfolioProject,
} from '@/constants/portfolioData'

interface ProjectsProps {
  dict: Dictionary
  lang: Locale
}

function StatusBadge({
  status,
  dict,
}: {
  status: PortfolioProject['status']
  dict: Dictionary
}) {
  const colorMap: Record<PortfolioProject['status'], string> = {
    released: '#10B981',
    in_development: '#FF8C42',
    private: '#6B6B80',
  }
  const color = colorMap[status]
  const label = dict.status[status]

  return (
    <span
      className="font-mono text-xs px-2 py-0.5 border"
      style={{
        color,
        borderColor: `${color}40`,
        backgroundColor: `${color}10`,
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({
  project,
  dict,
  lang,
}: {
  project: PortfolioProject
  dict: Dictionary
  lang: Locale
}) {
  return (
    <div
      className="relative bg-p-surface border border-p-border border-l-2 p-6 hover:bg-[#161620] transition-colors group"
      style={{ borderLeftColor: project.accentColor }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-mono text-sm font-semibold text-p-text group-hover:text-p-accent transition-colors leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 flex-shrink-0">
          <StatusBadge status={project.status} dict={dict} />
          <span className="font-mono text-xs text-p-muted hidden sm:block">
            {project.year}
          </span>
        </div>
      </div>

      <p className="font-mono text-xs text-p-muted leading-relaxed mb-5">
        {project.description[lang]}
      </p>

      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-p-muted/50 border border-p-border/50 px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-p-muted hover:text-p-text transition-colors"
            >
              github ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs hover:text-p-text transition-colors"
              style={{ color: project.accentColor }}
            >
              demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Projects({ dict, lang }: ProjectsProps) {
  const featured = portfolioProjects.find((p) => p.featured)
  const others = portfolioProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 border-t border-p-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-p-accent tracking-widest uppercase mb-10">
          {dict.sections.projects}
        </p>

        <div className="flex flex-col gap-4">
          {featured && (
            <ProjectCard project={featured} dict={dict} lang={lang} />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} dict={dict} lang={lang} />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-p-border/50 flex flex-wrap gap-x-6 gap-y-3">
          {legacyProjects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-p-muted/50 hover:text-p-muted transition-colors"
            >
              {p.title} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
