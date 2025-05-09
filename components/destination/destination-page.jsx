"use client"

import Link from "next/link"
import Image from "next/image"
import { getAllPlaces } from "@/lib/data"
import { motion } from "framer-motion"

export default function Destination() {
  const places = getAllPlaces()

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-[90%] mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full mb-4">Destination lists</div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Go Exotic Places</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-80 rounded-xl overflow-hidden group"
          >
            <Link href={`/destinations/${place.id}`}>
              <div className="absolute inset-0">
                <Image
                  src={place.coverImage || "/placeholder.svg"}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-green-400 mb-1">Travel to</p>
                <h2 className="text-2xl md:text-3xl font-bold">{place.name}</h2>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Promotional Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: places.length * 0.1 }}
          className="relative h-80 rounded-xl overflow-hidden bg-green-500 flex flex-col items-center justify-center p-6 text-white"
        >
          <div className="bg-orange-400 text-white px-3 py-1 rounded-full mb-4">UP TO 50% OFF</div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">Members are Saving up to 50%</h3>
          <Link
            href="/"
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Now
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
