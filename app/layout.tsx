import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'brai - Automatización y IA para Empresas',
  description: 'Transformamos procesos empresariales con IA. +50 empresas han automatizado sus operaciones y ahorrado más del 70% de su tiempo.',
  keywords: ['automatización', 'IA', 'inteligencia artificial', 'procesos empresariales', 'desarrollo software'],
  authors: [{ name: 'brai' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://brai.dev',
    siteName: 'brai',
    title: 'brai - Automatización y IA para Empresas',
    description: 'Transformamos procesos empresariales con IA. +50 empresas automatizadas.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
