'use client'

import { useEffect, useRef, useState } from 'react'

export type StampTone = 'green' | 'amber' | 'slate'

const TONE_STYLES: Record<StampTone, string> = {
  green: 'text-p-green border-p-green/35 bg-p-green/[0.07]',
  amber: 'text-p-amber border-p-amber/35 bg-p-amber/[0.07]',
  slate: 'text-p-slate border-p-slate/35 bg-p-slate/[0.07]',
}

interface StatusStampProps {
  tone: StampTone
  children: React.ReactNode
}

/** A stamped status chip: settles into place once, the first time it scrolls into view. */
export function StatusStamp({ tone, children }: StatusStampProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [stamped, setStamped] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStamped(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`inline-block font-mono text-[11px] tracking-wide uppercase px-2 py-0.5 border ${TONE_STYLES[tone]}${stamped ? ' [animation:stamp-down_0.4s_cubic-bezier(0.16,1,0.3,1)]' : ''}`}
    >
      {children}
    </span>
  )
}
