import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs text-p-accent tracking-widest uppercase mb-6">
        404
      </p>
      <h1 className="font-mono text-2xl font-semibold text-p-text mb-4">
        Page not found
      </h1>
      <p className="font-mono text-xs text-p-muted mb-10">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-p-muted border border-p-border px-5 py-2.5 hover:border-p-accent hover:text-p-accent transition-colors"
      >
        <span aria-hidden="true">← </span>back home
      </Link>
    </div>
  )
}
