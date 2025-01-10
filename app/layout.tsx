import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Search from '@/components/Search'
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
            <div className="sticky top-0 bg-white z-30 shadow-md mb-8">
              <div className="container mx-auto px-4 py-4">
                <Search />
              </div>
            </div>
            <main>
              {children}
            </main>
          </SearchProvider>
        </FavoritesProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
