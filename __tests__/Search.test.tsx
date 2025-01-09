import { render, screen, fireEvent } from '@testing-library/react'
import Search from '@/components/Search'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('Search component', () => {
  it('renders a search input and button', () => {
    render(<Search />)
    expect(screen.getByPlaceholderText('Search games...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('updates the query state when typing', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Search games...')
    fireEvent.change(input, { target: { value: 'Mario' } })
    expect(input).toHaveValue('Mario')
  })
})

