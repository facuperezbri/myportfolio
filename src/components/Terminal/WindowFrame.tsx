'use client'

interface WindowFrameProps {
  children: React.ReactNode
  theme: {
    bg?: string
    text?: string
  }
}

export const WindowFrame = ({ children, theme }: WindowFrameProps) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl border"
      style={{
        backgroundColor: theme.bg || '#1A1B23',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className="px-4 py-2 flex items-center justify-between border-b relative"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#FF5F56' }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#FFBD2E' }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#27C93F' }}
          />
        </div>
        <div
          className="text-xs font-medium absolute left-1/2 transform -translate-x-1/2"
          style={{ color: theme.text || '#E5E7EB' }}
        >
          Facu's Terminal
        </div>
        <div className="w-12" />
      </div>
      {children}
    </div>
  )
}
