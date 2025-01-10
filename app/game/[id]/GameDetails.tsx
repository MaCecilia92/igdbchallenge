import Image from 'next/image'
import { fetchGames } from '@/lib/cache'
import FavoriteButton from '@/components/FavoriteButton'
import { GameDetailsContent } from '@/components/GameDetailsContent'
import { notFound } from 'next/navigation'

const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

export default async function GameDetails({ id }: { id: string }) {
  const games = await fetchGames()
  const game = games.find(g => g.id.toString() === id)

  if (!game) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex md:h-full">
          <div className="md:w-1/3">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                  alt={game.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
              </div>
          </div>
          <div className="md:w-2/3 p-6 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
              <h1 className="text-3xl font-bold text-gray-900">{game.name}</h1>
              <div className="sm:ml-4">
                <FavoriteButton 
                  gameId={game.id} 
                  gameName={game.name}
                  gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                  gameReleaseDate={game.first_release_date}
                />
              </div>
            </div>
            <GameDetailsContent game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}