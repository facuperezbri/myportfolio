'use client'

import { useEffect } from 'react'
import { Cursor } from './Cursor'

interface TerminalInputProps {
  input: string
  theme: { text: string; prompt: string; accent?: string; muted?: string }
  suggestions: string[]
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  inputRef: React.RefObject<HTMLInputElement>
  onKeyPress?: () => void
  disabled?: boolean
}

export const TerminalInput = ({
  input,
  theme,
  suggestions,
  onChange,
  onSubmit,
  onKeyDown,
  inputRef,
  onKeyPress,
  disabled = false,
}: TerminalInputProps) => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth
    }
  }, [input, inputRef])

  return (
    <form onSubmit={onSubmit} className="flex items-center w-full min-w-0">
      <span className="mr-2 flex-shrink-0" style={{ color: theme.accent || theme.prompt }}>
        &gt;
      </span>
      <div className="flex-1 relative min-w-0">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            onChange(e.target.value)
            if (onKeyPress) onKeyPress()
          }}
          onKeyDown={(e) => {
            if (disabled && e.key === 'Enter') {
              e.preventDefault()
              return
            }
            onKeyDown(e)
          }}
          className="bg-transparent outline-none w-full font-mono"
          style={{ 
            color: theme.text,
            minWidth: 0,
            overflowX: 'auto',
            overflowY: 'hidden',
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          disabled={disabled}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
        {suggestions.length > 0 && input.trim() && (
          <div
            className="absolute top-full left-0 mt-1 text-xs whitespace-nowrap"
            style={{ color: theme.muted || theme.text, opacity: 0.6 }}
          >
            {suggestions[0]}
          </div>
        )}
      </div>
      <Cursor />
    </form>
  )
}
