export default function GameDetailsSkeleton() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex md:h-full">
            <div className="md:w-1/3">
              <div className="relative aspect-[3/4] w-full bg-gray-200 animate-pulse" />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col h-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
                <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="sm:ml-4 h-10 w-40 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-4 flex-grow">
                <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
              <div className="mt-8">
                <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse mb-4" />
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="aspect-[3/4] bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }