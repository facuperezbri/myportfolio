import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import { getDictionary } from '@/i18n'
import '../globals.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : 'en'
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
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : 'en'

  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
