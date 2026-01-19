'use client'

import { useEffect, useState } from 'react'

export const HackEffect = () => {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const hackLines = [
      'Initializing hack sequence...',
      'Bypassing security protocols...',
      'Accessing mainframe...',
      'Decrypting data...',
      'Uploading payload...',
      'Hack complete!',
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < hackLines.length) {
        setLines(prev => [...prev, hackLines[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setLines([]), 2000)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none">
      <div className="text-terminal-green font-mono text-sm">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 animate-pulse">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
