import { Game } from '@/components/Game'
import { Game as GameType } from '@/lib/cache'

export default function GameList({ games }: { games: GameType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  )
}

