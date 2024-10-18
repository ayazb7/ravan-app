import Property from "@/app/models/Property";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const properties = await Property.find({ type: "commercial" });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
