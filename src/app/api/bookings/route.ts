import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { startOfDay } from "date-fns";

const bookingsFilePath = path.join(process.cwd(), "data", "bookings.json");
const slotsFilePath = path.join(process.cwd(), "data", "slots.json");

export async function POST(req: NextRequest) {
  try {
    const bookingData = await req.json();
    const { date, time } = bookingData;

    const today = new Date();
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return NextResponse.json(
        { success: false, error: "Cannot book a past date." },
        { status: 400 }
      );
    }

    // Read existing bookings
    let bookings = [];
    let slots: Record<string, string[]> = {};

    try {
      const data = await fs.readFile(bookingsFilePath, "utf-8");
      bookings = JSON.parse(data);
    } catch (err) {
      // File might not exist; proceed with empty bookings
    }

    // Add new booking
    bookings.push({ ...bookingData, submissionDate: new Date().toISOString() });

    // Write updated bookings to file
    await fs.writeFile(bookingsFilePath, JSON.stringify(bookings, null, 2));

    //get slots
    try {
      const data = await fs.readFile(slotsFilePath, "utf-8");
      slots = JSON.parse(data);
    } catch (err) {
      //no slots
    }

    //remove slots that was booked
    const dateKey = new Date(date).toISOString().split("T")[0];
    if (slots[dateKey]) {
      console.log(slots[dateKey])
      console.log(time)
      slots[dateKey] = slots[dateKey].filter((t) => t !== time);
      console.log(slots[dateKey])

      // If no times left for that day, remove the date key
      // if (slots[dateKey].length === 0) {
      //   console.log(dateKey)
      //   delete slots[dateKey];
      // }
    }

    await fs.writeFile(slotsFilePath, JSON.stringify(slots, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
export async function GET() {
  try {
    const data = await fs.readFile(bookingsFilePath, "utf-8");
    const bookings = JSON.parse(data);
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
