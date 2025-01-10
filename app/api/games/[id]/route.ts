import { NextResponse } from 'next/server'
import { fetchGames } from '@/lib/cache'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const games = await fetchGames()
  const game = games.find(g => g.id.toString() === params.id)

  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  }

  return NextResponse.json(game)
}