import { Container } from '@/components/ui/Container'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { ArrowRightIcon, MoonIcon, SunIcon } from '@/components/ui/icons'
import { contact } from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'

interface HeroProps {
  dict: Dictionary
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 sm:pb-24 px-6 pt-24">
      <Container>
        <h1 className="font-display font-semibold text-p-ink leading-[0.95] tracking-tight mb-5">
          <span className="block text-5xl sm:text-7xl md:text-8xl">Facundo</span>
          <span className="block text-5xl sm:text-7xl md:text-8xl">
            Pérez Brizuela
          </span>
        </h1>

        <p className="font-mono text-sm text-p-muted mb-10 tracking-tight">
          {dict.hero.role} · {dict.hero.location}
        </p>

        <div className="w-10 h-px bg-p-rule mb-8" />

        <div className="flex flex-col gap-3 mb-12 max-w-md">
          <p className="flex items-center gap-2.5 text-p-ink text-base sm:text-lg">
            <SunIcon className="w-4 h-4 text-p-accent flex-shrink-0" />
            {dict.hero.tagline1}
          </p>
          <p className="flex items-center gap-2.5 text-p-ink text-base sm:text-lg">
            <MoonIcon className="w-4 h-4 text-p-accent flex-shrink-0" />
            {dict.hero.tagline2}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 font-mono text-sm text-p-accent border-2 border-p-accent px-5 py-2.5 hover:bg-p-accent hover:text-p-bg transition-colors self-start [animation:stamp-down-tilt_0.55s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]"
          >
            {dict.hero.cta}
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <ExternalLink
              href={contact.linkedin}
              arrow={false}
              className="font-mono text-sm text-p-muted hover:text-p-ink transition-colors underline decoration-p-rule decoration-1 underline-offset-4 hover:decoration-p-ink"
            >
              linkedin
            </ExternalLink>
            <ExternalLink
              href={contact.github}
              arrow={false}
              className="font-mono text-sm text-p-muted hover:text-p-ink transition-colors underline decoration-p-rule decoration-1 underline-offset-4 hover:decoration-p-ink"
            >
              github
            </ExternalLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
