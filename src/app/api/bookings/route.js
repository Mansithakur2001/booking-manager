import connectDB from "@/lib/db";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

// GET all bookings with pagination
export async function GET(req) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 6;

    const total = await Booking.countDocuments();
    const totalPages = Math.ceil(total / limit);

    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({ bookings, totalPages });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// POST create booking
export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const { name, email, date, time } = data;

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const booking = await Booking.create({ name, email, date, time });
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}