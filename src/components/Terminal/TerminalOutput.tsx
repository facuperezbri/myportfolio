'use client'

import { useEffect, useRef } from 'react'
import type { TerminalOutput as TerminalOutputType } from '@/types/terminal'
import { WelcomeHeader } from './WelcomeHeader'

interface TerminalOutputProps {
  output: TerminalOutputType
  theme: {
    text: string
    accent?: string
    prompt?: string
    error?: string
    ai?: string
    muted?: string
  }
}

export const TerminalOutput = ({ output, theme }: TerminalOutputProps) => {
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [output])

  if (output.type === 'command') {
    return (
      <div className="mb-2">
        <span style={{ color: theme.accent || theme.text }}>&gt; </span>
        <span style={{ color: theme.muted || theme.text }}>{output.content}</span>
      </div>
    )
  }

  if (output.type === 'error') {
    return (
      <div
        className="mb-2 whitespace-pre-wrap"
        style={{ color: theme.error || '#EF4444' }}
      >
        {output.content}
      </div>
    )
  }

  if (output.type === 'ai') {
    return (
      <div className="mb-2 whitespace-pre-wrap">
        <span style={{ color: theme.accent || theme.prompt || '#FF8C42' }}>✻ </span>
        <span style={{ color: theme.accent || theme.prompt || '#FF8C42' }}>{output.content}</span>
      </div>
    )
  }

  if (output.content === '') {
    return <WelcomeHeader theme={theme} />
  }

  return (
    <div 
      ref={outputRef}
      className="mb-2 whitespace-pre-wrap font-mono"
      style={{ color: theme.accent || theme.prompt || '#FF8C42' }}
    >
      {output.content}
    </div>
  )
}
