'use client'

import Link from 'next/link'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'
import { useFavorites } from '@/contexts/FavoritesContext'

export default function FavoriteGames() {
  const { favorites } = useFavorites()

  const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

  if (favorites.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
        <p className="text-gray-600 mb-4">
          Aún no has añadido ningún juego a tus favoritos.
        </p>
        <p className="text-gray-600">
          Explora nuestro catálogo y usa el botón "Añadir a favoritos" para empezar tu colección.
        </p>
      </div>
    )
  }
  console.log(favorites, 'favoritesGames')
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((game) => (
          <div key={game.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <Link href={`/game/${game.id}`}>
                <Image
                  src={game.coverUrl ? game.coverUrl: PLACEHOLDER_IMAGE}
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
              gameCover={game.coverUrl ? game.coverUrl.replace('t_thumb', 't_cover_big') : PLACEHOLDER_IMAGE}
            />
          </div>
        ))}
      </div>
    </div>
  )
}