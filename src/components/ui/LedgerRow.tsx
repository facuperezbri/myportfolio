interface LedgerRowProps {
  /** Real reference number for this line item (a genuine ledger convention, not decoration). */
  index: number
  tone?: 'night'
  first?: boolean
  className?: string
  children: React.ReactNode
}

export function LedgerRow({ index, tone, first, className, children }: LedgerRowProps) {
  const rule = tone === 'night' ? 'border-p-rule-night' : 'border-p-rule'
  return (
    <div
      className={`grid grid-cols-[1.75rem_1fr] sm:grid-cols-[2.25rem_1fr] gap-4 sm:gap-6 py-6${first ? '' : ` border-t ${rule}`}${className ? ` ${className}` : ''}`}
    >
      <span className="font-mono text-xs text-p-muted pt-1 tabular-nums">
        {String(index).padStart(2, '0')}
      </span>
      <div className="min-w-0">{children}</div>
    </div>
  )
}
