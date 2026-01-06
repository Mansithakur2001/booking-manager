import Header from "@/components/Header";
import "./globals.css";

export const metadata = { title: "JustWravel Booking Manager" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Header /> {/* client component */}
        {/* <main className="max-w-6xl mx-auto px-6 py-10">{children}</main> */}
        <main className="max-w-6xl mx-auto px-6 py-10 mt-4">{children}</main>

      </body>
    </html>
  );
}
