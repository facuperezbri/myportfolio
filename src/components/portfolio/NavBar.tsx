'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'

interface NavBarProps {
  dict: Dictionary
  lang: Locale
}

export function NavBar({ dict, lang }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const otherLang: Locale = lang === 'es' ? 'en' : 'es'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-p-bg/90 backdrop-blur-md border-b border-p-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm font-semibold text-p-accent tracking-widest">
          FPBR
        </span>

        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="#projects"
              className="font-mono text-xs text-p-muted hover:text-p-text transition-colors"
            >
              {dict.nav.projects}
            </a>
            <a
              href="#about"
              className="font-mono text-xs text-p-muted hover:text-p-text transition-colors"
            >
              {dict.nav.about}
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-p-muted hover:text-p-text transition-colors"
            >
              {dict.nav.contact}
            </a>
          </div>

          {/* Language toggle */}
          <div className="flex items-center gap-1.5">
            {lang === 'es' ? (
              <span className="font-mono text-xs text-p-accent">ES</span>
            ) : (
              <Link href="/es" className="font-mono text-xs text-p-muted hover:text-p-text transition-colors">
                ES
              </Link>
            )}
            <span className="font-mono text-xs text-p-border">|</span>
            {lang === 'en' ? (
              <span className="font-mono text-xs text-p-accent">EN</span>
            ) : (
              <Link href="/en" className="font-mono text-xs text-p-muted hover:text-p-text transition-colors">
                EN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
