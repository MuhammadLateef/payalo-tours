import TeamSection from "@/components/team-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-0">
        <div className="text-center py-16 bg-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Innovate Inc.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a forward-thinking company dedicated to creating innovative solutions for tomorrow's challenges.
          </p>
        </div>

        <TeamSection />

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to collaborate?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team is always looking for new opportunities and partnerships. Reach out to us to discuss how we can
            work together.
          </p>
          <button className="px-8 py-3 cursor-pointer bg-green-500 text-white rounded-full border border-green-500  hover:bg-white hover:text-[#F9A826] transition-all duration-300 transform hover:scale-110">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  )
}
