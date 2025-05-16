"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const adventures = [
  {
    id: 1,
    title: "Trekking",
    image: "/assets/images/mazahir_pics/trekking.jpg",
    description: "Explore scenic trails through mountains and valleys",
  },
  {
    id: 2,
    title: "Camping",
    image: "/assets/images/mazahir_pics/camping.jpg",
    description: "Experience nights under the stars in pristine wilderness",
  },
  {
    id: 3,
    title: "Mountain Climbing",
    image: "/assets/images/mazahir_pics/climbing.jpg",
    description: "Challenge yourself with thrilling climbs on majestic peaks",
  },
  {
    id: 4,
    title: "Cultural Tours",
    image: "/assets/images/mazahir_pics/cultural.jpg",
    description: "Discover the rich heritage and traditions of local communities",
  },
  {
    id: 5,
    title: "Wildlife Safari",
    image: "/assets/images/mazahir_pics/markhor.jpg", 
    description: "Observe rare wildlife species in their natural habitat",
  },
  {
    id: 6,
    title: "Photography Tours",
    image: "/assets/images/mazahir_pics/profile.jpg",
    description: "Capture stunning landscapes and cultural moments",
  },
]

export default function ExploreAdventure() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [cardsPerView, setCardsPerView] = useState(4)
  const sliderRef = useRef(null)
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)

  // Scroll animation with parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0.8])

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)

      if (width < 640) {
        setCardsPerView(1)
      } else if (width < 1024) {
        setCardsPerView(2)
      } else if (width < 1280) {
        setCardsPerView(3)
      } else {
        setCardsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(adventures.length / cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    // Snap to nearest slide after dragging
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / cardsPerView
      const scrollPosition = sliderRef.current.scrollLeft
      const newIndex = Math.round(scrollPosition / slideWidth / cardsPerView)
      setCurrentIndex(Math.max(0, Math.min(newIndex, totalSlides - 1)))

      // Smooth scroll to the nearest slide
      sliderRef.current.scrollTo({
        left: newIndex * slideWidth * cardsPerView,
        behavior: "smooth",
      })
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0))
    setScrollLeft(sliderRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    handleMouseUp() // Reuse the same logic as mouse up
  }

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging, totalSlides])

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / cardsPerView
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth * cardsPerView,
        behavior: "smooth",
      })
    }
  }, [currentIndex, cardsPerView])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    hover: { 
      y: -15, 
      scale: 1.03,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
  }

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span 
            variants={titleVariants}
            className="inline-block text-green-600 font-semibold mb-4 tracking-wider uppercase text-sm"
          >
            Unforgettable Experiences
          </motion.span>
          
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          >
            Explore Real Adventure
          </motion.h2>
          
          <motion.div 
            variants={titleVariants}
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          
          <motion.p 
            variants={titleVariants}
            className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
          >
            Discover the thrill of adventure in the breathtaking landscapes of Gilgit Baltistan. From trekking through
            pristine valleys to scaling majestic peaks, unforgettable experiences await.
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <motion.div 
          className="relative"
          style={{ opacity }}
        >
          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <motion.div
              className="flex transition-transform duration-700 ease-out"
              style={{
                width: `${(adventures.length / cardsPerView) * 100}%`,
                x: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [50, 0, -50]
                ),
              }}
            >
              {adventures.map((adventure, index) => (
                <motion.div
                  key={adventure.id}
                  className="px-4"
                  style={{ width: `${100 / adventures.length}%` }}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={cardVariants}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(adventure.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl h-[400px] group bg-white">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <Image
                        src={adventure.image || "/placeholder.svg?height=400&width=300"}
                        alt={adventure.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-500 ease-out group-hover:bg-white">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">{adventure.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{adventure.description}</p>
                        
                        <AnimatePresence>
                          {(hoveredCard === adventure.id || isMobile) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Link
                                href={`/adventures/${adventure.id}`}
                                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group/link"
                              >
                                <span>Discover More</span>
                                <motion.span
                                  initial={{ x: 0 }}
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ 
                                    repeat: Infinity, 
                                    repeatType: "loop", 
                                    duration: 1.5,
                                    ease: "easeInOut" 
                                  }}
                                >
                                  <ArrowRight className="h-4 w-4 ml-1 inline-block group-hover/link:ml-2 transition-all" />
                                </motion.span>
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-green-500 w-10" : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link
            href="/adventures"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-green-500 to-green-600 rounded-full overflow-hidden shadow-md hover:shadow-lg"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            <span className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></span>
            <span className="relative flex items-center">
              <span>View All Adventures</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 0.8 
                }}
                className="ml-2"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Add this to your globals.css
