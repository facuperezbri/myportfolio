'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'

interface NavBarProps {
  dict: Dictionary
  lang: Locale
}

const NAV_LINKS = [
  { key: 'projects', href: '#projects' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
] as const

export function NavBar({ dict, lang }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-p-bg/90 backdrop-blur-md border-b border-p-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-p-ink tracking-widest border border-p-rule px-1.5 py-0.5">
          FPBR
        </span>

        <div className="flex items-center gap-6 sm:gap-8">
          <div className="hidden sm:flex items-center gap-7" role="list">
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                role="listitem"
                className="font-mono text-xs text-p-muted hover:text-p-ink transition-colors underline decoration-transparent hover:decoration-p-ink decoration-1 underline-offset-4"
              >
                {dict.nav[key]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 font-mono text-[11px]">
            {lang === 'es' ? (
              <span
                className="text-p-ink border border-p-ink px-1.5 py-0.5"
                aria-current="true"
              >
                ES
              </span>
            ) : (
              <Link
                href="/es"
                className="text-p-muted border border-transparent hover:border-p-rule px-1.5 py-0.5 transition-colors"
                aria-label="Cambiar idioma a Español"
              >
                ES
              </Link>
            )}
            {lang === 'en' ? (
              <span
                className="text-p-ink border border-p-ink px-1.5 py-0.5"
                aria-current="true"
              >
                EN
              </span>
            ) : (
              <Link
                href="/en"
                className="text-p-muted border border-transparent hover:border-p-rule px-1.5 py-0.5 transition-colors"
                aria-label="Switch language to English"
              >
                EN
              </Link>
            )}
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="sm:hidden flex flex-col gap-1.5 p-1 text-p-ink"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-200 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="max-w-3xl mx-auto px-6 pb-4 flex flex-col gap-4 border-t border-p-rule pt-4">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-mono text-sm text-p-muted hover:text-p-ink transition-colors py-1"
              onClick={closeMenu}
            >
              {dict.nav[key]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
