import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { SearchProvider } from './searchContext'
import { FavoritesProvider } from '@/contexts/FavoritesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IGDB Games',
  description: 'Explore and search for your favorite games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>
          <SearchProvider>
            <main>
              {children}
            </main>
          </SearchProvider>
        </FavoritesProvider>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
