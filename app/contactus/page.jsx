import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Instagram, Send } from "lucide-react"
import Image1 from "/public/assets/images/home/contact-img.jpg"

export default function ContactUs() {
    return (
        <main className="min-h-screen">
            {/* Hero Section with Improved Overlay */}
            <div className="relative h-[400px] w-full">
                <Image
                    src={Image1}
                    alt="Mountain landscape"
                    fill
                    className="object-cover h-[80vh] brightness-75"
                    priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
                    <h1 className="text-4xl font-bold mb-2 transform transition-transform duration-500 hover:scale-105">Contact Us</h1>
                    <div className="flex items-center gap-2">
                        <a href="/" className="hover:text-[#F9A826] transition-colors duration-300 ease-in-out">
                            Home
                        </a>
                        <span>/</span>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>

            {/* Contact Badge */}
            <div className="flex justify-center mt-16">
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300 ease-in-out">Contact us</span>
            </div>

            {/* Main Heading */}
            <div className="text-center mt-6 mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Ready to Get our best Services!</h2>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Feel free to contact with us</p>
            </div>

            {/* Contact Info Cards - Enhanced with hover effects */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-16">
                <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-[#F9A826] border-2 border-transparent">
                    <div className="bg-white p-4 rounded-full mb-4 shadow-md group hover:bg-[#F9A826] transition-colors duration-300 ease-in-out">
                        <MapPin className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Office Location</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out">Yadgar Road, Skardu, Pakistan</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-[#F9A826] border-2 border-transparent">
                    <div className="bg-white p-4 rounded-full mb-4 shadow-md group hover:bg-[#F9A826] transition-colors duration-300 ease-in-out">
                        <Mail className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors duration-300 ease-in-out" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Email Address</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out">payalotour@gmail.com</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-[#F9A826] border-2 border-transparent">
                    <div className="bg-white p-4 rounded-full mb-4 shadow-md relative group hover:bg-[#F9A826] transition-colors duration-300 ease-in-out">
                        <Phone className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            24/7
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Hotline</h3>
                    <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 ease-in-out">+92346678967</p>
                </div>
            </div>

            {/* Contact Form Section - Enhanced with hover effects */}
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="bg-gray-50 p-4 inline-block rounded-full mb-6 hover:bg-green-100 transition-colors duration-300 ease-in-out">
                    <span className="text-green-600 font-medium hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Contact with us</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-[#F9A826] transition-colors duration-300 ease-in-out">Let's plan your perfect trip.</h2>
                        <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300 ease-in-out">
                            We're here to answer your questions and help you plan every step of your journey. Reach out and let's get
                            started.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <a href="https://facebook.com" className="bg-gray-200 p-2 rounded-full hover:bg-[#F9A826] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">
                                <Facebook className="h-5 w-5 text-gray-700 hover:text-white transition-colors duration-300 ease-in-out" />
                            </a>
                            <a href="https://instagram.com" className="bg-gray-200 p-2 rounded-full hover:bg-[#F9A826] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110">
                                <Instagram className="h-5 w-5 text-gray-700 hover:text-white transition-colors duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-4 mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300 ease-in-out hover:border-[#F9A826]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300 ease-in-out hover:border-[#F9A826]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    required
                                    placeholder="Phone Number"
                                    className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300 ease-in-out hover:border-[#F9A826]"
                                />
                                <input
                                    type="text"
                                    required
                                    placeholder="Subject"
                                    className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300 ease-in-out hover:border-[#F9A826]"
                                />
                            </div>

                            <textarea
                                placeholder="Write a Message"
                                rows="5"
                                className="bg-gray-50 p-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-[#F9A826] transition-all duration-300 ease-in-out hover:border-[#F9A826]"
                            ></textarea>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-[#F9A826] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg group"
                                >
                                    Send a Message
                                    <Send className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <div className="w-full mb-16 relative">
                {/* Overlay Card for Location */}
                <div className="absolute top-10 left-10 z-10 bg-white p-6 rounded-lg shadow-xl max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#F9A826] p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Our Location</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Yadgar Road, Skardu, Pakistan</p>
                    <a
                        href="https://maps.google.com/?q=Yadgar+Road,+Skardu,+Pakistan"
                        target="_blank"
                        className="inline-block bg-green-600 hover:bg-[#F9A826] text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
                    >
                        Get Directions
                    </a>
                </div>

                {/* Google Maps iFrame */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.4977280292584!2d75.62768931522134!3d35.29938088028533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46936e36a4e7d%3A0x2b4f29b625fc3c3!2sSkardu%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1589365242457!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                ></iframe>
                
                {/* Call to Action Banner */}
                <div className="w-[60%] mx-auto absolute -top-16 left-0 right-0 bg-green-600/70 py-12 mb-16 rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[1px] border border-white/30">
                    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-white mb-6 md:mb-0 text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Ready to adventure and enjoy nature?</h3>
                            <p>Speak with our travel experts to plan your perfect getaway</p>
                        </div>
                        <a
                            href="tel:+92346678967"
                            className="bg-white text-green-600 hover:bg-[#F9A826] hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}