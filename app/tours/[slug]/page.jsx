"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Play, MapPin, Star, Calendar, Check, X, ChevronDown, ChevronUp, FileText } from "lucide-react"
import { tours } from "@/data/tours"
import SocialLinks from "@/components/social-links"
import TourDetails from "@/components/TourDetails"

export default function TourDetailPage({ params }) {
  const tour = tours.find((tour) => tour.slug === params.slug)
  
  if (!tour) {
    notFound()
  }

  // Ensure tour has all the necessary properties with defaults
  const tourData = {
    ...tour,
    highlights: tour.highlights || [],
    itinerary: tour.itinerary || [],
    servicesIncluded: tour.servicesIncluded || [],
    servicesExcluded: tour.servicesExcluded || [],
    faqs: tour.faqs || [],
    videos: tour.videos || [],
    featuredImage: tour.featureImg || "/placeholder.svg",
    coverImage: tour.coverImage || "/placeholder.svg",
    shortDescription: tour.shortDescription || "",
    description: tour.description || "",
    additionalDescription: tour.additionalDescription || "",
    day: tour.day || "16 Days",
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full my-28 ">
        <Image src={tourData.coverImage} alt={tourData.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">{tourData.title}</h1>
            <p className="text-white text-lg max-w-3xl">{tourData.shortDescription}</p>
          </div>
        </div>
        
        {/* Video Gallery */}
        {tourData.videos.length > 0 && (
          <section className="py-12 absolute -bottom-44 bg-white w-[70%] mx-auto left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-6">
                {tourData.videos.map((video, index) => (
                  <div key={index} className="relative w-72 h-48 overflow-hidden cursor-pointer group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`${tourData.title} video ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      
      {/* Main Content */}
      <section className="pt-20 pb-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 px-0 lg:grid-cols-6 md:h-[50vh] h-auto">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 text-white flex flex-col justify-around p-6 md:h-[60vh] h-auto text-center py-8">
                <div className="text-orange-500 uppercase text-base font-bold my-3">{tourData.day}</div>
                <h2 className="text-4xl lg:text-5xl my-3 font-medium w-[85%] mx-auto leading-16 ">{tourData.title}</h2>
                <div className="text-white my-3 text-sm font-medium mb-2 ">Tour</div>
                <Link
                  href="#"
                  className="md:w-[40%] lg:w-[30%] w-auto my-4 mx-auto block text-center bg-emerald-500 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform text-white font-semibold py-3 px-4 uppercase"
                >
                  Book Now
                </Link>
                <div className="my-3 flex justify-center gap-4">
                  <SocialLinks />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              {/* Replace with a proper imported image */}
              <Image 
                width={800} 
                height={600} 
                src={tourData.featuredImage || "/placeholder.svg"} 
                className="object-cover h-[60vh] w-full" 
                alt={tourData.title} 
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto md:mt-36 my-6">
          <div className="grid grid-cols-1 px-0 lg:grid-cols-6 h-auto">
            <div className="lg:col-span-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209409.77386096024!2d75.39745195474264!3d35.32897875527903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46392bac10283%3A0xc2f7a786f9833d7!2sSkardu!5e1!3m2!1sen!2s!4v1747156274096!5m2!1sen!2s" 
                width="400" 
                height="450" 
                className="mx-auto w-full" 
                style={{ border: '0' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-4 md:w-auto w-[80%] mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <div className="prose max-w-none">
                  <p>{tourData.description}</p>
                  <p className="mt-4">{tourData.additionalDescription}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tour Details Component */}
          <div className="mt-16">
            <TourDetails tour={tourData} />
          </div>
        </div>
      </section>
    </main>
  )
}