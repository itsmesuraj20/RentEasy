import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="https://google.com" className="text-white text-lg font-bold">
          RentEasy
        </Link>
        <div className="space-x-6">
          <Link href="/list-property" className="text-white hover:underline">
            List Your Property
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}