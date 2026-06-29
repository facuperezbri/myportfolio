import { Container } from '@/components/ui/Container'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contact } from '@/constants/portfolioData'
import type { Dictionary } from '@/i18n'

interface HeroProps {
  dict: Dictionary
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24 px-6 pt-14">
      <Container>
        <SectionHeading>{dict.hero.role}</SectionHeading>

        <h1 className="font-semibold text-p-text leading-tight mb-4">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Facundo</span>
          <span className="block text-4xl sm:text-6xl md:text-7xl">
            Pérez Brizuela
          </span>
        </h1>

        <p className="text-sm text-p-muted mb-8 tracking-wide">
          {dict.hero.location}
        </p>

        <div className="w-8 h-px bg-p-accent mb-8" />

        <p className="text-sm md:text-base text-p-muted leading-loose mb-12 max-w-sm">
          {dict.hero.tagline1}
          <br />
          {dict.hero.tagline2}
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="text-sm text-p-text border border-p-border px-5 py-2.5 hover:border-p-accent hover:text-p-accent transition-colors"
          >
            {dict.hero.cta}
          </a>
          <ExternalLink
            href={contact.linkedin}
            className="text-sm text-p-muted hover:text-p-text transition-colors"
          >
            linkedin
          </ExternalLink>
          <ExternalLink
            href={contact.github}
            className="text-sm text-p-muted hover:text-p-text transition-colors"
          >
            github
          </ExternalLink>
        </div>
      </Container>
    </section>
  )
}
