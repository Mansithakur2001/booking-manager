"use client";

import Link from "next/link";

export default function BookingList({ bookings, currentPage, totalPages }) {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((b) => (
              <div
                key={b._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col gap-2"
              >
                <h3 className="text-xl font-semibold text-gray-800">{b.name}</h3>
                <p className="text-gray-600 text-sm">{b.email}</p>
                <div className="mt-2 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Date:</span> {b.date}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {b.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <Link
                key={num}
                href={`/bookings?page=${num}`}
                className={`px-3 py-1 rounded border ${
                  num === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-50"
                }`}
              >
                {num}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}