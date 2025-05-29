'use client'

import { useState } from 'react'
import { Heart, MapPin, Bed, Bath, Square, Eye } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  type: string
  isNew?: boolean
}

const dummyProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa with Garden",
    location: "Gurgaon, Haryana",
    price: "₹2.5 Crores",
    bedrooms: 4,
    bathrooms: 3,
    area: "2400 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Villa",
    isNew: true
  },
  {
    id: 2,
    title: "Modern Apartment Downtown",
    location: "Mumbai, Maharashtra",
    price: "₹1.8 Crores",
    bedrooms: 3,
    bathrooms: 2,
    area: "1850 sq ft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Apartment"
  },
  {
    id: 3,
    title: "Cozy 2BHK with Balcony",
    location: "Pune, Maharashtra",
    price: "₹85 Lakhs",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Apartment",
    isNew: true
  },
  {
    id: 4,
    title: "Spacious Family House",
    location: "Bangalore, Karnataka",
    price: "₹1.2 Crores",
    bedrooms: 3,
    bathrooms: 3,
    area: "2000 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "House"
  },
  {
    id: 5,
    title: "Penthouse with City View",
    location: "Delhi, NCR",
    price: "₹3.5 Crores",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 sq ft",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f84394330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Penthouse",
    isNew: true
  },
  {
    id: 6,
    title: "Studio Apartment",
    location: "Chandigarh",
    price: "₹45 Lakhs",
    bedrooms: 1,
    bathrooms: 1,
    area: "600 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    type: "Studio"
  }
]

function PropertyCard({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image */}
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {property.isNew && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            New
          </span>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
        </button>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors">
            {property.title}
          </h3>
          <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {property.type}
          </span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-500">{property.price}</span>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PropertyGrid() {
  const [properties] = useState<Property[]>(dummyProperties)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
          <p className="text-gray-600 mt-2">{properties.length} properties found</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500">
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Newest</option>
            <option>Sort by: Area</option>
          </select>
          
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  )
}