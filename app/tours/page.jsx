import TourCard from "@/components/tour-card"
import { tours } from "@/data/tours"

export default function ToursPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Explore our latest tours and treks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">Start planning your trip!</p>
        </div>
      </div>
    </main>
  )
}
