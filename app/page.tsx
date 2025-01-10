import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { getInitialGames } from './actions'

const GameGrid = dynamic(() => import('@/components/GameGrid'), { ssr: false })
const GameGridSkeleton = dynamic(() => import('@/components/GameGridSkeleton'), { ssr: false })
const WelcomeMessage = dynamic(() => import('@/components/WelcomeMessage'), { ssr: false })
const FavoriteGames = dynamic(() => import('@/components/FavoriteGames'), { ssr: false })

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <WelcomeMessage />
      <FavoriteGames />
      <div>
        <Suspense fallback={<GameGridSkeleton />}>
          <GameList />
        </Suspense>
      </div>
      
    </div>
  )
}

async function GameList() {
  const games = await getInitialGames()
  return <GameGrid games={games} />
}