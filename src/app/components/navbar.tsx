import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          RentEasy
        </Link>
        <div className="space-x-4">
          {/* Other navigation links/buttons go here */}
        </div>
      </div>
    </nav>
  );
}