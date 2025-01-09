import Link from 'next/link'
import Image from 'next/image'
import { Game as GameType } from '@/lib/cache'

const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

export function Game({ game }: { game: GameType }) {
  console.log(game, 'Game.tsx')
  return (
    <Link href={`/game/${game.id}`} prefetch={false}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <Image
        src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
          alt={game.name}
          width={264}
          height={374}
          className="rounded-lg mb-2"
        />
        <h2 className="text-xl font-semibold">{game.name}</h2>
      </div>
    </Link>
  )
}