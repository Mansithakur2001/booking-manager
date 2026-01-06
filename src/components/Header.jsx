"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <h1 className="text-xl font-bold text-blue-600">JustWravel</h1> */}
<h1 className="text-xl font-bold">
  <span className="text-blue-600">Just</span>
  <span className="text-green-600">Wravel</span>
</h1>

        <div className="flex gap-4">
          <Link
            href="/bookings"
            className={`px-4 py-2 rounded transition font-medium ${
              isActive("/bookings")
                ? "bg-blue-600 text-white"
                : "border border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            View Bookings
          </Link>

          <Link
            href="/bookings/create"
            className={`px-4 py-2 rounded transition font-medium ${
              isActive("/bookings/create")
                ? "bg-blue-600 text-white"
                : "border border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            Create Booking
          </Link>
        </div>
      </div>
    </header>
  );
}