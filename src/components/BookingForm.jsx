"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) setError(data.error);
    else router.push("/bookings");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Create Booking</h2>

      {error && <p className="bg-red-100 text-red-600 p-2 rounded mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Booking
        </button>
      </form>
    </div>
  );
}
