'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Game } from '@/lib/cache'

interface SearchContextType {
  searchResults: Game[]
  setSearchResults: (results: Game[]) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Game[]>([])

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}