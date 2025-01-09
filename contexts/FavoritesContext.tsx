'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { FavoriteGame } from '@/lib/types'

interface FavoritesContextType {
  favorites: FavoriteGame[]
  addFavorite: (game: FavoriteGame) => void
  removeFavorite: (gameId: number) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteGame[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
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

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
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