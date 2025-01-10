'use client'

import { useState, useEffect } from 'react'
import FavoriteGames from '@/components/FavoriteGames'
import GameGrid from '@/components/GameGrid'
import GameGridSkeleton from '@/components/GameGridSkeleton'
import { getInitialGames } from './actions'
import { Game } from '@/lib/cache'
import { motion } from 'framer-motion'

export default function Home() {
  const [initialGames, setInitialGames] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getInitialGames()
      setInitialGames(games)
      setIsLoading(false)
    }
    fetchGames()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="max-w-2xl mx-auto text-center mb-12 p-8 bg-white rounded-lg shadow-lg relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-200 to-blue-300 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">IGDB Games</h1>
          <p className="text-lg mb-8 text-gray-600">
            Busca tus juegos favoritos usando la barra de búsqueda arriba.
          </p>
        </div>
      </motion.div>
      
      {isLoading ? <GameGridSkeleton /> : <GameGrid games={initialGames} />}
      
      <div className="mt-12">
        <FavoriteGames />
      </div>
    </div>
  )
}