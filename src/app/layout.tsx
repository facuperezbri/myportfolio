import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Facu Pérez Brizuela - Fullstack Developer & UX/UI Designer',
  description: 'Portfolio terminal interactivo de Facu Pérez Brizuela, Fullstack Developer y UX/UI Designer basado en Mendoza, Argentina',
  keywords: ['Fullstack Developer', 'UX/UI Designer', 'React', 'Next.js', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
