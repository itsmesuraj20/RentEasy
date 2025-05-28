'use client'

import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
          Find your Dream{' '}
          <span className="text-red-500">place</span>
        </h1>
        
        {/* Search Bar */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
            <div className="flex items-center pl-6 pr-4 py-4">
              <MapPin className="text-gray-400 w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search property near you..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-4 px-2 text-gray-700 text-lg placeholder-gray-400 bg-transparent outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white p-4 m-2 rounded-full transition-colors duration-200">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}