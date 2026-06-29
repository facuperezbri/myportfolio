import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import type { Locale } from '@/i18n/config'
import { locales, resolveLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

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
    <html lang={locale} className={ibmPlexMono.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
