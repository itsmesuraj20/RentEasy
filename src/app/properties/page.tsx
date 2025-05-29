import Navbar from "../components/navbar"
import PropertyFilters from "../components/property-filters"
import PropertyGrid from "../components/property-grid"
import PropertyHero from "../components/property-hero"

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <PropertyHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PropertyFilters />
        <PropertyGrid />
      </div>
    </>
  )
}