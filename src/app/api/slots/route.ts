import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { startOfDay } from 'date-fns';

const filePath = path.join(process.cwd(), 'data', 'slots.json');

export async function GET() {
  try {
    const fileData = await fs.readFile(filePath, 'utf8');
    const slots = JSON.parse(fileData);
    return NextResponse.json(slots);
  } catch (error) {
    return NextResponse.json({}, { status: 200 }); // Return empty object if file doesn't exist yet
  }
}

export async function POST(req: NextRequest) {
  try {
    const newSlots = await req.json();
    const now = new Date();

    // Validate all keys are not in the past
    for (const dateKey of Object.keys(newSlots)) {
      const date = new Date(dateKey);
      console.log("satart of day", startOfDay(now))
            console.log("date", date)

      if (date < startOfDay(now)) {
        return NextResponse.json(
          { success: false, error: "Cannot set availability in the past." },
          { status: 400 }
        );
      }
    }

    await fs.writeFile(filePath, JSON.stringify(newSlots, null, 2));
    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}