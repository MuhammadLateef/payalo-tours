"use client"

import { useState } from "react"
import { FileText, Map, Calendar, Star, DollarSign, Check, X, ChevronDown, ChevronUp, Globe } from "lucide-react"

export default function TourDetails({ tour }) {
  const [activeTab, setActiveTab] = useState("highlights")
  const [expandedFAQs, setExpandedFAQs] = useState({})
  const [expandedDay, setExpandedDay] = useState("Day 1")

  // Default values for missing data
  const tourData = {
    highlights: [],
    itinerary: [],
    servicesIncluded: [],
    servicesExcluded: [],
    faqs: [],
    title: "",
    duration: "",
    difficulty: "",
    price: "",
    rating: 0,
    reviewCount: 0,
    nextDeparture: "",
    ...tour
  }

  const toggleFAQ = (index) => {
    setExpandedFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl bg-white">
      {/* Tour Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-500 rounded-lg p-8 text-white mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{tourData.title}</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Calendar size={20} />
            <span>{tourData.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Map size={20} />
            <span>{tourData.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={20} />
            <span>From {tourData.price}</span>
          </div>
          {tourData.rating > 0 && (
            <div className="flex items-center gap-2">
              <Star size={20} className="text-yellow-300 fill-yellow-300" />
              <span>{tourData.rating} ({tourData.reviewCount} reviews)</span>
            </div>
          )}
        </div>
        {tourData.nextDeparture && (
          <div className="mt-6 bg-white/20 p-3 rounded-lg inline-block">
            <div className="flex items-center gap-2">
              <Globe className="text-white" size={20} />
              <span>Next departure: <strong>{tourData.nextDeparture}</strong></span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="mt-8">
        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 sticky top-0 bg-white py-4 z-10 border-b border-gray-100">
          <button
            className={`px-6 py-3 rounded-full flex items-center justify-center transition-all transform ${
              activeTab === "highlights"
                ? "bg-emerald-500 text-white shadow-md scale-105"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("highlights")}
          >
            <Star size={18} className="mr-2" />
            <span className="font-semibold">HIGHLIGHTS</span>
          </button>
          <button
            className={`px-6 py-3 rounded-full flex items-center justify-center transition-all transform ${
              activeTab === "itinerary"
                ? "bg-emerald-500 text-white shadow-md scale-105"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("itinerary")}
          >
            <Calendar size={18} className="mr-2" />
            <span className="font-semibold">ITINERARY</span>
          </button>
          <button
            className={`px-6 py-3 rounded-full flex items-center justify-center transition-all transform ${
              activeTab === "services"
                ? "bg-emerald-500 text-white shadow-md scale-105"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("services")}
          >
            <Check size={18} className="mr-2" />
            <span className="font-semibold">SERVICES</span>
          </button>
          {tourData.faqs.length > 0 && (
            <button
              className={`px-6 py-3 rounded-full flex items-center justify-center transition-all transform ${
                activeTab === "faqs"
                  ? "bg-emerald-500 text-white shadow-md scale-105"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("faqs")}
            >
              <FileText size={18} className="mr-2" />
              <span className="font-semibold">FAQs</span>
            </button>
          )}
        </div>

        {/* Highlights Tab Content */}
        {activeTab === "highlights" && tourData.highlights.length > 0 && (
          <div className="animate-fadeIn bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-emerald-700">Tour Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tourData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 hover:shadow-md transition-shadow">
                  <div className="bg-emerald-500 text-white rounded-full p-1 mt-1">
                    <Star size={14} />
                  </div>
                  <span className="text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>

            {tourData.itinerary.length > 0 && (
              <div className="mt-8 text-center">
                <button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md flex items-center justify-center mx-auto"
                  onClick={() => setActiveTab("itinerary")}
                >
                  View Detailed Itinerary
                </button>
              </div>
            )}
          </div>
        )}

        {/* Itinerary Tab Content */}
        {activeTab === "itinerary" && tourData.itinerary.length > 0 && (
          <div className="animate-fadeIn bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-emerald-700">Tour Itinerary</h3>
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                <FileText size={16} />
                <span>Download Full Itinerary PDF</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {tourData.itinerary.map((item, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${expandedDay === item.day ? 'shadow-md' : ''}`}
                >
                  <div 
                    className={`flex justify-between items-center p-4 cursor-pointer ${expandedDay === item.day ? 'bg-emerald-50' : 'bg-gray-50'}`}
                    onClick={() => toggleDay(item.day)}
                  >
                    <h4 className="font-bold text-lg">
                      <span className="text-emerald-600">{item.day}:</span> {item.title}
                    </h4>
                    <div className="text-emerald-600">
                      {expandedDay === item.day ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {expandedDay === item.day && (
                    <div className="p-4 bg-white border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-700">{item.description}</p>
                      <div className="mt-4 flex gap-3">
                        <button className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                          <Map size={14} /> View on map
                        </button>
                        <button className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                          <Calendar size={14} /> See accommodation
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab Content */}
        {activeTab === "services" && (
          <div className="animate-fadeIn bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-emerald-700">Tour Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="text-lg font-semibold mb-4 text-green-700 flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span>Services Included</span>
                </h4>
                <ul className="space-y-3">
                  {tourData.servicesIncluded.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-green-500 text-white rounded-full p-1 mt-1">
                        <Check size={12} />
                      </div>
                      <span className="text-gray-800">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="text-lg font-semibold mb-4 text-red-700 flex items-center gap-2">
                  <X size={20} className="text-red-500" />
                  <span>Services Excluded</span>
                </h4>
                <ul className="space-y-3">
                  {tourData.servicesExcluded.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-red-500 text-white rounded-full p-1 mt-1">
                        <X size={12} />
                      </div>
                      <span className="text-gray-800">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Tab Content */}
        {activeTab === "faqs" && tourData.faqs.length > 0 && (
          <div className="animate-fadeIn bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-emerald-700">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {tourData.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className={`flex justify-between items-center p-4 cursor-pointer ${expandedFAQs[index] ? 'bg-blue-50' : 'bg-gray-50'}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="font-semibold text-lg">{faq.question}</h4>
                    <div className="text-blue-600">
                      {expandedFAQs[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {expandedFAQs[index] && (
                    <div className="p-4 bg-white border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-lg mb-2">Have more questions?</h4>
              <p className="text-gray-600 mb-4">Our team is ready to help you with any questions you might have about this tour.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                <FileText size={16} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        )}

        {/* Booking Section - Always visible */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready for the adventure?</h3>
              <p className="text-white/90">Secure your spot on our next {tourData.title} departure.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
                Check Availability
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}