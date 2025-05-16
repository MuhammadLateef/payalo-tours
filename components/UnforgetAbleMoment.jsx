"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, CheckCircle, Shield, DollarSign, MapPin } from "lucide-react"
import Image from "next/image"

export default function UnforgetAbleMoment() {
  const [hovered, setHovered] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const features = [
    {
      title: "Safety first always",
      description: "Our expert guides and secure transport ensure every journey is safe and comfortable.",
      icon: <Shield className="w-5 h-5 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Affordable & Customizable",
      description: "We offer flexible, budget-friendly tours tailored to your travel style and interests.",
      icon: <DollarSign className="w-5 h-5 text-white" />,
      color: "bg-yellow-500",
    },
    {
      title: "Local Expertise",
      description: "Discover hidden gems and authentic experiences with our knowledgeable local team.",
      icon: <MapPin className="w-5 h-5 text-white" />,
      color: "bg-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-16 md:py-24">
      {/* Background pattern with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-cover opacity-5 z-0"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo with hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-12 shadow-lg mx-auto md:mx-0 cursor-pointer"
        >
          <Globe className="w-12 h-12 text-white" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Images with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto md:mx-0 max-w-md md:max-w-none"
          >
            {/* Main image with hover effect */}
            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/mazahir_pics/affortable.jpg"
                alt="Hiker on mountain top in Gilgit-Baltistan"
                width={600}
                height={400}
                className="w-full h-[300px] sm:h-[400px] object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Small image with enhanced positioning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-16 -left-8 w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-8 border-white shadow-lg"
            >
              <Image
                src="/assets/images/mazahir_pics/unforgetable.jpg"
                alt="Person sitting in cave with mountain view"
                width={200}
                height={200}
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Experience badge with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -bottom-8 right-8 bg-white rounded-xl border border-green-200 px-6 py-3 flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 text-5xl font-bold mr-3">
                28
              </span>
              <div className="text-gray-600 text-sm">
                Years of
                <br />
                experience
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Content with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20 md:mt-0"
          >
            {/* About badge with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-gradient-to-r from-green-50 to-green-100 text-green-600 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm hover:shadow transition-all duration-300"
            >
              About Company
            </motion.div>

            {/* Heading with gradient text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                Unforgettable Journeys
                <br />
                Through Gilgit-Baltistan
              </span>
            </motion.h1>

            {/* Features with enhanced styling and hover effects */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className={`w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 transition-all duration-300 ${hovered === index ? "bg-orange-200 scale-110" : ""}`}
                  >
                    <CheckCircle
                      className={`w-6 h-6 text-orange-500 transition-all duration-300 ${hovered === index ? "text-orange-600" : ""}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center mr-4 shadow-md transition-all duration-300 ${hovered === index ? "scale-110" : ""}`}
                      >
                        {feature.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold text-gray-800 transition-all duration-300 ${hovered === index ? "text-green-600" : ""}`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 transition-all duration-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
