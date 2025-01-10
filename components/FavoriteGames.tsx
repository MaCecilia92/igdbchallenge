// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import FavoriteButton from './FavoriteButton'
// import { useFavorites } from '@/contexts/FavoritesContext'

// const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

// export default function FavoriteGames() {
//   const { favorites } = useFavorites()

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gray-100 rounded-lg p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
//         <p className="text-gray-600 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-600">
//           Explora nuestro catálogo y usa el botón "Añadir a favoritos" para empezar tu colección.
//         </p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
//       <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 lg:gap-4">
//         {favorites.map((game) => (
//           <div key={game.id} className="relative group">
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
//                   <Image
//                   src={game.coverUrl ? game.coverUrl: PLACEHOLDER_IMAGE}
//                     alt={game.name}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-110"
//                     sizes="(max-width: 768px) 33vw, (max-width: 1024px) 16.66vw, 12.5vw"
//                   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <h2 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                   {game.name}
//                 </h2>
//               </div>
//             </Link>
//             <div className="absolute top-2 right-2">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameCover={game.coverUrl ? game.coverUrl.replace('t_thumb', 't_cover_big') : PLACEHOLDER_IMAGE}
//                 iconOnly
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import FavoriteButton from "./FavoriteButton";
// import { useFavorites } from "@/contexts/FavoritesContext";

// const PLACEHOLDER_IMAGE =
//   "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function FavoriteGames() {
//   const { favorites } = useFavorites();

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gray-100 rounded-lg p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
//         <p className="text-gray-600 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-600">
//           Explora nuestro catálogo y usa el botón "Añadir a favoritos" para
//           empezar tu colección.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {favorites.map((game) => (
//           <div key={game.id} className="relative group">
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
//                 <Image
//                   src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
//                   alt={game.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <h3 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                   {game.name}
//                 </h3>
//               </div>
//             </Link>
//             <div className="absolute top-2 right-2">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameCover={
//                   game.coverUrl
//                     ? game.coverUrl.replace("t_thumb", "t_cover_big")
//                     : PLACEHOLDER_IMAGE
//                 }
//                 iconOnly
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import FavoriteButton from "./FavoriteButton";
// import { useFavorites } from "@/contexts/FavoritesContext";

// const PLACEHOLDER_IMAGE =
//   "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function FavoriteGames() {
//   const { favorites } = useFavorites();

//   if (favorites.length === 0) {
//     return (
//       <div className="bg-gray-100 rounded-lg p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
//         <p className="text-gray-600 mb-4">
//           Aún no has añadido ningún juego a tus favoritos.
//         </p>
//         <p className="text-gray-600">
//           Explora nuestro catálogo y usa el botón "Añadir a favoritos" para
//           empezar tu colección.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-lg p-6 shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">
//         Tus Juegos Favoritos
//       </h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {favorites.map((game) => (
//           <div
//             key={game.id}
//             className="relative group bg-white rounded-lg shadow-md overflow-hidden"
//           >
//             <Link href={`/game/${game.id}`}>
//               <div className="aspect-[3/4] relative">
//                 <Image
//                   src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
//                   alt={game.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <h3 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                   {game.name}
//                 </h3>
//               </div>
//             </Link>
//             <div className="absolute top-2 right-2">
//               <FavoriteButton
//                 gameId={game.id}
//                 gameName={game.name}
//                 gameCover={
//                   game.coverUrl
//                     ? game.coverUrl.replace("t_thumb", "t_cover_big")
//                     : PLACEHOLDER_IMAGE
//                 }
//                 iconOnly
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "@/contexts/FavoritesContext";

const PLACEHOLDER_IMAGE =
  "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

export default function FavoriteGames() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Tus Juegos Favoritos</h2>
        <p className="text-gray-600 mb-4">
          Aún no has añadido ningún juego a tus favoritos.
        </p>
        <p className="text-gray-600">
          Explora nuestro catálogo y usa el botón "Añadir a favoritos" para
          empezar tu colección.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Juegos Favoritos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map((game) => (
          <div
            key={game.id}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/game/${game.id}`}>
              <div className="aspect-[3/4] relative">
                <Image
                  src={game.coverUrl ? game.coverUrl : PLACEHOLDER_IMAGE}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                  {game.name}
                </h3>
              </div>
            </Link>
            <div className="absolute top-1 right-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <FavoriteButton
                gameId={game.id}
                gameName={game.name}
                gameCover={
                  game.coverUrl
                    ? game.coverUrl.replace("t_thumb", "t_cover_big")
                    : PLACEHOLDER_IMAGE
                }
                iconOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
