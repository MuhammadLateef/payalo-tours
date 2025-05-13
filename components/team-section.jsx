"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import { team1, team2 } from "@/app/index"
const teamMembers = [
    {
        id: 1,
        name: "Yasir Abbas",
        role: "CEO / Founder",
        bio: "Visionary leader with 15+ years of experience transforming ideas into industry-leading solutions.",
        image: "/placeholder.svg?height=400&width=400",
        isCEO: true,
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            email: "mailto:alex@example.com",
        },
    },

    {
        id: 3,
        name: "Mazahir Hussain",
        role: "Co-Founder",
        bio: "Strategic thinker specializing in product development and market expansion strategies.",
        image: team1,
        isCEO: false,
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            email: "mailto:jamie@example.com",
        },
    },
    {
        id: 4,
        name: "Muhammad Latif",
        role: "COO",
        bio: "Operations expert with a proven track record of scaling businesses efficiently and effectively.",
        image: team2,
        isCEO: false,
        social: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            github: "https://github.com",
            email: "mailto:taylor@example.com",
        },
    },

]

export default function TeamSection() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section className="py-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Meet the visionaries behind our success. Our leadership team brings decades of experience and a passion for
                    innovation.
                </p>
            </div>

            <div className="relative">              

                {/* Co-Founder and COO Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {teamMembers.slice(0).map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            onMouseEnter={() => setHoveredId(member.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-6 transform group-hover:translate-y-[-8px] transition-all duration-500">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-white shadow-md">
                                        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-3">
                                        {member.role}
                                    </div>
                                   
                                    <p className="text-gray-600 text-center text-sm mb-4">{member.bio}</p>

                                    <motion.div
                                        className="flex space-x-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: hoveredId === member.id ? 1 : 0,
                                            y: hoveredId === member.id ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a
                                            href={member.social.twitter}
                                            className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Twitter size={16} />
                                        </a>
                                        <a
                                            href={member.social.linkedin}
                                            className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                        <a
                                            href={member.social.github}
                                            className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Github size={16} />
                                        </a>
                                        <a
                                            href={member.social.email}
                                            className="p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                                        >
                                            <Mail size={16} />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-tl-3xl -z-10"></div>
                            <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-br-3xl -z-10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
