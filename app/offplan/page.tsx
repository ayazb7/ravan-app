// app/commercial/page.tsx (assuming this file structure)
import PropertyFilters from "@/components/PropertyFilters";
import FilteredProperties from "@/components/FilteredProperties";
import SearchBg from "@/logos/projectsBg.jpg";
import Link from "next/link";

interface SearchParams {
  bedrooms?: string;
  priceRange?: string;
  propertyType?: string;
  paymentPlan?: string;
  projectDelivery?: string;
  developer?: string;
}

// Server-side data fetching
async function fetchProperties(searchParams: SearchParams) {
  const {
    bedrooms,
    priceRange,
    propertyType,
    paymentPlan,
    projectDelivery,
    developer,
  } = searchParams;

  try {
    const response = await fetch(
      `https://yassin811-app.vercel.app/api/offplan?bedrooms=${
        bedrooms || ""
      }&priceRange=${priceRange || ""}&propertyType=${
        propertyType || ""
      }&paymentPlan=${paymentPlan || ""}&projectDelivery=${
        projectDelivery || ""
      }&developer=${developer || ""}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    const data = await response.json();
    return data.properties || [];
  } catch (err) {
    console.error("Error fetching properties:", err);
    return [];
  }
}

const OffplanProjectsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  // Fetch properties on the server side
  const properties = await fetchProperties(searchParams);

  return (
    <div className="flex flex-col bg-black items-center">
      <div
        className="relative h-[80vh] w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${SearchBg.src})` }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          <p className="text-lg text-white hover:font-extrabold">
            <Link href="/">Home</Link> / <Link href="/offplan">Offplan</Link>
          </p>
          <h1 className="text-4xl text-white font-bold">Off Plan Projects</h1>
          <p className="text-xl text-white max-w-4xl leading-8 mt-4 w-[70vw]">
            Something about commercial properties and Page
          </p>
          <PropertyFilters />
        </div>
      </div>
      <FilteredProperties initialProperties={properties} />
    </div>
  );
};

export default OffplanProjectsPage;
