'use server'

import { fetchGames, Game } from '@/lib/cache'

export async function searchGames(query: string): Promise<Game[]> {
  console.log('Searching for:', query)
  const allGames = await fetchGames()
  const results = allGames.filter(game => 
    game.name.toLowerCase().includes(query.toLowerCase())
  )
  console.log('Search results:', results.length)
  return results
}

export async function getInitialGames(): Promise<Game[]> {
  return await fetchGames()
}

