import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/lib/cache'
import FavoriteButton from './FavoriteButton'

//const PLACEHOLDER_IMAGE = '/i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'
const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'
export default function GameGrid({ games }: { games: Game[] }) {
  console.log(games, 'GameGrid.tsx')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <div key={game.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <Link href={`/game/${game.id}`}>
              <Image
              src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                alt={game.name}
                width={264}
                height={374}
                className="rounded-lg mb-2"
              />
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
          </Link>
          <FavoriteButton 
            gameId={game.id} 
            gameName={game.name}
            gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
          />
        </div>
      ))}
    </div>
  )
}