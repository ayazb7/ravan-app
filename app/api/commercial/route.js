import Property from "@/app/models/Property";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);

    // Extract query parameters and remove any that are default or empty
    const query = {};
    const bedrooms = searchParams.get("bedrooms");
    const priceRange = searchParams.get("priceRange");
    const propertyType = searchParams.get("propertyType");
    const paymentPlan = searchParams.get("paymentPlan");
    const projectDelivery = searchParams.get("projectDelivery");
    const developer = searchParams.get("developer");

    // Check for non-default or non-empty values before adding them to the query
    if (bedrooms && bedrooms !== "Bedrooms") {
      query.bedrooms = bedrooms;
    }
    if (priceRange && priceRange !== "Price Range") {
      query.priceRange = priceRange;
    }
    if (propertyType && propertyType !== "Property Type") {
      query.propertyType = propertyType;
    }
    if (paymentPlan && paymentPlan !== "Payment Plan") {
      query.paymentPlan = paymentPlan;
    }
    if (projectDelivery && projectDelivery !== "Project Delivery") {
      query.projectDelivery = projectDelivery;
    }
    if (developer && developer !== "Developer") {
      query.developer = developer;
    }

    // Fetch properties based on the constructed query object, adding type as a default
    const properties = await Property.find({ type: "commercial" });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
