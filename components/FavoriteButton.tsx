// 'use client'

// import { Button } from "@/components/ui/button"
// import { StarIcon } from 'lucide-react'
// import toast from 'react-hot-toast'
// import { FavoriteGame } from '@/lib/types'
// import { useFavorites } from '@/contexts/FavoritesContext'

// interface FavoriteButtonProps {
//   gameId: number
//   gameName: string
//   gameCover?: string
//   iconOnly?: boolean
// }

// export default function FavoriteButton({ gameId, gameName, gameCover, iconOnly = false }: FavoriteButtonProps) {
//   const { favorites, addFavorite, removeFavorite } = useFavorites()
//   const isFavorite = favorites.some(game => game.id === gameId)

//   const toggleFavorite = () => {
//     if (isFavorite) {
//       removeFavorite(gameId)
//       toast.success(`${gameName} ha sido eliminado de tus favoritos.`)
//     } else {
//       const newFavoriteGame: FavoriteGame = {
//         id: gameId,
//         name: gameName,
//         coverUrl: gameCover
//       }
//       addFavorite(newFavoriteGame)
//       toast.success(`${gameName} ha sido añadido a tus favoritos.`)
//     }
//   }

//   if (iconOnly) {
//     return (
//       <Button 
//         onClick={toggleFavorite} 
//         size="icon" 
//         variant="ghost" 
//         className={`h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-200 ${
//           isFavorite ? 'text-yellow-400 hover:text-yellow-500' : 'text-white hover:text-yellow-200'
//         }`}
//       >
//         <StarIcon className="h-5 w-5" strokeWidth={2.5} />
//       </Button>
//     )
//   }

//   return (
//     <Button 
//       onClick={toggleFavorite} 
//       variant={isFavorite ? "secondary" : "outline"} 
//       className="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4 h-auto"
//     >
//       <StarIcon className={`mr-2 h-4 w-4 sm:h-5 sm:w-5 ${isFavorite ? 'text-yellow-400' : ''}`} strokeWidth={2.5} />
//       {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
//     </Button>
//   )
// }

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
  iconOnly?: boolean
}

export default function FavoriteButton({ gameId, gameName, gameCover, iconOnly = false }: FavoriteButtonProps) {
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

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  if (iconOnly) {
    return (
      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Button 
          onClick={toggleFavorite} 
          size="icon" 
          variant="ghost" 
          className={`h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-200 ${
            isFavorite ? 'text-yellow-400 hover:text-yellow-500' : 'text-white hover:text-yellow-200'
          }`}
        >
          <StarIcon className="h-5 w-5" strokeWidth={2.5} />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
      <Button 
        onClick={toggleFavorite} 
        variant={isFavorite ? "secondary" : "outline"} 
        className="text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4 h-auto"
      >
        <StarIcon className={`mr-2 h-4 w-4 sm:h-5 sm:w-5 ${isFavorite ? 'text-yellow-400' : ''}`} strokeWidth={2.5} />
        {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      </Button>
    </motion.div>
  )
}