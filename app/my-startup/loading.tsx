export default function Loading() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-36 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-6"></div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="h-10 bg-gray-200 rounded animate-pulse mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="h-24 bg-gray-200 rounded animate-pulse mb-6"></div>

          <div className="flex justify-end">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
