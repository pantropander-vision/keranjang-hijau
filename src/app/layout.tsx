import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Keranjang Hijau — Marketplace F&B Indonesia',
  description: 'Semua yang bisnis F&B kamu butuhkan — dari supplier sampai jasa — dalam satu tempat terpercaya.',
  keywords: ['marketplace', 'F&B', 'supplier makanan', 'jasa kuliner', 'Indonesia', 'UMKM'],
  openGraph: {
    title: 'Keranjang Hijau',
    description: 'Marketplace B2B untuk bisnis F&B Indonesia',
    url: 'https://keranjanghijau.zoeclouds.com',
    siteName: 'Keranjang Hijau',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} font-sans antialiased bg-brand-cream`}>
        {children}
      </body>
    </html>
  )
}
