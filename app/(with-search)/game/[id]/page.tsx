import { Suspense } from 'react'
import GameDetails from './GameDetails'
import GameDetailsSkeleton from './GameDetailsSkeleton'

export default function GamePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<GameDetailsSkeleton />}>
      <GameDetails id={params.id} />
    </Suspense>
  )
}