'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getDictionary } from '@/i18n'
import { resolveLocale } from '@/i18n/config'

export default function NotFound() {
  const params = useParams<{ lang?: string }>()
  const locale = resolveLocale(params?.lang ?? '')
  const dict = getDictionary(locale)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs text-p-muted tracking-widest uppercase mb-6 border border-p-rule px-2 py-1">
        {dict.notFound.code}
      </p>
      <h1 className="text-2xl font-semibold text-p-ink mb-4 tracking-tight">
        {dict.notFound.title}
      </h1>
      <p className="text-sm text-p-muted mb-10">{dict.notFound.description}</p>
      <Link
        href="/"
        className="font-mono text-sm text-p-ink border border-p-ink px-5 py-2.5 hover:bg-p-ink hover:text-p-bg transition-colors"
      >
        <span aria-hidden="true">← </span>
        {dict.notFound.back}
      </Link>
    </div>
  )
}
