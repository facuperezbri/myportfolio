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
          background: '#F4F0E4',
          color: '#17233C',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontFamily: 'ui-monospace, monospace',
            color: '#4B5468',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            border: '1px solid #D6CDAF',
            padding: '4px 8px',
          }}
        >
          Comprobante rechazado
        </p>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: '16px',
          }}
        >
          Ocurrió un error inesperado.
        </h1>
        <button
          onClick={reset}
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '13px',
            color: '#17233C',
            background: 'transparent',
            border: '1px solid #17233C',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  )
}
