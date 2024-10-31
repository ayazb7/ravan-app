import Project from "@/app/models/Project";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);

    // Extract query parameters
    const {
      bedrooms,
      priceRange,
      propertyType,
      paymentPlan,
      projectDelivery,
      developer,
      project,
    } = Object.fromEntries(searchParams.entries());

    // Construct the query object
    const query = {};

    // Bedrooms filtering: checks for "4+" condition and other values
    if (bedrooms && bedrooms !== "Bedrooms") {
      if (bedrooms === "4+") {
        query.projectProperties = { $regex: "[4-9]\\+?", $options: "i" };
      } else {
        query.projectProperties = { $regex: bedrooms, $options: "i" };
      }
    }

    // Price range filtering
    if (priceRange && priceRange !== "Price Range") {
      const maxPrice = parseFloat(priceRange.replace(/[^0-9.]/g, ""));
      if (!isNaN(maxPrice)) {
        query.startingPrice = { $lte: maxPrice };
      }
    }

    // Property type filtering
    if (propertyType && Type !== "Property Type") {
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
