"use client"
import ReactPlayer from "react-player/lazy"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [videoReady, setVideoReady] = useState(false)
  const playerRef = useRef(null)
  return (
    <div className="min-h-screen">

      {/* Hero Section with Full-Screen Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full">
          {/* Loading placeholder */}
          {!videoReady && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* YouTube Video Player */}
          <div className="player-wrapper w-full h-full absolute inset-0">
            <ReactPlayer
              ref={playerRef}
              url="https://youtu.be/qt5qqfhS7c4"
              playing
              loop
              muted
              width="100%"
              height="100%"
              onReady={() => setVideoReady(true)}
              config={{
                youtube: {
                  playerVars: {
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                  },
                },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              className="react-player"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Gateway to <span className="text-green-500">Adventure</span> in Gilgit Baltistan
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <a target="_blank" href="https://wa.me/923554229889?text">
                <button className="hover:cursor-pointer px-8 py-3 border border-green-500 text-white bg-green-500 rounded-md hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-green-500/20">
                  Call Now
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-white">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}


