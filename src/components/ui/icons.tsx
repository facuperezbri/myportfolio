interface IconProps {
  className?: string
}

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <circle cx="8" cy="8" r="3.25" />
      <path d="M8 1.5v1.75M8 12.75v1.75M2.4 2.4l1.25 1.25M12.35 12.35l1.25 1.25M1.5 8h1.75M12.75 8h1.75M2.4 13.6l1.25-1.25M12.35 3.65l1.25-1.25" />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <path d="M13.5 9.4A5.75 5.75 0 0 1 6.6 2.5a5.75 5.75 0 1 0 6.9 6.9Z" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  )
}

export function ExternalArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <path d="M5 11 11 5M6.25 5H11v4.75" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <rect x="1.75" y="3.5" width="12.5" height="9" rx="0.5" />
      <path d="M2.25 4.25 8 8.75l5.75-4.5" />
    </svg>
  )
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <path d="M6.75 9.25 9.25 6.75" />
      <path d="M7.5 4.25 8.6 3.15a2.4 2.4 0 0 1 3.4 3.4L10.9 7.6M8.5 11.75 7.4 12.85a2.4 2.4 0 0 1-3.4-3.4l1.1-1.1" />
    </svg>
  )
}

export function BracketsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...STROKE}>
      <path d="M5.5 3.5 2 8l3.5 4.5M10.5 3.5 14 8l-3.5 4.5" />
    </svg>
  )
}
