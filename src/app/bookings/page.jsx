import BookingList from "@/components/BookingList";
import { headers } from "next/headers";

async function getBookings(page = 1, limit = 6) {
  // headers() is async in Next.js 15
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/bookings?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch bookings");

  return res.json();
}

export default async function BookingsPage({ searchParams }) {
  // searchParams is also async
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const { bookings, totalPages } = await getBookings(page);

  return (
    <BookingList
      bookings={bookings}
      currentPage={page}
      totalPages={totalPages}
    />
  );
}
