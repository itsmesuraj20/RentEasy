'use client'

import { useState } from 'react'
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react'

export default function PropertyFilters() {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  })

  const propertyTypes = ['Apartment', 'House', 'Villa', 'Commercial', 'Plot']
  const priceRanges = ['Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+']
  const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK']

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Search className="w-6 h-6 mr-2 text-red-500" />
        Find Properties
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Location
          </label>
          <input
            type="text"
            placeholder="Enter city, area..."
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Home className="w-4 h-4 inline mr-1" />
            Property Type
          </label>
          <select
            value={filters.propertyType}
            onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Any Price</option>
            {priceRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Bed className="w-4 h-4 inline mr-1" />
            Bedrooms
          </label>
          <select
            value={filters.bedrooms}
            onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Any</option>
            {bedroomOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center">
          <Search className="w-4 h-4 mr-2" />
          Search Properties
        </button>
      </div>
    </div>
  )
}