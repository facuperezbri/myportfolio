import type { CommandHandler } from '@/types/terminal'
import { projects, skills, aboutText, contactInfo } from '@/constants/portfolio'
import { getProjectAscii, cowsay } from './asciiArt'

const getShortcutsList = (): string => {
  const commandList = [
    'help', 'about', 'skills', 'projects', 'contact',
    'clear', 'theme', 'chat',
    'matrix', 'hack', 'cowsay'
  ]
  return commandList.map(cmd => `/${cmd}`).join(', ')
}

export const commands: Record<string, CommandHandler> = {
  '?': () => {
    return `Available commands: ${getShortcutsList()}\n\nType /help for detailed information.`
  },

  help: () => {
    return `
Available commands (use with or without /):

BASIC
  /help, /about, /skills, /projects, /contact
  /clear, /theme [claude|green|amber|white]

AI
  /chat              Conversational mode

EASTER EGGS
  /matrix, /hack, /cowsay [msg]
  sudo rm -rf /      Try it... 😏

Use Tab for autocomplete.
`
  },

  about: () => {
    return aboutText
  },

  skills: () => {
    const skillsList = skills.map(s => `  • ${s.title}`).join('\n')
    return `
My technical skills:

${skillsList}
`
  },

  projects: () => {
    let output = '\nMy Projects:\n\n'
    projects.forEach((project, index) => {
      output += `${getProjectAscii(project.title)}\n`
      output += `Title: ${project.title}\n`
      if (project.description) {
        output += `Description: ${project.description}\n`
      }
      output += `Technologies: ${project.technologies.join(', ')}\n`
      output += `Deploy: ${project.deploy}\n`
      if (project.github) {
        output += `GitHub: ${project.github}\n`
      }
      output += '\n'
    })
    return output
  },

  contact: () => {
    return `
Contact Information:

Email: ${contactInfo.email}
LinkedIn: ${contactInfo.linkedin}
GitHub: ${contactInfo.github}

Feel free to reach out!
`
  },

  clear: () => {
    return 'CLEAR'
  },

  theme: (args) => {
    const themes = ['claude', 'green', 'amber', 'white']
    const theme = args[0]?.toLowerCase()
    if (!theme || !themes.includes(theme)) {
      return `Available themes: ${themes.join(', ')}\nUsage: theme [${themes.join('|')}]`
    }
    return `THEME:${theme}`
  },

  chat: () => {
    return 'CHAT_MODE'
  },

  matrix: () => {
    return 'MATRIX_EFFECT'
  },

  hack: () => {
    return 'HACK_EFFECT'
  },

  'sudo rm -rf /': () => {
    return `
╔═══════════════════════════════════════╗
║  ERROR: Permission denied            ║
║                                       ║
║  Nice try! 😄                         ║
║  This is a portfolio, not a real OS!  ║
╚═══════════════════════════════════════╝
`
  },

  cowsay: (args) => {
    if (args.length === 0) {
      return 'Usage: cowsay [message]\nExample: cowsay Hello World!'
    }
    return cowsay(args.join(' '))
  },
}

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const trimmed = input.trim()
  if (!trimmed) return { command: '', args: [] }
  
  if (trimmed === '?') {
    return { command: '?', args: [] }
  }
  
  const parts = trimmed.split(/\s+/)
  let command = parts[0].toLowerCase()
  
  if (command.startsWith('/')) {
    command = command.slice(1)
  }
  
  const args = parts.slice(1)
  
  if (command === 'sudo' && args.length > 0) {
    const fullCommand = `${command} ${args.join(' ')}`
    if (fullCommand === 'sudo rm -rf /') {
      return { command: fullCommand, args: [] }
    }
  }
  
  return { command, args }
}

export const getCommandSuggestions = (input: string): string[] => {
  const trimmed = input.toLowerCase().trim()
  if (!trimmed) {
    return Object.keys(commands).map(cmd => `/${cmd}`)
  }
  
  const hasSlash = trimmed.startsWith('/')
  const searchTerm = hasSlash ? trimmed.slice(1) : trimmed
  
  const matches = Object.keys(commands).filter(cmd => 
    cmd.toLowerCase().startsWith(searchTerm)
  )
  
  return matches.map(cmd => hasSlash ? `/${cmd}` : cmd)
}
