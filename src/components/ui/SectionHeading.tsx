interface SectionHeadingProps {
  children: React.ReactNode
  /** A real, countable fact (e.g. "3 movimientos") — never decorative. */
  meta?: React.ReactNode
  className?: string
}

/**
 * The section's own heading, full weight — no eyebrow riding above it.
 * `meta` renders as a real ledger fact beside the heading, never a caption
 * that merely previews it.
 */
export function SectionHeading({ children, meta, className }: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-10 sm:mb-14${className ? ` ${className}` : ''}`}
    >
      <h2 className="font-display font-semibold text-p-ink text-3xl sm:text-4xl tracking-tight">
        {children}
      </h2>
      {meta && (
        <span className="font-mono text-xs text-p-muted tabular-nums">{meta}</span>
      )}
    </div>
  )
}
