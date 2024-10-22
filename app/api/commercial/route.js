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

    // Parse price range and convert to a numeric value for comparison
    if (priceRange && priceRange !== "Price Range") {
      const maxPrice = parseFloat(priceRange.replace(/[^0-9.]/g, ""));
      if (!isNaN(maxPrice)) {
        query.price = { $lte: maxPrice }; // Match properties with a price less than or equal to `maxPrice`
      }
    }

    // Use regex for substring matching for propertyType, projectDelivery, and developer
    if (propertyType && propertyType !== "Property Type") {
      query.propertyType = { $regex: propertyType, $options: "i" }; // Case-insensitive match
    }
    if (projectDelivery && projectDelivery !== "Project Delivery") {
      query.delivery = { $regex: projectDelivery, $options: "i" };
    }
    if (developer && developer !== "Developer") {
      query.developer = { $regex: developer, $options: "i" };
    }

    if (paymentPlan && paymentPlan !== "Payment Plan") {
      query.paymentPlan = paymentPlan;
    }

    console.log("Constructed query:", query);

    // Fetch properties based on the constructed query object, adding type as a default
    const properties = await Property.find({ type: "commercial", ...query });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
