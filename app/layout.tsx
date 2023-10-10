import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import NavBar from './components/navBar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Law help Africa',
  description: 'Gives information on law help Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth overflow-x-hidden'>

      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
