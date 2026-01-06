import BookingList from "@/components/BookingList";

async function getBookings(page = 1, limit = 6) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function BookingsPage({ searchParams: rawSearchParams }) {
  // Await the searchParams first
  const searchParams = await rawSearchParams;

  const page = parseInt(searchParams?.page) || 1;

  const bookingsData = await getBookings(page);
  const { bookings, totalPages } = bookingsData;

  return (
    <BookingList bookings={bookings} currentPage={page} totalPages={totalPages} />
  );
}
