import type { Locale } from '@/i18n/config'
import { locales } from '@/i18n/config'
import { getDictionary } from '@/i18n'
import { NavBar } from '@/components/portfolio/NavBar'
import { Hero } from '@/components/portfolio/Hero'
import { Projects } from '@/components/portfolio/Projects'
import { About } from '@/components/portfolio/About'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale: Locale = locales.includes(lang as Locale)
    ? (lang as Locale)
    : 'en'
  const dict = getDictionary(locale)

  return (
    <>
      <NavBar dict={dict} lang={locale} />
      <main>
        <Hero dict={dict} />
        <Projects dict={dict} lang={locale} />
        <About dict={dict} lang={locale} />
        <Contact dict={dict} />
      </main>
      <Footer />
    </>
  )
}
