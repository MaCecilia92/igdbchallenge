'use client'

import { useState, useTransition, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { searchGames } from '@/app/actions'
import { Game } from '@/lib/cache'
import { useSearch } from '@/app/searchContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, SearchIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'

export default function Search() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Game[]>([])
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const searchRef = useRef<HTMLDivElement>(null)
  const { setSearchResults } = useSearch()

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    if (newQuery.length > 1) {
      startTransition(async () => {
        const results = await searchGames(newQuery)
        setSuggestions(results.slice(0, 5))
        setSearchResults(results)
      })
    } else {
      setSuggestions([])
      setSearchResults([])
    }
  }

  const handleSelectGame = (gameId: number) => {
    router.push(`/game/${gameId}`);
    setQuery('');
    setSuggestions([]);
    setSearchResults([]);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    setQuery('');
    setSuggestions([]);
    setSearchResults([]);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pathname, setSearchResults]);


  return (
    <div className="flex items-center space-x-4">
      {pathname === '/' ? (
        <Link href="/" aria-label="Go to home page">
          <Image
            src="https://i.postimg.cc/pLPRX1D7/1000-F-985118088-DW7-Ox-WI9-Vr1s-Nna2t-JPQn-GL91-EXTzw4-N.jpg"
            alt="IGDB Games Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Go back">
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      <div className="relative flex-grow" ref={searchRef}>
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar juegos..."
          className="w-full pl-10"
          aria-label="Buscar juegos"
          aria-autocomplete="list"
          aria-controls="search-results"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        {isPending && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
          </div>
        )}
        {suggestions.length > 0 && (
          <ul id="search-results" className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-80 overflow-auto">
            {suggestions.map(game => (
              <li 
                key={game.id} 
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleSelectGame(game.id)}
              >
                  <Image
                    src={game.cover ? `https:${game.cover.url.replace('t_thumb', 't_cover_big')}`: PLACEHOLDER_IMAGE}
                    alt={`${game.name} cover`}
                    width={35}
                    height={35}
                    className="rounded mr-2"
                  />
                <span>{game.name}</span>
              </li>
            ))}
            <li className="p-2 hover:bg-gray-100 cursor-pointer text-blue-600">
              <Link href={`/search?q=${encodeURIComponent(query)}`}>
                Ver todos los resultados
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}


