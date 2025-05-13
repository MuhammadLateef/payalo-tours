import Link from "next/link"
import TourCard from "@/components/tour-card"
import { tours } from "@/data/tours"

export default function TourComponents() {
  // Only show the first 3 tours on the home page
  const featuredTours = tours.slice(0, 4);

  return (
    <main className="py-6">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">Explore our latest tours and treks</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

     
      </section>
    </main>
  )
}
