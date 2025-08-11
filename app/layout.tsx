import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BRAI - Agencia de Automatización e IA para Empresas',
  description: 'BRAI, agencia de automatización líder en Colombia. Transformamos procesos empresariales con IA. +50 empresas han automatizado sus operaciones y ahorrado más del 70% de su tiempo.',
  keywords: ['brai agencia', 'agencia automatización', 'automatización colombia', 'brai automatización', 'IA', 'inteligencia artificial', 'procesos empresariales', 'desarrollo software'],
  authors: [{ name: 'brai' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.brai.dev',
    siteName: 'BRAI - Agencia de Automatización',
    title: 'BRAI - Agencia de Automatización e IA para Empresas',
    description: 'BRAI, agencia de automatización líder en Colombia. Transformamos procesos empresariales con IA. +50 empresas automatizadas.',
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
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "BRAI",
              "alternateName": "BRAI Agencia de Automatización",
              "url": "https://www.brai.dev",
              "logo": "https://www.brai.dev/logo.png",
              "description": "BRAI es una agencia de automatización líder en Colombia que transforma procesos empresariales con inteligencia artificial",
              "foundingDate": "2023",
              "founders": [{
                "@type": "Person",
                "name": "Jorge Mesa"
              }],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573182243673",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://linkedin.com/company/brai-dev",
                "https://github.com/brai-dev"
              ],
              "serviceType": [
                "Automatización de procesos",
                "Inteligencia artificial",
                "Desarrollo de software",
                "Consultoría tecnológica"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
