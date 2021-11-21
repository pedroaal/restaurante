const Skeleton = () => (
  <div className="w-full rounded overflow-hidden shadow-lg">
    <div className="bg-gray-400 lg:h-48 md:h-36 h-24 w-full object-cover object-center"></div>
    <div className="px-6 py-4">
      <h2 className="bg-gray-400 animate-pulse h-4 w-100 mb-2"></h2>
      <h1 className="bg-gray-500 animate-pulse h-3 w-1/2"></h1>
    </div>
  </div>
)

export default Skeleton