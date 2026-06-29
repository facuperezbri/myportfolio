import type { Dictionary } from '@/i18n'
import { contact } from '@/constants/portfolioData'

interface HeroProps {
  dict: Dictionary
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 px-6 pt-14">
      <div className="max-w-3xl mx-auto w-full">
        <p className="font-mono text-xs text-p-accent tracking-widest uppercase mb-5">
          {dict.hero.role}
        </p>

        <h1 className="font-mono font-semibold text-p-text leading-tight mb-4">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Facundo</span>
          <span className="block text-4xl sm:text-6xl md:text-7xl">
            Pérez Brizuela
          </span>
        </h1>

        <p className="font-mono text-sm text-p-muted mb-8 tracking-wide">
          Galileo &middot; SoFi &mdash; Mendoza, AR
        </p>

        <div className="w-8 h-px bg-p-accent mb-8" />

        <p className="font-mono text-sm md:text-base text-p-muted leading-loose mb-12 max-w-sm">
          {dict.hero.tagline1}
          <br />
          {dict.hero.tagline2}
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="font-mono text-sm text-p-text border border-p-border px-5 py-2.5 hover:border-p-accent hover:text-p-accent transition-colors"
          >
            {dict.hero.cta}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-p-muted hover:text-p-text transition-colors"
          >
            github ↗
          </a>
        </div>
      </div>
    </section>
  )
}
