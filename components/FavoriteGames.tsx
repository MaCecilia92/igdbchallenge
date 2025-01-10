// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import FavoriteButton from './FavoriteButton'
// import { useFavorites } from '@/contexts/FavoritesContext'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"

// type SortOption = 'last_added' | 'newest' | 'oldest'

// const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function FavoriteGames() {
//   const { favorites, sortFavorites } = useFavorites()
//   const [sortOption, setSortOption] = useState<SortOption>('last_added')

//   const handleSort = (option: SortOption) => {
//     setSortOption(option)
//     sortFavorites(option)
//   }

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center mt-8 shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Tus Juegos Favoritos</h2>
//         <p className="text-gray-700 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-700">
//           Explora nuestro catálogo y usa el botón de favoritos para empezar tu colección.
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-6 shadow-lg">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Tus Juegos Favoritos
//         </h2>
//         <div className="flex flex-wrap gap-2">
//           <Button
//             variant={sortOption === "last_added" ? "default" : "outline"}
//             onClick={() => handleSort("last_added")}
//             size="sm"
//           >
//             Último agregado
//           </Button>
//           <Button
//             variant={sortOption === "newest" ? "default" : "outline"}
//             onClick={() => handleSort("newest")}
//             size="sm"
//           >
//             Más nuevo
//           </Button>
//           <Button
//             variant={sortOption === "oldest" ? "default" : "outline"}
//             onClick={() => handleSort("oldest")}
//             size="sm"
//           >
//             Más antiguo
//           </Button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {favorites.map((game) => (
//           <motion.div
//             key={game.id}
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
//                   <Image
//                     src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
//                     alt={game.name}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-110"
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <h3 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                   {game.name}
//                 </h3>
//               </div>
//             </Link>
//             <div className="absolute top-1 right-1">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameReleaseDate={game.first_release_date}
//                 gameCover={
//                   game.coverUrl
//                     ? game.coverUrl.replace("t_thumb", "t_cover_big")
//                     : PLACEHOLDER_IMAGE
//                 }
//                 iconOnly
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import FavoriteButton from './FavoriteButton'
// import { useFavorites } from '@/contexts/FavoritesContext'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"

// type SortOption = 'last_added' | 'newest' | 'oldest'

// const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function FavoriteGames() {
//   const { favorites, sortFavorites } = useFavorites()
//   const [sortOption, setSortOption] = useState<SortOption>('last_added')

//   const handleSort = (option: SortOption) => {
//     setSortOption(option)
//     sortFavorites(option)
//   }

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center mt-8 shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Tus Juegos Favoritos</h2>
//         <p className="text-gray-700 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-700">
//           Explora nuestro catálogo y usa el botón de favoritos para empezar tu colección.
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-6 shadow-lg">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Tus Juegos Favoritos
//         </h2>
//         <div className="flex flex-wrap gap-2">
//           <Button
//             variant={sortOption === "last_added" ? "default" : "outline"}
//             onClick={() => handleSort("last_added")}
//             size="sm"
//           >
//             Último agregado
//           </Button>
//           <Button
//             variant={sortOption === "newest" ? "default" : "outline"}
//             onClick={() => handleSort("newest")}
//             size="sm"
//           >
//             Más nuevo
//           </Button>
//           <Button
//             variant={sortOption === "oldest" ? "default" : "outline"}
//             onClick={() => handleSort("oldest")}
//             size="sm"
//           >
//             Más antiguo
//           </Button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {favorites.map((game) => (
//           <motion.div
//             key={game.id}
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
//                   <Image
//                     src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
//                     alt={game.name}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-110"
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-sm font-medium truncate">{game.name}</h3>
//                   <p className="text-xs mt-1">
//                     Lanzamiento:{" "}
//                     {game.first_release_date
//                       ? new Date(
//                           game.first_release_date * 1000
//                         ).toLocaleDateString()
//                       : "Desconocido"}
//                   </p>
//                   <p className="text-xs">
//                     Agregado: {new Date(game.addedAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//             <div className="absolute top-1 right-1">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameReleaseDate={game.first_release_date}
//                 gameCover={
//                   game.coverUrl
//                     ? game.coverUrl.replace("t_thumb", "t_cover_big")
//                     : PLACEHOLDER_IMAGE
//                 }
//                 iconOnly
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import FavoriteButton from './FavoriteButton'
// import { useFavorites } from '@/contexts/FavoritesContext'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"

