import { ExternalArrowIcon } from './icons'

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Show the external-link glyph after the content (default: true) */
  arrow?: boolean
}

export function ExternalLink({
  href,
  children,
  className,
  style,
  arrow = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
      {arrow && (
        <ExternalArrowIcon className="inline-block w-3 h-3 ml-1 -mt-0.5 align-middle" />
      )}
    </a>
  )
}
