'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useTerminal } from '@/hooks/useTerminal'
import { useSound } from '@/hooks/useSound'
import { setAIQueryCallback } from '@/hooks/useTerminal'
import { TerminalInput } from './TerminalInput'
import { TerminalOutput } from './TerminalOutput'
import { StatusBar } from './StatusBar'
import { WindowFrame } from './WindowFrame'
import { MatrixEffect } from './MatrixEffect'
import { HackEffect } from './HackEffect'

export const Terminal = () => {
  const {
    outputs,
    input,
    theme,
    isChatMode,
    isProcessingChat,
    suggestions,
    inputRef,
    setInput,
    handleSubmit,
    handleKeyDown,
    addAIResponse,
  } = useTerminal()

  const [soundEnabled, setSoundEnabled] = useState(true)
  const { playKeySound } = useSound(soundEnabled)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [showMatrix, setShowMatrix] = useState(false)
  const [showHack, setShowHack] = useState(false)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [outputs])

  const handleInputChange = (value: string) => {
    setInput(value)
    playKeySound()
  }

  useEffect(() => {
    if (input === '?') {
      const timer = setTimeout(() => {
        const fakeEvent = {
          preventDefault: () => {},
        } as React.FormEvent
        handleSubmit(fakeEvent)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [input, handleSubmit])

  const handleKeyDownWithSound = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Tab') {
      playKeySound()
    }
    handleKeyDown(e)
  }

  useEffect(() => {
    const lastOutput = outputs[outputs.length - 1]
    if (!lastOutput) return

    if (lastOutput.content.startsWith('EFFECT:MATRIX_EFFECT')) {
      setShowMatrix(true)
      setTimeout(() => setShowMatrix(false), 10000)
    }
    if (lastOutput.content.startsWith('EFFECT:HACK_EFFECT')) {
      setShowHack(true)
      setTimeout(() => setShowHack(false), 5000)
    }
  }, [outputs])

  useEffect(() => {
    setAIQueryCallback(fetchAIResponse)
  }, [])

  const fetchAIResponse = useCallback(async (question: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      })

      if (!response.ok) {
        addAIResponse('Error: Unable to connect to AI. Please check your API key.')
        return
      }

      const text = await response.text()
      if (text) {
        addAIResponse(text)
      }
    } catch (error) {
      addAIResponse('Error: Unable to connect to AI. Please try again.')
    }
  }, [addAIResponse])

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: theme.bg }}>
      {showMatrix && <MatrixEffect />}
      {showHack && <HackEffect />}
      <div className="relative w-full h-screen z-10">
        <div className="w-full pt-8 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <WindowFrame theme={theme}>
              <div className="flex flex-col h-[550px]">
                <div
                  ref={terminalRef}
                  className="flex-1 overflow-y-auto p-6 font-mono text-sm"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${theme.text} transparent`,
                  }}
                >
                  <div>
                    {outputs.map((output, index) => (
                      <TerminalOutput key={index} output={output} theme={theme} />
                    ))}
                  </div>
                </div>
                
                <div className="px-6 pb-2">
                  <TerminalInput
                    input={input}
                    theme={theme}
                    suggestions={suggestions}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                    onKeyDown={handleKeyDownWithSound}
                    inputRef={inputRef}
                    onKeyPress={playKeySound}
                    disabled={isProcessingChat}
                  />
                  <div 
                    className={`flex justify-between items-center ${
                      suggestions.length > 0 && input.trim() ? 'mt-6' : 'mt-1'
                    }`}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{ color: theme.muted || '#4B5563' }}
                    >
                      ? for shortcuts
                    </span>
                  </div>
                </div>
                
                <StatusBar theme={theme} soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled(!soundEnabled)} />
              </div>
            </WindowFrame>
          </div>
        </div>
      </div>
    </div>
  )
}
