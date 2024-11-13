// pages/api/properties/[developer].ts
import Project from "@/app/models/Project";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const developer = searchParams.get("developer");

    if (!developer) {
      return NextResponse.json(
        { message: "Developer not specified" },
        { status: 400 }
      );
    }

    const properties = await Project.find({ developer });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.error("Error fetching properties:", err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Project.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (err) {
    console.error("Error creating ticket:", err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
