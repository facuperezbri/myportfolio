import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { workExperience, stackTags } from '@/constants/portfolioData'

interface AboutProps {
  dict: Dictionary
  lang: Locale
}

export function About({ dict, lang }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 border-t border-p-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs text-p-accent tracking-widest uppercase mb-10">
          {dict.sections.about}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="font-mono text-xs text-p-muted leading-loose mb-5">
              {dict.about.bio1}
            </p>
            <p className="font-mono text-xs text-p-muted leading-loose mb-5">
              {dict.about.bio2}
            </p>
            <p className="font-mono text-xs text-p-muted">{dict.about.bio3}</p>
          </div>

          <div>
            {workExperience.map((exp) => (
              <div key={exp.company} className="mb-8">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-mono text-sm font-semibold text-p-text">
                    {exp.role}
                  </h4>
                  <span className="font-mono text-xs text-p-muted ml-4 flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-p-accent hover:text-p-text transition-colors block mb-2"
                >
                  {exp.company} ↗
                </a>
                <p className="font-mono text-xs text-p-muted leading-relaxed">
                  {exp.description[lang]}
                </p>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 mt-6">
              {stackTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-p-muted border border-p-border px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
