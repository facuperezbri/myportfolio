export interface TerminalCommand {
  command: string
  args: string[]
  fullInput: string
}

export interface TerminalOutput {
  type: 'command' | 'output' | 'error' | 'ai'
  content: string
  timestamp: number
}

export interface CommandHandler {
  (args: string[]): Promise<string> | string
}

export interface Theme {
  name: string
  bg: string
  text: string
  prompt: string
  accent?: string
  error?: string
  success?: string
  warning?: string
  ai?: string
  muted?: string
}

export interface Project {
  title: string
  github: string | null
  deploy: string
  image: string
  technologies: string[]
  description?: string
}

export interface Skill {
  title: string
  icon: string
}
