export type Game = {
  id: number
  name: string
  summary?: string
  cover?: {
    url: string
  }
  rating?: number
  first_release_date?: number
}

export async function fetchGames(): Promise<Game[]> {
  try {
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        'Authorization': `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'text/plain',
      },
      body: 'fields name,summary,cover.url,rating,first_release_date; limit 50;',
      next: { revalidate: 20 }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      console.error('Unexpected data format:', data)
      return []
    }

    return data
  } catch (error) {
    console.error('Error fetching games:', error)
    throw new Error('Failed to fetch games. Please try again later.')
  }
}

