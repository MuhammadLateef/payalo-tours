"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Tent, Users, Star, Award } from "lucide-react"

const Achievement = ({ value, suffix, label, icon }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const countRef = useRef(0)
  const animationRef = useRef(null)

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)

        // Easing function for smoother animation
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

        countRef.current = Math.floor(easedProgress * value)
        setCount(countRef.current)

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }

      animationRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [inView, value])

  return (
    <div ref={ref} className="group relative  bg-white hover:bg-gradient-to-r hover:from-red-500 hover:via-yellow-500 hover:to-blue-500  rounded-lg p-6 shadow-sm transition-transform hover:scale-105 hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-4 ">{icon}</div>
        <h3 className="text-4xl font-bold text-gray-800 mb-2">
          {count}
          {suffix}
        </h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  )
}

export default function AchievementsSection() {
  const achievements = [
    {
      value: 800,
      suffix: "+",
      label: "Happy Traveler",
      icon: <Users className="w-12 h-12 text-green-500" />,
    },
    {
      value: 1050,
      suffix: "+",
      label: "Tours success",
      icon: <Tent className="w-12 h-12 text-green-500" />,
    },
    {
      value: 99.5,
      suffix: "%",
      label: "Positive Reviews",
      icon: <Star className="w-12 h-12 text-green-500" />,
    },
    {
      value: 15,
      suffix: "+",
      label: "Experienced Guides",
      icon: <Award className="w-12 h-12 text-green-500" />,
    },
  ]

  return (
    <section className="mb-16 max-w-7xl mx-auto my-32">
      <div className="relative mb-10">
        <div className="absolute -top-4 left-90 transform rotate-[-5deg]">
          <div className="bg-orange-400 text-white px-4 py-1 text-sm font-medium">Company Fact</div>
        </div>
        <h2 className="text-5xl font-bold text-gray-800 text-center">ACHIEVEMENTS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <Achievement
            key={index}
            value={achievement.value}
            suffix={achievement.suffix}
            label={achievement.label}
            icon={achievement.icon}
          />
        ))}
      </div>
    </section>
  )
}