// type SortOption = 'last_added' | 'newest' | 'oldest'

// const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function FavoriteGames() {
//   const { favorites, sortFavorites } = useFavorites()
//   const [sortOption, setSortOption] = useState<SortOption>('last_added')

//   const handleSort = (option: SortOption) => {
//     setSortOption(option)
//     sortFavorites(option)
//   }

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center mt-8 shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Tus Juegos Favoritos</h2>
//         <p className="text-gray-700 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-700">
//           Explora nuestro catálogo y usa el botón de favoritos para empezar tu colección.
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-6 shadow-lg">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Tus Juegos Favoritos
//         </h2>
//         <div className="flex flex-wrap gap-2">
//           <Button
//             variant={sortOption === "last_added" ? "default" : "outline"}
//             onClick={() => handleSort("last_added")}
//             size="sm"
//           >
//             Último agregado
//           </Button>
//           <Button
//             variant={sortOption === "newest" ? "default" : "outline"}
//             onClick={() => handleSort("newest")}
//             size="sm"
//           >
//             Más nuevo
//           </Button>
//           <Button
//             variant={sortOption === "oldest" ? "default" : "outline"}
//             onClick={() => handleSort("oldest")}
//             size="sm"
//           >
//             Más antiguo
//           </Button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {favorites.map((game) => (
//           <motion.div
//             key={game.id}
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
//                   <Image
//                     src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
//                     alt={game.name}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-110"
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-sm font-medium truncate">{game.name}</h3>
//                   <p className="text-xs mt-1">
//                     Lanzamiento:{" "}
//                     {game.first_release_date
//                       ? new Date(
//                           game.first_release_date * 1000
//                         ).toLocaleDateString()
//                       : "Desconocido"}
//                   </p>
//                   <p className="text-xs">
//                     Agregado: {new Date(game.addedAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             </Link>
//             <div className="absolute top-1 right-1">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameReleaseDate={game.first_release_date}
//                 gameCover={
//                   game.coverUrl
//                     ? game.coverUrl.replace("t_thumb", "t_cover_big")
//                     : PLACEHOLDER_IMAGE
//                 }
//                 iconOnly
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'
import { useFavorites } from '@/contexts/FavoritesContext'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

type SortOption = 'last_added' | 'newest' | 'oldest'

const PLACEHOLDER_IMAGE = "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

export default function FavoriteGames() {
  const { favorites, sortFavorites } = useFavorites()
  const [sortOption, setSortOption] = useState<SortOption>('last_added')

  const handleSort = (option: SortOption) => {
    setSortOption(option)
    sortFavorites(option)
  }

  if (favorites.length === 0) {
    return (
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center mt-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tus Juegos Favoritos</h2>
        <p className="text-gray-700 mb-4">
          Aún no has añadido ningún juego a tus favoritos.
        </p>
        <p className="text-gray-700">
          Explora nuestro catálogo y usa el botón de favoritos para empezar tu colección.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-800">
          Tus Juegos Favoritos
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={sortOption === "last_added" ? "default" : "outline"}
            onClick={() => handleSort("last_added")}
            size="sm"
          >
            Último agregado
          </Button>
          <Button
            variant={sortOption === "newest" ? "default" : "outline"}
            onClick={() => handleSort("newest")}
            size="sm"
          >
            Más nuevo
          </Button>
          <Button
            variant={sortOption === "oldest" ? "default" : "outline"}
            onClick={() => handleSort("oldest")}
            size="sm"
          >
            Más antiguo
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map((game) => (
          <motion.div
            key={game.id}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/game/${game.id}`}>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={
                    game.coverUrl
                      ? game.coverUrl.replace("t_thumb", "t_cover_big")
                      : PLACEHOLDER_IMAGE
                  }
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-medium truncate">{game.name}</h3>
                </div>
              </div>
            </Link>
            <div className="absolute top-1 right-1">
              <FavoriteButton
                gameId={game.id}
                gameName={game.name}
                gameCover={
                  game.coverUrl
                    ? game.coverUrl.replace("t_thumb", "t_cover_big")
                    : PLACEHOLDER_IMAGE
                }
                gameReleaseDate={game.first_release_date}
                iconOnly
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}