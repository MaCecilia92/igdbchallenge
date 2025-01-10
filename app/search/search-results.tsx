'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchGames } from '@/app/actions'
import GameGrid from '@/components/GameGrid'
import { Game } from '@/lib/cache'
import Loading from '@/components/Loading'
import FavoriteGames from '@/components/FavoriteGames'
import { motion } from 'framer-motion'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [games, setGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true)
      const results = await searchGames(query)
      setGames(results)
      setIsLoading(false)
    }

    if (query) {
      fetchGames()
    } else {
      setGames([])
      setIsLoading(false)
    }
  }, [query])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-4">Resultados de búsqueda para "{query}"</h1>
        {games.length > 0 ? (
          <GameGrid games={games} />
        ) : (
          <p>No se encontraron juegos para "{query}". Intenta con otra búsqueda.</p>
        )}
        <div className="mt-12">
          <FavoriteGames />
        </div>
      </motion.div>
    </div>
  )
}