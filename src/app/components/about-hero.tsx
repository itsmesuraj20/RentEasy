export default function AboutHero() {
  return (
    <section className="relative h-96 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          About <span className="text-red-500">DreamPlace</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl">
          Your trusted partner in finding the perfect home. We've been connecting dreams with reality since 2015.
        </p>
      </div>
    </section>
  )
}