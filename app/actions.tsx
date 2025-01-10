'use server'

import { fetchGames, Game } from '@/lib/cache'

export async function searchGames(query: string): Promise<Game[]> {
  try {
    const allGames = await fetchGames()
    const results = allGames.filter(game => 
      game.name.toLowerCase().includes(query.toLowerCase())
    )
    return results
  } catch (error) {
    console.error('Error searching games:', error)
    throw new Error('Failed to search games. Please try again later.')
  }
}

export async function getInitialGames(): Promise<Game[]> {
  try {
    return await fetchGames()
  } catch (error) {
    console.error('Error getting initial games:', error)
    throw new Error('Failed to get initial games. Please try again later.')
  }
}
