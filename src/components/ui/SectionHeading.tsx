interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <p
      className={`font-mono text-xs text-p-accent tracking-widest uppercase mb-10${className ? ` ${className}` : ''}`}
    >
      {children}
    </p>
  )
}
