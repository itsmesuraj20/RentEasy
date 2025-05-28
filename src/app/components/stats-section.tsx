'use client'

import { ArrowRight } from 'lucide-react'

interface StatCardProps {
  title: string
  count: string
  delay?: number
}

function StatCard({ title, count, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-lg mb-6">{count}</p>
        <div className="flex items-center text-red-500 group-hover:text-red-600 transition-colors">
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    { title: "New Listings", count: "90000+" },
    { title: "New Listings", count: "90000+" },
    { title: "New Listings", count: "90000+" },
    { title: "New Listings", count: "90000+" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              count={stat.count}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  )
}