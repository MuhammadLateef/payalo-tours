"use client"

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlaceById } from "@/lib/data";
import { ChevronLeft, MapPin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function PlaceDetailPage({ params }) {
    const place = getPlaceById(params.id)

    if (!place) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[70vh]">
                <Image src={place.coverImage || "/placeholder.svg"} alt={place.name} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute top-4 left-4 z-10">
                    <Link
                        href="/"
                        className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                        <ChevronLeft size={18} />
                        <span>Back</span>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full mb-4">Exotic Destination</div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{place.name}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">{place.shortDescription}</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="prose prose-lg max-w-none"
                        >
                            <h2 className="text-2xl my-2">About {place.name}</h2>
                            <p>{place.description}</p>

                            <h2 className="text-2xl my-2">Historical Background</h2>
                            <p>{place.history}</p>

                            <h2 className="text-2xl my-2"> Notable Attractions</h2>
                            <ul>
                                {place.attractions.map((attraction, index) => (
                                    <li key={index}>{attraction}</li>
                                ))}
                            </ul>
                            <h2 className="text-2xl my-2">Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {place.images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`${place.name} ${index + 1}`}
                                        width={300}
                                        height={200}
                                        className="rounded-lg object-cover w-full h-40"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-50 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-4">Location</h3>
                            <div className="flex items-start gap-3">
                                <MapPin className="text-green-500 mt-1" />
                                <p>{place.location}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gray-50 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-4">Best Time to Visit</h3>
                            <div className="flex items-start gap-3">
                                <Calendar className="text-green-500 mt-1" />
                                <p>{place.bestTimeToVisit}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gray-50 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-4">Ideal For</h3>
                            <div className="flex items-start gap-3">
                                <Users className="text-green-500 mt-1" />
                                <p>{place.idealFor}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-green-500 text-white p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
                            <p className="mb-4">Ready to explore this amazing destination? Contact us to plan your perfect trip.</p>
                            <Link
                                href="/contact"
                                className="block text-center bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Contact Now
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}
