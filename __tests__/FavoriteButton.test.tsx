import { render, screen, fireEvent } from '@testing-library/react'
import FavoriteButton from '@/components/FavoriteButton'

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
}

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage })

describe('FavoriteButton component', () => {
  beforeEach(() => {
    mockLocalStorage.getItem.mockReturnValue('[]')
  })

  it('renders an "Add to Favorites" button initially', () => {
    render(<FavoriteButton gameId={1} gameName="Test Game" />)
    expect(screen.getByText('Add to Favorites')).toBeInTheDocument()
  })

  it('toggles favorite status when clicked', () => {
    render(<FavoriteButton gameId={1} gameName="Test Game" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByText('Remove from Favorites')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByText('Add to Favorites')).toBeInTheDocument()
  })
})

