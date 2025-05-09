import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Destination Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The exotic place you're looking for seems to be off the map. Let's get you back to explored territory.
      </p>
      <Link
        href="/"
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}
