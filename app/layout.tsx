import './globals.css';
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CUBBIX',
  description: `CUBBIX provides web development services, 
  app development services, graphic design 
  services`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
