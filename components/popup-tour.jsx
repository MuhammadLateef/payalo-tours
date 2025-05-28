"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, Clock, Users, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"
import { fairyMeadows } from "@/app/index"

export const featuredPackage = {
  id: "wilderness-retreat",
  title: "Wilderness Retreat",
  description:
    "Immerse yourself in the great outdoors, with guided hikes, wildlife spotting, and camping under the stars in Pakistan's most breathtaking landscapes.",
  imageDescription: "A breathtaking mountain landscape with a lake and surrounding peaks",
  imageSrc: fairyMeadows,
  price: 1500,
  originalPrice: 1800,
  currency: "USD",
  days: 7,
  nights: 6,
  minPersons: 3,
  groupDiscount: "15% off for groups of 5+",
  highlights: ["Professional guide", "All camping gear", "Wildlife photography", "Mountain climbing"],
  rating: 4.9,
  reviews: 203,
}

export function TourPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [lastActivity, setLastActivity] = useState(Date.now())
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const resetActivity = useCallback(() => {
    setLastActivity(Date.now())
  }, [])

  useEffect(() => {
    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"]

    const resetTimer = () => resetActivity()

    events.forEach((event) => {
      document.addEventListener(event, resetTimer, true)
    })

    const interval = setInterval(() => {
      if (Date.now() - lastActivity > 30000 && !isOpen) {
        setIsOpen(true)
      }
    }, 1000)

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer, true)
      })
      clearInterval(interval)
    }
  }, [lastActivity, isOpen, resetActivity])

  const closePopup = () => {
    setIsOpen(false)
    setSelectedPackage(null)
  }

  const handleBookNow = (packageId) => {
    setSelectedPackage(packageId)
    setShowBookingForm(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 p-4">
      <div className="relative w-full max-w-md h-[80vh] flex flex-col animate-in slide-in-from-bottom-4 duration-500">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={closePopup}
          className="absolute -top-2 -right-2 z-10 h-8 w-8 rounded-full bg-white shadow-lg hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Main Card */}
        <Card className="overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 delay-200 h-full flex flex-col">
          {/* Special Offer Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-red-500 text-white animate-pulse">🔥 Limited Time</Badge>
          </div>

          {/* Image Section */}
          <div className="relative flex-shrink-0">
            <Image
              src={featuredPackage.imageSrc || "/placeholder.svg"}
              alt={featuredPackage.imageDescription}
              width={400}
              height={200}
              className="h-48 sm:h-56 md:h-64 w-full object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/70 px-2 sm:px-3 py-1 text-xs sm:text-sm text-white">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
              {featuredPackage.rating} ({featuredPackage.reviews})
            </div>

            {/* Price Overlay */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 animate-in slide-in-from-left duration-1000 delay-500">
              <div className="rounded-lg bg-white/95 backdrop-blur-sm p-2 sm:p-3 shadow-lg">
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">${featuredPackage.price}</span>
                  {featuredPackage.originalPrice && (
                    <span className="text-sm sm:text-lg text-gray-500 line-through">
                      ${featuredPackage.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-600">per person</p>
              </div>
            </div>
          </div>

          <CardContent className="p-4 sm:p-6 flex-1 overflow-y-auto">
            {/* Title and Description */}
            <div className="mb-3 sm:mb-4 animate-in slide-in-from-bottom duration-800 delay-300">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{featuredPackage.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground line-clamp-3">{featuredPackage.description}</p>
            </div>

            {/* Package Details */}
            <div className="mb-3 sm:mb-4 space-y-2 sm:space-y-3 animate-in slide-in-from-bottom duration-800 delay-400">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2 bg-blue-50 rounded-full px-2 sm:px-3 py-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  <span className="text-blue-800 font-medium">
                    {featuredPackage.days} days / {featuredPackage.nights} nights
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1 sm:gap-2 bg-purple-50 rounded-full px-2 sm:px-3 py-1">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                  <span className="text-purple-800 font-medium">Min. {featuredPackage.minPersons} persons</span>
                </div>
              </div>
              {featuredPackage.groupDiscount && (
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2 bg-green-50 rounded-full px-2 sm:px-3 py-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    <span className="text-green-800 font-medium">{featuredPackage.groupDiscount}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-800 delay-500">
              <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">What's Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                {featuredPackage.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3 animate-in slide-in-from-bottom duration-800 delay-600">
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base transform transition-all hover:scale-105"
                onClick={() => handleBookNow(featuredPackage.id)}
              >
                🎒 Book Your Adventure Now
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 hover:bg-blue-50 text-xs sm:text-sm py-2">
                  📞 Call Expert
                </Button>
                <Button variant="outline" className="flex-1 hover:bg-green-50 text-xs sm:text-sm py-2">
                  💬 Get Info
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t animate-in slide-in-from-bottom duration-800 delay-700">
              <div className="flex justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span>✅</span>
                  <span className="hidden sm:inline">Free cancellation</span>
                  <span className="sm:hidden">Free cancel</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>🛡️</span>
                  <span className="hidden sm:inline">Insured trips</span>
                  <span className="sm:hidden">Insured</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span className="hidden sm:inline">Top rated</span>
                  <span className="sm:hidden">Top rated</span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Booking Form */}
        <BookingForm
          isOpen={showBookingForm}
          onClose={() => setShowBookingForm(false)}
          packageDetails={{
            title: featuredPackage.title,
            price: featuredPackage.price,
            days: featuredPackage.days,
            nights: featuredPackage.nights,
            minPersons: featuredPackage.minPersons,
          }}
        />
      </div>
    </div>
  )
}
