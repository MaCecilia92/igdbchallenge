import { Suspense } from 'react'
import SearchResults from './search-results'
import Loading from '@/components/Loading'

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResults />
    </Suspense>
  )
}