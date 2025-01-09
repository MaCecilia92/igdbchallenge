'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchGames } from '@/app/actions'
import GameGrid from '@/components/GameGrid'
import { Game } from '@/lib/cache'

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
    }
  }, [query])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {games.length > 0 ? (
        <GameGrid games={games} />
      ) : (
        <p>No games found for "{query}". Try a different search term.</p>
      )}
    </div>
  )
}