"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { Star } from "lucide-react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Avator1,Avator2 } from "@/app/index"
const testimonials = [
    {
        id: 1,
        name: "Markus L.",
        country: "Germany",
        rating: 5,
        text: "Professional team, safe travel, and warm hospitality. I felt like I was exploring with friends.",
        avatar: Avator1,
    },
    {
        id: 2,
        name: "Sarah K.",
        country: "United States",
        rating: 5,
        text: "The guides were knowledgeable and the landscapes were breathtaking. An unforgettable experience!",
        avatar: Avator2,
    },
    {
        id: 3,
        name: "Hiroshi T.",
        country: "Japan",
        rating: 5,
        text: "Every detail was perfectly planned. The cultural immersion was exactly what I was looking for.",
        avatar: Avator2,
    },
]


export default function AchievementsReview() {
    const [mounted, setMounted] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <section className="bg-shape-10 bg-[#F3F8F6] py-16 relative transition-all duration-300">
            <div className="absolute -top-40 bg-[url('/assets/images/home/bg-shape-10.png')] w-full h-[100vh] bg-top-left bg-repeat opacity-80" style={{ backgroundColor: "#F3F8F6" }}></div>
            <div className="max-w-[90%] mx-auto px-4">
                <div className="relative">
                    <div className="p-8 relative overflow-hidden">
                        <div className="mb-6">
                            <span className="inline-block bg-[#e8f5e9] text-green-600 px-4 py-1 rounded-full text-sm font-medium">
                                Our testimonials
                            </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                            <div className="md:w-[80%] w-auto">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                    The Impact of a True Adventure — In Their Own Words
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Our guests come as travelers and leave as storytellers. Read the voices of those who found awe, peace,
                                    thrill, and beauty across Gilgit-Baltistan's rugged landscapes and cultural heartlands.
                                </p>
                                <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 hover:bg-[#F9A826]">
                                    Plan Your Trip
                                </button>
                            </div>

                            <div className="relative  overflow-hidden">
                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    pagination={{ clickable: true }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="testimonial-swiper"
                                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <SwiperSlide className=" overflow-hidden" key={testimonial.id}>
                                            <div className="bg-white p-6 rounded-lg relative transition-all duration-300 group hover:shadow-lg">
                                                <div className="flex mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-green-500 fill-green-500 group-hover:text-[#F9A826] group-hover:fill-[#F9A826] transition-colors duration-300" />
                                                    ))}
                                                </div>
                                                <p className=" w-[70%] text-gray-700 mb-6">{testimonial.text}</p>
                                                <div className="flex items-center">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-green-500 group-hover:border-[#F9A826] transition-colors duration-300">
                                                        <Image
                                                            src={testimonial.avatar || "/placeholder.svg"}
                                                            alt={testimonial.name}
                                                            width={48}
                                                            height={48}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                                        <p className="text-sm text-gray-600">{testimonial.country}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Quote Bubble */}
                                            <div className="absolute -top-16 -right-14 w-40 h-40 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 transition-colors duration-300 testimonial-bubble">
                                                99
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}