"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube, Instagram } from "lucide-react"
import { FaTiktok } from "react-icons/fa6"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { treks } from "@/lib/treks-data";
const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // State for dropdown menus
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Refs for dropdown containers
  const toursDropdownRef = useRef(null)
  const aboutUsDropdownRef = useRef(null)
  const trekkingDropdownRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toursDropdownRef.current &&
        !toursDropdownRef.current.contains(event.target) &&
        aboutUsDropdownRef.current &&
        !aboutUsDropdownRef.current.contains(event.target) &&
        trekkingDropdownRef.current &&
        !trekkingDropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle dropdown menu
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <main className="">
      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-lg" : "bg-white/50"
          }`}
      >
        <div className="container max-w-[90%] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/mazahir_pics/Nav_logo.png"
                  alt="Adventure Logo"
                  width={140}
                  height={50}
                  className="h-16 w-auto"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-8"
            >
              <NavLink href="/" label="HOME" active />

              <NavLink href="/tours" label="TOURS" />
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Treks</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {treks.map((trek) => (
                          <li key={trek.id} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/treks/${trek.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{trek.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{trek.subtitle}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavLink href="/#" label="PHOTO GALLERY" />
              <NavLink href="/#" label="VIDEOS" />
              {/* <NavLink href="/#" label="OUR MAGAZINE" /> */}

              {/* About Us Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-2 md:w-[300px] md:grid-cols-2 lg:w-[300px]">
                        <li className="row-span-2">
                          <NavigationMenuLink className={"space-y-3"}>
                            <Link
                              href={`/aboutus`}
                              className="font-medium uppercase w-full"
                            >
                              About us
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink>
                            <Link
                              href={`/team`}
                              className="font-medium uppercase w-full"
                            >
                              Our Team
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink>
                            <Link
                              href={`/contactus`}
                              className="font-medium uppercase w-full"
                            >
                              Contact us
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.nav>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center"
            >
              <div className="flex space-x-2">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Youtube"
                  className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                >
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="TikTok"
                  className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                >
                  <FaTiktok className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-black p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                <MobileNavLink href="/" label="HOME" active />

                {/* Mobile Tours Dropdown */}
                <MobileDropdown
                  label="TOURS"
                  isOpen={activeDropdown === 'mobile-tours'}
                  toggleDropdown={() => toggleDropdown('mobile-tours')}
                  links={[
                    { href: '/tours/luxury-package', label: 'Luxury Package' },
                    { href: '/tours/standard-package', label: 'Standard Package' },
                    { href: '/tours/budget-package', label: 'Budget Package' },
                  ]}
                />

                {/* Mobile Trekking Dropdown */}
                <MobileDropdown
                  label="TREKKING"
                  isOpen={activeDropdown === 'mobile-trekking'}
                  toggleDropdown={() => toggleDropdown('mobile-trekking')}
                  links={[
                    { href: '/trekking/day-trips', label: 'Day Trips' },
                    { href: '/trekking/multiday-expeditions', label: 'Multi-day Expeditions' },
                    { href: '/trekking/custom-routes', label: 'Custom Routes' },
                  ]}
                />

                <MobileNavLink href="/photo-gallery" label="PHOTO GALLERY" />
                <MobileNavLink href="/videos" label="VIDEOS" />
                {/* <MobileNavLink href="/magazine" label="OUR MAGAZINE" /> */}

                {/* Mobile About Us Dropdown */}
                <MobileDropdown
                  label="ABOUT US"
                  isOpen={activeDropdown === 'mobile-aboutus'}
                  toggleDropdown={() => toggleDropdown('mobile-aboutus')}
                  links={[
                    { href: '/team', label: 'Our Team' },
                    { href: '/contactus', label: 'Contact Us' },
                  ]}
                />

                <div className="flex space-x-2 pt-3">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Youtube"
                    className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                  >
                    <Youtube className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                  >
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="TikTok"
                    className="text-black hover:text-white hover:scale-105 w-[40px] rounded-full flex justify-center items-center bg-amber-300/30 h-[40px] hover:bg-green-500 transition-all ease-linear group delay-150"
                  >
                    <FaTiktok className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </main>
  )
}

export default HeaderNav

// Desktop Navigation Link Component
function NavLink({ href, label, active = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-sm font-medium transition-colors ${active ? "text-green-400" : "text-black hover:text-gray-700"
        }`}
    >
      {label}
    </Link>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ href, label, active = false }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 text-base font-medium rounded-md ${active ? "text-green-400" : "text-white hover:text-green-400"
        }`}
    >
      {label}
    </Link>
  )
}

// Mobile Dropdown Component
function MobileDropdown({ label, isOpen, toggleDropdown, links }) {
  return (
    <div>
      <button
        className="flex w-full justify-between items-center px-3 py-2 text-base font-medium rounded-md text-white hover:text-green-400"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-6"
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-green-400"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}