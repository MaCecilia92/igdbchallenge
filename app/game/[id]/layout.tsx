import { Metadata } from 'next'
import { fetchGames } from '@/lib/cache'

type Props = {
  params: { id: string }
  children: React.ReactNode
}

const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

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

export default function GameLayout({ children }: Props) {
  return <>{children}</>
}