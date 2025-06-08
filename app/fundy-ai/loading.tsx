export default function FundyAILoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          {/* Header skeleton */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg" />
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-32" />
                <div className="h-4 bg-gray-200 rounded w-48" />
              </div>
            </div>
          </div>

          {/* Tabs skeleton */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex space-x-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-24" />
              ))}
            </div>

            {/* Content skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-32 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
