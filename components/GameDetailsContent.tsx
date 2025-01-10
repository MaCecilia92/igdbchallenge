import { Star, Calendar } from 'lucide-react'
import { Game } from '@/lib/cache'
import FavoriteGames from '@/components/FavoriteGames'

export function GameDetailsContent({ game }: { game: Game }) {
  const releaseDate = game.first_release_date
    ? new Date(game.first_release_date * 1000).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).split('/').join('/')
    : 'Fecha desconocida'

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-6 flex-grow">
        <div className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400" />
            <span className="font-semibold text-lg">
              {game.rating ? game.rating.toFixed(1) : 'N/A'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-blue-500" />
            <span className="font-medium">{releaseDate}</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Resumen del Juego</h2>
          <p className="text-gray-700">{game.summary || 'No hay resumen disponible.'}</p>
        </div>
      </div>
      <div className="mt-auto pt-8">
        <FavoriteGames />
      </div>
    </div>
  )
}