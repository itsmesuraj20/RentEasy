'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CommunityCardProps {
  name: string
  image: string
  isActive?: boolean
}

function CommunityCard({ name, image, isActive = false }: CommunityCardProps) {
  return (
    <div className={`flex-shrink-0 text-center transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
      <div className="relative">
        <div 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cover bg-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundImage: `url(${image})` }}
        />
        {isActive && (
          <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-red-500 mx-auto animate-pulse" />
        )}
      </div>
      <p className="text-sm md:text-base text-gray-700 font-medium px-2 leading-tight">
        {name}
      </p>
    </div>
  )
}

export default function CommunitySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const communities = [
    { name: "Chandigarh", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Goa, India", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Pune, Maharashtra", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Bangalore, Karnataka", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Abohar, India", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Adilabad, India", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Ahmadnagar, India", image: "https://images.unsplash.com/photo-1600047509807-ba8f84394330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Akbarpur, India", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ]

  const itemsPerView = 7
  const maxIndex = Math.max(0, communities.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Handpicked Community for you
            </h2>
          </div>
        </div>

        {/* Communities Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Communities Container */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex gap-6 md:gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {communities.map((community, index) => (
                <CommunityCard
                  key={index}
                  name={community.name}
                  image={community.image}
                  isActive={index >= currentIndex && index < currentIndex + itemsPerView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}