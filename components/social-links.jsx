import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function SocialLinks() {
  return (
    <>
      <a href="#" className=" p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform hover:scale-110">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="#" className=" p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform hover:scale-110">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="#" className=" p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform hover:scale-110">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="#" className=" p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform hover:scale-110">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="#" className=" p-1.5 bg-gray-100 rounded-full text-gray-600 hover:bg-[#F9A826] hover:text-white transition-all duration-300 transform hover:scale-110">
        <Youtube className="w-5 h-5" />
      </a>
    </>
  )
}
