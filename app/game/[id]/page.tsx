import { Metadata } from 'next'
import Image from 'next/image'
import { fetchGames } from '@/lib/cache'
import FavoriteButton from '@/components/FavoriteButton'

type Props = {
  params: { id: string }
}

const PLACEHOLDER_IMAGE = '/i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const games = await fetchGames()
  const game = games.find(g => g.id.toString() === params.id)

  if (!game) {
    return {
      title: 'Game Not Found',
    }
  }

  return {
    title: game.name,
    description: game.summary,
    openGraph: {
      title: game.name,
      description: game.summary,
      images: [{ url: game.cover?.url.replace('t_thumb', 't_cover_big') || PLACEHOLDER_IMAGE }],
    },
  }
}

export default async function GamePage({ params }: Props) {
  const games = await fetchGames()
  const game = games.find(g => g.id.toString() === params.id)

  if (!game) {
    return <div className="container mx-auto px-4 py-8">Game not found</div>
  }

  const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
        <Image
        src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
          alt={game.name}
          width={264}
          height={374}
          className="rounded-lg mb-4"
        />
      <p className="mb-4">{game.summary}</p>
      <FavoriteButton 
        gameId={game.id} 
        gameName={game.name}
        gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
      />
    </div>
  )
}

