import { Shield, Heart, Zap, Users } from 'lucide-react'

export default function AboutValues() {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Trust & Security",
      description: "We prioritize transparency and security in every transaction, ensuring your peace of mind."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations."
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology to make property search and purchase seamless."
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Expert Team",
      description: "Our experienced professionals provide personalized guidance throughout your journey."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide us in helping you find your perfect home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "To revolutionize the real estate experience by connecting people with their dream properties 
            through innovative technology, transparent processes, and exceptional service. We believe 
            everyone deserves a place they can call home."
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Building Dreams Since 2015</p>
                <p className="text-gray-600">Making homeownership accessible for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}