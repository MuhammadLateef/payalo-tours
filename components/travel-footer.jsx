"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Phone, Mail, MapPin, Send } from "lucide-react"

export default function TravelFooter() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [isDesktop, setIsDesktop] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && agreed) {
      setShowNotification(true)
      // In a real app, you would send this to your API
      console.log("Submitted email:", email)
      setEmail("")
      setAgreed(false)

      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };

      handleResize(); // set initial state
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const socialLinks = [
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "twitter", href: "#", label: "Twitter" }
  ]

  const menuLinks = [
    { title: "About us", href: "#" },
    { title: "Contact us", href: "#" },
    { title: "Services", href: "#" },
    { title: "Tours", href: "#" }
  ]

  const contactInfo = [
    { icon: <Phone size={18} />, title: "Drop a Line", value: "+92 3468 484484" },
    { icon: <Mail size={18} />, title: "Email Address", value: "amjadwazir086@gmail.com" },
    { icon: <MapPin size={18} />, title: "Visit office", value: "College road, Skardu, Pakistan" }
  ]

  return (
    <footer className="bg-white text-gray-800 w-full border-t border-gray-200">
      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-fade-in-up z-50 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>Thank you for subscribing!</span>
        </div>
      )}

      {/* Support CTA Banner */}
      <div className="bg-blue-50  hover:bg-blue-100 transition-colors">
        <div className="max-w-[90%] container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-blue-100 rounded-full p-2">
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></span>
                  <span className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <div className="bg-blue-500 rounded-full p-2">
                    <div className="text-white font-bold text-xs">24</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Need support for your tour?</h3>
            </div>

            <button className="bg-green-500 hover:bg-green-600 transition-colors rounded-full p-2 text-white flex items-center gap-2 group">
              <span className="hidden md:inline">Get Help</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[90%] container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="m21 12-2 2-2-2 2-2 2 2z"></path>
                  <path d="M10 9.5V6.1a2 2 0 0 0-2.1-2 2 2 0 0 0-1.9 2v3.4"></path>
                  <path d="M5 19.5V5.1a2 2 0 0 0-2-2.1 2 2 0 0 0-2 2.1v14.4"></path>
                  <path d="M14 5.1a2 2 0 0 1 2-2.1 2 2 0 0 1 2 2.1v3.4"></path>
                  <path d="M19 19.5V9.5"></path>
                  <path d="M9 19.5v-5.1a2 2 0 0 1 2-2.1h0a2 2 0 0 1 2 2.1v5.1"></path>
                </svg>
              </div>
              <span className="font-bold text-xl">Payalo Tours</span>
            </div>

            <p className="text-gray-700 mb-4">
              Visit Gilgit Baltistan offers personalized tours showcasing the region's stunning landscapes and culture.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link href={social.href} key={index} aria-label={social.label}
                  className="bg-gray-200 hover:bg-gray-300 hover:scale-110 transition-all duration-300 p-2 rounded-full">
                  {social.icon === "facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Pages - Mobile Accordion, Desktop Regular */}
          <div>
            <div
              className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('pages')}>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <span className="md:hidden">
                {activeSection === 'pages' ? '−' : '+'}
              </span>
            </div>
            <ul className={`space-y-2 ${activeSection === 'pages' || isDesktop >= 768 ? 'block' : 'hidden md:block'}`}>
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}
                    className="text-gray-700 hover:text-green-600 hover:pl-1 transition-all duration-300 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="hidden group-hover:inline text-green-500">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div
              className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('newsletter')}>
              <h3 className="text-lg font-bold">Newsletter</h3>
              <span className="md:hidden">
                {activeSection === 'newsletter' ? '−' : '+'}
              </span>
            </div>
            <div className={activeSection === 'newsletter' || isDesktop ? 'block' : 'hidden md:block'}>
              <p className="text-gray-700 mb-3">Subscribe to get our latest updates.</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-grow px-3 py-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 transition-colors text-white px-3 py-2 flex items-center"
                    aria-label="Subscribe">
                    <Send size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I agree to terms and policies
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
              onClick={() => toggleSection('contact')}>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <span className="md:hidden">
                {activeSection === 'contact' ? '−' : '+'}
              </span>
            </div>
            <ul className={`space-y-3 ${activeSection === 'contact' || isDesktop ? 'block' : 'hidden md:block'}`}>
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3 group hover:bg-gray-50 rounded-lg p-1 transition-colors">
                  <div className="bg-gray-200 group-hover:bg-green-100 p-2 rounded-full transition-colors">
                    <div className="text-gray-700 group-hover:text-green-600 transition-colors">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-gray-600 text-sm">
            <div>© {new Date().getFullYear()} Payalo Tours Pvt Ltd. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-green-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>



    </footer>
  )
}