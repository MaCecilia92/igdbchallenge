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
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': '2q31jvn4mam0d7p7p4jrxwfen2ti6f',
        'Authorization': `Bearer zvd03dk30clrziqkd4clzljih906bp`,
        'Accept': 'application/json',
      },
      body: 'fields name,summary,cover.url, genres; limit 100;',
      next: { revalidate: 20 }
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

