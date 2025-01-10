import { validateEnv } from './env';

export type Game = {
  id: number
  name: string
  summary?: string
  cover?: {
    url: string
  }
}

export async function fetchGames(): Promise<Game[]> {
  try {
    validateEnv();

    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        'Authorization': `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        'Accept': 'application/json',
      },
      body: 'fields name,summary,cover.url, genres; limit 200;',
      next: { revalidate: 10 }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching games:', error)
    return []
  }
}

