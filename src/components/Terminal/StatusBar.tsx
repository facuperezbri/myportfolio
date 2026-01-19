'use client'

interface StatusBarProps {
  theme: {
    text?: string
    muted?: string
    accent?: string
  }
  soundEnabled: boolean
  onToggleSound: () => void
}

const SoundIcon = ({ enabled }: { enabled: boolean }) => {
  if (enabled) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    )
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

export const StatusBar = ({ theme, soundEnabled, onToggleSound }: StatusBarProps) => {
  return (
    <div
      className="border-t px-6 py-2 font-mono text-xs mt-auto"
      style={{
        backgroundColor: theme.muted ? `${theme.muted}20` : 'rgba(75, 85, 99, 0.1)',
        borderColor: theme.muted || '#4B5563',
        color: theme.muted || '#4B5563',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>Facu Perez Brizuela</span>
          <span className="mx-2">•</span>
          <span>Fullstack Developer</span>
          <span className="mx-2">•</span>
          <span>Mendoza, AR</span>
        </div>
        <button
          onClick={onToggleSound}
          className="hover:opacity-70 transition-opacity cursor-pointer flex items-center"
          style={{ color: theme.accent || theme.text }}
          title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
        >
          <SoundIcon enabled={soundEnabled} />
        </button>
      </div>
    </div>
  )
}
