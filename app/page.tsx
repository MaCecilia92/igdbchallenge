'use client'

import { useEffect, useState } from 'react'
import GameGrid from '@/components/GameGrid'
import { getInitialGames } from './actions'
import { Game } from '@/lib/cache'
import { useSearch } from './searchContext'
import Loading from '@/components/Loading'
import FavoriteGames from '@/components/FavoriteGames'

export default function Home() {
  const [initialGames, setInitialGames] = useState<Game[]>([])
  const [initialGamesLoaded, setInitialGamesLoaded] = useState(false)
  const { searchResults } = useSearch()

  useEffect(() => {
    if (!initialGamesLoaded) {
      getInitialGames().then((fetchedGames) => {
        setInitialGames(fetchedGames)
        setInitialGamesLoaded(true)
      })
    }
  }, [initialGamesLoaded])

  if (!initialGamesLoaded) {
    return <Loading />
  }

  const displayedGames = searchResults.length > 0 ? searchResults : initialGames

  return (
    <div>
      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h2>
          <GameGrid games={searchResults} />
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8">IGDB Games</h1>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Juegos Populares</h2>
            <GameGrid games={initialGames} />
          </div>
        </>
      )}
      <div className="mt-12">
        <FavoriteGames />
      </div>
    </div>
  )
}