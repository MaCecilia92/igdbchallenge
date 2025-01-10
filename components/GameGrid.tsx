// import Link from 'next/link'
// import Image from 'next/image'
// import { Game } from '@/lib/cache'
// import FavoriteButton from './FavoriteButton'

// const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

// export default function GameGrid({ games }: { games: Game[] }) {
//   return (
//     <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3 lg:gap-4">
//       {games.map((game) => (
//         <div key={game.id} className="relative group">
//           <Link href={`/game/${game.id}`}>
//             <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
//                 <Image
//                 src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
//                   alt={game.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   sizes="(max-width: 768px) 33vw, (max-width: 1024px) 16.66vw, 12.5vw"
//                 />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <h2 className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                 {game.name}
//               </h2>
//             </div>
//           </Link>
//           <div className="absolute top-2 right-2">
//             <FavoriteButton 
//               gameId={game.id} 
//               gameName={game.name}
//               gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
//               iconOnly
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// import Link from 'next/link'
// import Image from 'next/image'
// import { Game } from '@/lib/cache'
// import FavoriteButton from './FavoriteButton'

// const PLACEHOLDER_IMAGE =
//   "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

// export default function GameGrid({ games }: { games: Game[] }) {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
//       {games.map((game) => (
//         <div key={game.id} className="relative group">
//           <Link href={`/game/${game.id}`}>
//             <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
//                 <Image
//                   src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
//                   alt={game.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                   sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
//                 />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <h2 className="absolute bottom-2 left-2 right-2 text-xs sm:text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
//                 {game.name}
//               </h2>
//             </div>
//           </Link>
//           <div className="absolute top-1 right-1">
//             <FavoriteButton 
//               gameId={game.id} 
//               gameName={game.name}
//               gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
//               iconOnly
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/lib/cache'
import FavoriteButton from './FavoriteButton'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const PLACEHOLDER_IMAGE =
  "https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg";

export default function GameGrid({ games }: { games: Game[] }) {
  return (
    <motion.div 
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {games.map((game) => (
        <motion.div key={game.id} className="relative group" variants={itemVariants}>
          <Link href={`/game/${game.id}`}>
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="absolute bottom-2 left-2 right-2 text-xs sm:text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {game.name}
              </h2>
            </div>
          </Link>
          <div className="absolute top-1 right-1">
            <FavoriteButton 
              gameId={game.id} 
              gameName={game.name}
              gameCover={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
              iconOnly
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}