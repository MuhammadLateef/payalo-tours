"use client"

import { useState } from "react"
import { Play, Tent, Coffee, Car, Flag } from "lucide-react"

export default function TravelServices() {
  // Define colors as variables
  const primaryColor = "#63AB45"
  const accentColor = "#F9A826"
  
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState(null)

  // Service card data with improved descriptions
  const services = [
    {
      iconType: "tent",
      title: "Comfortable Accommodations",
      description: "Cozy tents, cabins and luxury lodges in stunning natural settings",
      id: 0,
    },
    {
      iconType: "coffee",
      title: "Meal & Refreshment Options",
      description: "Delicious local cuisine and refreshing beverages throughout your journey",
      id: 1,
    },
    {
      iconType: "car",
      title: "Pickup & Drop-off Service",
      description: "Convenient transportation from airports and hotels to all destinations",
      id: 2,
    },
    {
      iconType: "flag",
      title: "Tour Guide Assistance",
      description: "Experienced local guides sharing culture, history and hidden gems",
      id: 3,
    },
  ]

  // Helper function to render the appropriate icon
  const renderIcon = (iconType, isHovered) => {
    const iconColor = isHovered ? "white" : primaryColor
    const iconProps = {
      className: "w-12 h-12 transition-all duration-500",
      color: iconColor
    }
    
    switch (iconType) {
      case "tent": return <Tent {...iconProps} />
      case "coffee": return <Coffee {...iconProps} />
      case "car": return <Car {...iconProps} />
      case "flag": return <Flag {...iconProps} />
      default: return <Tent {...iconProps} />
    }
  }

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
        style={{
          backgroundImage: "url('/assets/images/home/service-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Subtle dark overlay */}
      <div className="absolute inset-0 z-1 bg-opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 container max-w-[90%] mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Column - Text and CTA */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Play Button with pulse effect */}
            <div className="flex items-center gap-4">
              <button className="relative rounded-full p-4 bg-opacity-90 transition-transform hover:scale-110 group" 
                style={{ backgroundColor: primaryColor }}>
                <Play className="w-8 h-8 text-white" fill="white" />
                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full border-2 border-white opacity-75 animate-ping"></span>
              </button>
              <div className="h-12 w-12 rotate-90 md:rotate-0">
                <svg viewBox="0 0 24 24" style={{ color: primaryColor }}>
                  <path
                    d="M7 10l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Heading Text */}
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: accentColor }}>
              Ready to Explore Gilgit Baltistan?
            </h3>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Plan your next adventure with us and experience the best of the North.
            </h1>

            {/* CTA Button with hover effect */}
            <button
              className="px-8 py-4 rounded-md text-white font-medium text-lg mt-8 transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ 
                backgroundColor: primaryColor,
                boxShadow: "0 4px 14px rgba(99, 171, 69, 0.5)",
              }}
            >
              Check Availability
            </button>
          </div>

          {/* Right Column - Service Cards with enhanced hover effects */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8 md:mt-0">
            {services.map((service) => {
              const isHovered = hoveredCard === service.id;
              
              return (
                <div
                  key={service.id}
                  className="relative border border-gray-200/20 h-64 rounded-lg overflow-hidden shadow-lg group"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Layer */}
                  <div className={`absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105  bg-black/40`}>
                    {/* Background Gradient that intensifies on hover */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500" 
                      style={{
                        background: `linear-gradient(to bottom, ${primaryColor}99, ${primaryColor})`,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />
                  </div>
                  
                  {/* Dark overlay that appears on hover */}
                  <div
                    className={`absolute inset-0 bg-black transition-all duration-300 ease-in-out transform`}
                    style={{
                      opacity: isHovered ? 0.3 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(100%)"
                    }}
                  />
                  
                  {/* Icon with transition effect */}
                  <div 
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out `}
                    style={{
                      transform: isHovered 
                        ? "translate(-50%, -100%) scale(1.3)" 
                        : "translate(-50%, -90%) scale(1)",
                    }}
                  >
                    {renderIcon(service.iconType, isHovered)}
                  </div>
                  
                  <div
                    className={`absolute w-full text-center px-10 transition-all duration-300 ease-in-out`}
                    style={{
                      bottom: isHovered ? "30%" : "30%",
                      transform: "translateY(50%)",
                    }}
                  >
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  
                  {/* Service Description - Only appears on hover */}
                  {/* <div
                    className={`absolute bottom-0 left-0 w-full px-4 pb-6 pt-2 text-center transition-all duration-300 ease-in-out transform`}
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(20px)"
                    }}
                  >
                    <p className="text-sm">{service.description}</p>
                  </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}