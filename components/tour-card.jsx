import Image from "next/image"
import Link from "next/link"

export default function TourCard({ tour }) {
  return (
    <div className="group relative overflow-hidden shadow-lg h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover transform group-hover:scale-105 transition-all duration-300 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end text-center p-6 text-white">
        <h2 className="text-lg tracking-widest md:text-xl font-bold mb-2 transform translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">{tour.title}</h2>
        <p className="text-sm mb-8 transform translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">{tour.duration}</p>

        {/* Button with animation */}
        <Link
          href={`/tours/${tour.slug}`}
          className="bg-emerald-600 lg:w-[60%] w-auto mx-auto text-sm font-semibold uppercase text-white py-2 px-4 hover:bg-[#F9A826] transition-all rounded-md text-center transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 ease-in-out"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
