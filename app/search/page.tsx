'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchGames } from '@/app/actions'
import GameGrid from '@/components/GameGrid'
import { Game } from '@/lib/cache'
import Loading from '@/components/Loading'

function SearchResults() {
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
    return <Loading />
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resultados de búsqueda para "{query}"</h1>
      {games.length > 0 ? (
        <GameGrid games={games} />
      ) : (
        <p>No se encontraron juegos para "{query}". Intenta con otra búsqueda.</p>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResults />
    </Suspense>
  )
}