'use client'

import { useState, useTransition, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { searchGames } from '@/app/actions'
import { Game } from '@/lib/cache'
import { useSearch } from '@/app/searchContext'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Search() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Game[]>([])
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  //const showBackButton = pathname !== '/' && !pathname.startsWith('/search')
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

  const handleSelectGame = (gameId: number, gameName: string) => {
    router.push(`/game/${gameId}`)
    setQuery('')
    setSuggestions([])
    setSearchResults([])
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
const PLACEHOLDER_IMAGE = 'https://i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'
  //const PLACEHOLDER_IMAGE = '/i.postimg.cc/QdMFWYLw/stock-vector-retro-pixel-game-console-with-placeholder-text-on-screen-2546836525.jpg'
  console.log(suggestions, 'suggestions')
  return (
    <div className="flex items-center space-x-4">
      {pathname !== '/' ? (
        <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Go back">
          <ChevronLeft className="h-6 w-6" />
        </Button>
      ) : (
        <Link href="/" aria-label="Go to home page">
          <Image
            src="/logo.png"
            alt="IGDB Games Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      )}
      <div className="relative flex-grow" ref={searchRef}>
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search games..."
          className="w-full"
          aria-label="Search games"
          aria-autocomplete="list"
          aria-controls="search-results"
        />
        {isPending && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
          </div>
        )}
        {suggestions.length > 0 && (
          <ul id="search-results" className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
            {suggestions.map(game => (
              <li 
                key={game.id} 
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleSelectGame(game.id, game.name)}
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
          </ul>
        )}
      </div>
    </div>
  )
}
