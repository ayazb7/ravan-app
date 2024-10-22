import Property from "@/app/models/Property";
import { NextResponse } from "next/server";
import { parse } from "url";
export async function GET() {
  try {
    const properties = await Property.find({ developer: "Sobha" });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Property.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
