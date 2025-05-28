'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, Building, Phone, Info } from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon?: React.ReactNode
}

const defaultNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { href: '/properties', label: 'Properties', icon: <Building className="w-4 h-4" /> },
  { href: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
  { href: '/contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
]

interface NavbarProps {
  items?: NavItem[]
  logo?: string
}

export default function Navbar({ items = defaultNavItems, logo = "RentEasy" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-red-400 transition-colors duration-200">
              {logo}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-white hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-400 focus:outline-none focus:text-red-400 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm rounded-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-white hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="https://google.com" className="text-white text-lg font-bold">
//           RentEasy
//         </Link>
//         <div className="space-x-6">
//           <Link href="/list-property" className="text-white hover:underline">
//             List Your Property
//           </Link>
//           <Link href="/contact" className="text-white hover:underline">
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }