// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-6">
//       <h1 className="text-3xl font-bold">Simple Booking Manager</h1>

//       <div className="flex gap-4">
//         <Link
//           href="/bookings"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           View Bookings
//         </Link>

//         <Link
//           href="/bookings/create"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Create Booking
//         </Link>
//       </div>
//     </div>
//   );
// }


import { redirect } from "next/navigation";

export default function Home() {
  redirect("/bookings");
}
