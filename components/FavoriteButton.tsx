'use client'

import { Button } from "@/components/ui/button"
import { StarIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { FavoriteGame } from '@/lib/types'
import { useFavorites } from '@/contexts/FavoritesContext'

interface FavoriteButtonProps {
  gameId: number
  gameName: string
  gameCover?: string
}

export default function FavoriteButton({ gameId, gameName, gameCover }: FavoriteButtonProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = favorites.some(game => game.id === gameId)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(gameId)
      toast.success(`${gameName} ha sido eliminado de tus favoritos.`)
    } else {
      const newFavoriteGame: FavoriteGame = {
        id: gameId,
        name: gameName,
        coverUrl: gameCover
      }
      addFavorite(newFavoriteGame)
      toast.success(`${gameName} ha sido añadido a tus favoritos.`)
    }
  }

  return (
    <Button onClick={toggleFavorite} variant={isFavorite ? "secondary" : "outline"}>
      <StarIcon className={`mr-2 h-4 w-4 ${isFavorite ? 'text-yellow-400' : ''}`} />
      {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    </Button>
  )
}

