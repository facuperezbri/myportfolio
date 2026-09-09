import type { Metadata } from 'next'
import { Fraunces, Space_Grotesk, Space_Mono } from 'next/font/google'
import type { Locale } from '@/i18n/config'
import { locales, resolveLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../globals.css'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})

const fraunces = Fraunces({
  weight: ['500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

const DIRECTION_CONTRACT = `<!--
THESIS: The portfolio as a bank reconciliation slip, not a hacker terminal —
every project and role a real ledger line that opens, moves, and closes.
OWN-WORLD: Cream ledger paper (a cooler paper for the night ledger, Projects),
ink-navy type, one brass accent, honest green/amber/slate status stamps;
Space Grotesk for structure and prose, Space Mono for every tabular figure,
date, and status code.
STORY: A recruiter, peer, or founder opens a real financial document and
trusts it instantly; they read name, role, and the honest status of each
project and job, then reach out through a labeled reference line.
FIRST VIEWPORT: Full-bleed cream header — name as the statement's title,
role/location subheading, a thin rule, two tagline lines each led by a small
sun/moon glyph, a stamped CTA, linkedin/github as reference lines beneath.
FORM: The Daily Close — chosen directly by the user over the dice, round 3,
seed key 15c1ad47.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying
its provenance.
-->`

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = resolveLocale(lang)
  const dict = getDictionary(locale)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      'Software Engineer',
      'Fullstack Developer',
      'React',
      'TypeScript',
      'Next.js',
      'AI',
      'Galileo',
      'SoFi',
      'Mendoza',
      'Argentina',
    ],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: 'website',
    },
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
      },
    },
  }
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale: Locale = resolveLocale(lang)

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased font-sans">
        <div
          aria-hidden="true"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
