'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import type { TerminalOutput, Theme } from '@/types/terminal'
import { parseCommand, commands, getCommandSuggestions } from '@/lib/commands'

let aiQueryCallback: ((question: string) => void) | null = null

export const setAIQueryCallback = (callback: (question: string) => void) => {
  aiQueryCallback = callback
}

export const useTerminal = () => {
  const [outputs, setOutputs] = useState<TerminalOutput[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [theme, setTheme] = useState<Theme>({
    name: 'claude',
    bg: '#1A1B23',
    text: '#E5E7EB',
    prompt: '#FF8C42',
    accent: '#FF8C42',
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    ai: '#8B5CF6',
    muted: '#4B5563',
  })
  const [isChatMode, setIsChatMode] = useState(false)
  const [isProcessingChat, setIsProcessingChat] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const banner: TerminalOutput = {
      type: 'output',
      content: '',
      timestamp: Date.now(),
    }
    setOutputs([banner])
  }, [])

  const executeCommand = useCallback(async (commandInput: string) => {
    const { command, args } = parseCommand(commandInput)
    
    if (!command) {
      setOutputs(prev => [...prev, {
        type: 'command',
        content: commandInput,
        timestamp: Date.now(),
      }])
      return
    }

    setOutputs(prev => [...prev, {
      type: 'command',
      content: commandInput,
      timestamp: Date.now(),
    }])

    if (command === 'clear') {
      setOutputs(prev => {
        const header = prev.find(output => output.content === '' && output.type === 'output')
        return header ? [header] : []
      })
      return
    }

    if (command.startsWith('THEME:')) {
      const themeName = command.split(':')[1]
      const themes: Record<string, Theme> = {
        claude: {
          name: 'claude',
          bg: '#1A1B23',
          text: '#E5E7EB',
          prompt: '#FF8C42',
          accent: '#FF8C42',
          error: '#EF4444',
          success: '#10B981',
          warning: '#F59E0B',
          ai: '#8B5CF6',
          muted: '#4B5563',
        },
        green: {
          name: 'green',
          bg: '#0a0f0a',
          text: '#33ff33',
          prompt: '#33ff33',
        },
        amber: {
          name: 'amber',
          bg: '#0a0f0a',
          text: '#ffb000',
          prompt: '#ffb000',
        },
        white: {
          name: 'white',
          bg: '#0a0f0a',
          text: '#ffffff',
          prompt: '#ffffff',
        },
      }
      setTheme(themes[themeName] || themes.claude)
      setOutputs(prev => [...prev, {
        type: 'output',
        content: `Theme changed to ${themeName}`,
        timestamp: Date.now(),
      }])
      return
    }

    if (command.startsWith('AI_QUERY:')) {
      const question = command.replace('AI_QUERY:', '')
      setOutputs(prev => [...prev, {
        type: 'output',
        content: 'Thinking...',
        timestamp: Date.now(),
      }])
      if (aiQueryCallback) {
        const callback = aiQueryCallback
        setTimeout(() => callback(question), 100)
      }
      return
    }

    const handler = commands[command]
    if (handler) {
      try {
        const result = await handler(args)
        
        if (result === 'CHAT_MODE') {
          setIsChatMode(true)
          setOutputs(prev => [...prev, {
            type: 'output',
            content: 'Chat mode enabled. Ask me anything! Type "exit" to leave chat mode.',
            timestamp: Date.now(),
          }])
          return
        }
        
        if (result === 'MATRIX_EFFECT' || result === 'HACK_EFFECT') {
          setOutputs(prev => [...prev, {
            type: 'output',
            content: `EFFECT:${result}`,
            timestamp: Date.now(),
          }])
          return
        }
        
        setOutputs(prev => [...prev, {
          type: 'output',
          content: result,
          timestamp: Date.now(),
        }])
      } catch (error) {
        setOutputs(prev => [...prev, {
          type: 'error',
          content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          timestamp: Date.now(),
        }])
      }
    } else {
      setOutputs(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${command}. Type 'help' for available commands.`,
        timestamp: Date.now(),
      }])
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    if (isChatMode && input.toLowerCase() === 'exit') {
      setIsChatMode(false)
      setOutputs(prev => [...prev, {
        type: 'output',
        content: 'Chat mode disabled.',
        timestamp: Date.now(),
      }])
      setInput('')
      setHistoryIndex(-1)
      return
    }

    if (isChatMode) {
      if (isProcessingChat) {
        return
      }

      setIsProcessingChat(true)
      setHistoryIndex(-1)
      
      const currentInput = input
      
      setOutputs(prev => [...prev, {
        type: 'command',
        content: currentInput,
        timestamp: Date.now(),
      }])
      
      setOutputs(prev => [...prev, {
        type: 'output',
        content: 'Thinking...',
        timestamp: Date.now(),
      }])

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: currentInput }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
          setOutputs(prev => {
            const withoutThinking = prev.filter(output => output.content !== 'Thinking...')
            return [...withoutThinking, {
              type: 'error',
              content: errorData.error || 'Error: Unable to connect to AI. Please check your API key.',
              timestamp: Date.now(),
            }]
          })
        } else {
          const text = await response.text()
          setOutputs(prev => {
            const withoutThinking = prev.filter(output => output.content !== 'Thinking...')
            return [...withoutThinking, {
              type: 'ai',
              content: text,
              timestamp: Date.now(),
            }]
          })
          setInput('')
        }
      } catch (error) {
        setOutputs(prev => {
          const withoutThinking = prev.filter(output => output.content !== 'Thinking...')
          return [...withoutThinking, {
            type: 'error',
            content: 'Error: Unable to connect to AI. Please try again.',
            timestamp: Date.now(),
          }]
        })
      } finally {
        setIsProcessingChat(false)
      }
    } else {
      setHistory(prev => [...prev, input])
      setHistoryIndex(-1)
      executeCommand(input)
      setInput('')
    }

    setSuggestions([])
  }, [input, isChatMode, executeCommand])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
        setSuggestions([])
      }
    }
  }, [history, historyIndex, suggestions])

  const handleInputChange = useCallback((value: string) => {
    setInput(value)
    if (value.trim()) {
      const suggestions = getCommandSuggestions(value)
      setSuggestions(suggestions.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }, [])

  const addAIResponse = useCallback((response: string) => {
    setOutputs(prev => [...prev, {
      type: 'ai',
      content: response,
      timestamp: Date.now(),
    }])
  }, [])

  return {
    outputs,
    input,
    theme,
    isChatMode,
    isProcessingChat,
    suggestions,
    inputRef,
    setInput: handleInputChange,
    handleSubmit,
    handleKeyDown,
    addAIResponse,
  }
}
