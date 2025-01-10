'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { FavoriteGame } from '@/lib/types'

type SortOption = 'last_added' | 'newest' | 'oldest'

interface FavoritesContextType {
  favorites: FavoriteGame[]
  addFavorite: (game: FavoriteGame) => void
  removeFavorite: (gameId: number) => void
  sortFavorites: (option: SortOption) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteGame[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites)
        setFavorites(parsedFavorites)
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error)
        setFavorites([])
      }
    }
  }, [])

  const addFavorite = (game: FavoriteGame) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, game]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const removeFavorite = (gameId: number) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((game) => game.id !== gameId)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const sortFavorites = (option: SortOption) => {
    setFavorites((prevFavorites) => {
      const sortedFavorites = [...prevFavorites].sort((a, b) => {
        if (option === 'last_added') {
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        } else if (option === 'newest' || option === 'oldest') {
          const dateA = a.first_release_date ? new Date(a.first_release_date * 1000) : new Date(0)
          const dateB = b.first_release_date ? new Date(b.first_release_date * 1000) : new Date(0)
          return option === 'newest' 
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime()
        }
        return 0
      })
      return sortedFavorites
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, sortFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}