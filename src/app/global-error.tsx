'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
          background: '#0A0A0F',
          color: '#F0F0F5',
          fontFamily: 'ui-monospace, monospace',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            color: '#EF4444',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Something went wrong
        </p>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: '16px',
          }}
        >
          An unexpected error occurred.
        </h1>
        <button
          onClick={reset}
          style={{
            fontFamily: 'inherit',
            fontSize: '13px',
            color: '#FF8C42',
            background: 'transparent',
            border: '1px solid #1E1E2E',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
