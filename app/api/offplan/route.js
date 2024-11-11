import Project from "@/app/models/Project";
import { NextResponse } from "next/server";

// Set the route to be dynamic
export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    // Create URL instance to access searchParams
    const url = new URL(req.url);
    const { searchParams } = url;
    const params = Object.fromEntries(searchParams); // Convert searchParams to a plain object

    // Extract query parameters
    const {
      bedrooms,
      priceRange,
      propertyType,
      paymentPlan,
      projectDelivery,
      developer,
      project,
    } = params;

    // Construct the query object
    const query = {};

    // Bedrooms filtering
    if (bedrooms && bedrooms !== "Bedrooms") {
      query.projectProperties = {
        $regex: bedrooms === "4+" ? "[4-9]\\+?" : bedrooms,
        $options: "i",
      };
    }

    // Price range filtering
    if (priceRange && priceRange !== "Price Range") {
      const maxPrice = parseFloat(priceRange.replace(/[^0-9.]/g, ""));
      if (!isNaN(maxPrice)) {
        query.startingPrice = { $lte: maxPrice };
      }
    }

    // Property type filtering
    if (propertyType && propertyType !== "Property Type") {
      query.projectProperties = {
        ...query.projectProperties,
        $regex: new RegExp(propertyType, "i"),
      };
    }

    // Project name filtering
    if (project && project !== "Project") {
      query.project = { $regex: project, $options: "i" };
    }

    // Other filters: project delivery, developer, and payment plan
    if (projectDelivery && projectDelivery !== "Project Delivery") {
      query.delivery = { $regex: projectDelivery, $options: "i" };
    }

    if (developer && developer !== "Developer") {
      query.developer = { $regex: developer, $options: "i" };
    }

    if (paymentPlan && paymentPlan !== "Payment Plan") {
      query.paymentPlan = paymentPlan;
    }

    // Fetch properties based on the constructed query object
    const properties = await Project.find({ type: "offplan", ...query });

    return NextResponse.json({ properties }, { status: 200 });
  } catch (err) {
    console.error("Error fetching properties:", err);
    return NextResponse.json(
      { message: "Error", error: err.message },
      { status: 500 }
    );
  }
}
