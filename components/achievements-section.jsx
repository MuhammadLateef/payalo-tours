"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Tent, Users, Star, Award } from "lucide-react"
import AchievementsReview from "./testimonial-slider"

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
    <div ref={ref} className="group transition-all duration-300 group hover:shadow-lg relative max-w-[380px] px-[15px] pt-[40px] pb-[30px] shadow-[15px_30px_86px_0px_rgba(0,0,0,0.07)] text-center rounded-[10px] bg-white mb-[30px]">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-green-100 group-hover:bg-amber-200 group-hover:text-amber-200 flex items-center justify-center mb-4 ">{icon}</div>
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
    <>
      <section className="mb-16 max-w-7xl relative z-10 mx-auto my-32">
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

      <div className="">
        <AchievementsReview />
      </div>
    </>
  )
}
