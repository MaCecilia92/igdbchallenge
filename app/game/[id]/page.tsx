'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Game } from '@/lib/cache'
import FavoriteButton from '@/components/FavoriteButton'
import FavoriteGames from '@/components/FavoriteGames'
import { motion } from 'framer-motion'

const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

function GameDetailsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 lg:w-1/3">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg"></div>
        </div>
        <div className="md:w-3/5 lg:w-2/3">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GamePage({ params }: { params: { id: string } }) {
  const [game, setGame] = useState<Game | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch(`/api/games/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch game')
        }
        const data = await response.json()
        setGame(data)
      } catch (error) {
        console.error('Error fetching game:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGame()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <GameDetailsSkeleton />
      </div>
    )
  }

  if (!game) {
    return <div className="container mx-auto px-4 py-8">Game not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-2/5 lg:w-1/3">
            <motion.div 
              className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                alt={game.name}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
              />
            </motion.div>
        </div>
        <div className="md:w-3/5 lg:w-2/3">
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{game.name}</h1>
            <FavoriteButton 
              gameId={game.id} 
              gameName={game.name}
              gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
            />
          </motion.div>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Resumen del Juego</h2>
            <p className="text-base sm:text-lg leading-relaxed">{game.summary}</p>
          </motion.div>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <FavoriteGames />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}