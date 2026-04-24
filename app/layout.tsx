import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Next Solar SARL',
  description: 'Solar Energy Solutions - Lebanon',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/next-logo%20%20%281%29%201-2YbaCw1Z3m6258RNTQ0UglwhiRlPHj.jpg',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/next-logo%20%20%281%29%201-2YbaCw1Z3m6258RNTQ0UglwhiRlPHj.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
