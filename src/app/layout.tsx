import NavBar from '@/components/layout/navbar/NavBar'
import './globals.css'
import { Barlow } from 'next/font/google'

const inter = Barlow({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin'] })

export const metadata = {
  title: 'Just Juniors',
  description: 'Job posting website for juniors only',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBar/>{children}</body>
    </html>
  )
}
