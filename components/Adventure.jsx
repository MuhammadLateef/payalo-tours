"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GiVillage } from "react-icons/gi"
import { FaPersonHiking } from "react-icons/fa6"
import { GiWaterSplash } from "react-icons/gi"
import { GiCampfire } from "react-icons/gi"

export default function Adventure() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovering, setHovering] = useState(false)
  const carouselRef = useRef(null)
  const [screenSize, setScreenSize] = useState({
    width: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setScreenSize({
        width,
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
      })
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (hovering) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [hovering, currentIndex])

  const activities = [
    {
      title: "Campfire activity",
      description: "Unwind with warm campfires, local music, and storytelling under the open mountain skies.",
      image: "/assets/images/mazahir_pics/tour1.jpg",
      iconBg: "bg-green-500",
      icon: <GiCampfire className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      color: "#4CAF50",
    },
    {
      title: "Cultural Village Tours",
      description: "Step into the heart of local life, meet friendly communities, and experience timeless traditions.",
      image: "/assets/images/mazahir_pics/tour2.jpg",
      iconBg: "bg-[#f8841f]",
      icon: <GiVillage className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      color: "#F8841F",
    },
    {
      title: "Mountain hiking",
      description: "Challenge yourself with breathtaking hikes through the world's most majestic peaks.",
      image: "/assets/images/mazahir_pics/tour3.jpg",
      iconBg: "bg-[#f8841f]",
      icon: <FaPersonHiking className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      color: "#F8841F",
    },
    {
      title: "Water Sports",
      description: "Enjoy thrilling boating, jet skiing, and water adventures on pristine mountain lakes.",
      image: "/assets/images/mazahir_pics/tour4.jpg",
      iconBg: "bg-[#f8841f]",
      icon: <GiWaterSplash className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      color: "#F8841F",
    },
  ]

  // Determine visible cards based on screen size
  const getVisibleCards = () => {
    if (screenSize.isMobile) return 1
    if (screenSize.isTablet) return 2
    return 4
  }

  const visibleCards = getVisibleCards()
  const totalSlides = Math.max(1, activities.length - visibleCards + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Calculate card width based on visible cards
  const getCardWidth = () => {
    if (visibleCards === 1) return "calc(100% - 2rem)"
    if (visibleCards === 2) return "calc(50% - 1.5rem)"
    return "calc(25% - 1.5rem)"
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#0f1410] to-[#1a1e1a] relative overflow-hidden py-10 sm:py-16 px-3 sm:px-6"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/forest-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] bg-repeat opacity-5 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-30"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 20 + 10,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-[#1a1e1a]/80 to-[#1a1e1a]/60 backdrop-blur-sm border border-[#f8841f]/30 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-lg shadow-orange-500/10"
          >
            <span className="text-[#f8841f] font-medium tracking-wide text-xs sm:text-sm md:text-base">
              What we&apos;re offering
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center max-w-4xl mx-auto leading-tight drop-shadow-md px-2"
          >
            Feel real adventure and very
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
              close to nature
            </span>
          </motion.h2>
        </motion.div>

        {/* Carousel container */}
        <div className="relative mx-auto max-w-full">
          {/* Left navigation arrow */}
          <AnimatePresence>
            {currentIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white/20 -ml-2 sm:ml-0"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden rounded-xl mx-auto"
            style={{
              maxWidth: screenSize.isMobile ? "85vw" : screenSize.isTablet ? "90vw" : "100%",
            }}
          >
            <motion.div
              className="flex gap-3 sm:gap-4 md:gap-6"
              initial={false}
              animate={{
                x: `-${currentIndex * (100 / visibleCards)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  style={{
                    width: getCardWidth(),
                    minWidth: getCardWidth(),
                    maxWidth: getCardWidth(),
                  }}
                  className="bg-gradient-to-b from-white to-gray-50 rounded-xl overflow-hidden shadow-xl group relative"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {/* Image container with gradient overlay */}
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Activity title overlay on image */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full p-3 sm:p-4 z-10"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-white text-base sm:text-lg font-bold drop-shadow-md">{activity.title}</h4>
                    </motion.div>
                  </div>

                  {/* Curved border with dynamic color */}
                  <div className="relative">
                    <div className="absolute -top-4 left-0 w-full h-8 overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-white z-10"
                        style={{
                          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 50%, 0 0)",
                        }}
                        whileHover={{ backgroundColor: activity.color }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative px-3 sm:px-4 md:px-6 pt-10 sm:pt-12 md:pt-14 pb-4 sm:pb-6 md:pb-8 text-center">
                      {/* Icon with glow effect */}
                      <motion.div
                        className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 ${activity.iconBg} rounded-full flex items-center justify-center shadow-lg z-10`}
                        style={{
                          boxShadow: `0 10px 25px -5px ${activity.color}40`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 15px 30px -5px ${activity.color}60`,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {activity.icon}
                      </motion.div>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2 md:mb-3 line-clamp-1">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-3 md:line-clamp-4">
                        {activity.description}
                      </p>

                      {/* Explore button */}
                      <motion.div
                        className="mt-3 sm:mt-4 md:mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium transition-all duration-300`}
                          style={{ backgroundColor: activity.color }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 10px 15px -3px ${activity.color}40`,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right navigation arrow */}
          <AnimatePresence>
            {currentIndex < totalSlides - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 border border-white/20 -mr-2 sm:mr-0"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 space-x-1.5 sm:space-x-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[#f8841f] w-6 sm:w-8" : "bg-white/30 hover:bg-white/50 w-2 sm:w-3"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Adventure image */}
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-full overflow-hidden px-4">
        <Image
          src="/assets/images/mazahir_pics/adventure.png"
          alt="Adventure"
          width={1000}
          height={300}
          className="w-full max-w-[250px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto object-contain"
        />
      </div>
    </div>
  )
}
