import type { Metadata } from 'next'
import { inter, playfair } from '@/lib/fonts'
import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Coche clásico para bodas - Citroën DS 23 Pallas con chófer | Madrid',
  description: 'Alquiler de Citroën DS 23 Pallas "Tiburón" clásico con chófer para bodas en Madrid y alrededores. Elegancia atemporal en tu día especial.',
  keywords: 'coche clásico boda, Citroën DS, alquiler coche boda Madrid, chófer boda, coche vintage',
  openGraph: {
    title: 'Coche clásico para bodas - Citroën DS 23 Pallas',
    description: 'Elegancia atemporal en tu día especial con nuestro Citroën DS 23 Pallas clásico.',
    type: 'website',
    locale: 'es_ES',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
