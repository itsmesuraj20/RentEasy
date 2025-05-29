export default function AboutStats() {
  const stats = [
    { number: "10K+", label: "Happy Families", description: "Successfully helped families find their dream homes" },
    { number: "500+", label: "Properties Listed", description: "Premium properties across major Indian cities" },
    { number: "50+", label: "Cities Covered", description: "Wide network spanning across India" },
    { number: "8+", label: "Years Experience", description: "Proven track record in real estate" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}