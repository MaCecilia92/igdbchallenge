'use client'

import { Button } from "@/components/ui/button"
import { StarIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { FavoriteGame } from '@/lib/types'
import { useFavorites } from '@/contexts/FavoritesContext'
import { motion } from 'framer-motion'

interface FavoriteButtonProps {
  gameId: number
  gameName: string
  gameCover?: string
  gameReleaseDate?: number
  iconOnly?: boolean
}

export default function FavoriteButton({ gameId, gameName, gameCover, gameReleaseDate }: FavoriteButtonProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = favorites.some(game => game.id === gameId)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(gameId)
      toast.success(`${gameName || 'El juego'} ha sido eliminado de tus favoritos.`)
    } else {
      const newFavoriteGame: FavoriteGame = {
        id: gameId,
        name: gameName || 'Unknown game',
        coverUrl: gameCover,
        first_release_date: gameReleaseDate,
        addedAt: new Date().toISOString()
      }
      addFavorite(newFavoriteGame)
      toast.success(`${gameName || 'El juego'} ha sido añadido a tus favoritos.`)
    }
  }

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  return (
    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="inline-block">
      <Button 
        onClick={toggleFavorite} 
        variant={isFavorite ? "secondary" : "outline"} 
        className={`w-10 h-10 p-0 rounded-full shadow-md ${isFavorite ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-white hover:bg-gray-100'}`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <StarIcon className={`h-6 w-6 ${isFavorite ? 'text-white' : 'text-gray-600'}`} strokeWidth={2} />
      </Button>
    </motion.div>
  )
}