import PropertyFilters from "@/components/PropertyFilters";
import FilteredProperties from "@/components/FilteredProperties";
import SearchBg from "@/logos/Searchbg.png";
import Link from "next/link";

interface SearchParams {
  bedrooms?: string;
  priceRange?: string;
  propertyType?: string;
  paymentPlan?: string;
  projectDelivery?: string;
  developer?: string;
}

const CommercialPropertiesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const {
    bedrooms,
    priceRange,
    propertyType,
    paymentPlan,
    projectDelivery,
    developer,
  } = searchParams;

  // Fetch properties server-side based on the `searchParams`
  const fetchProperties = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/commercial?bedrooms=${
          bedrooms || ""
        }&priceRange=${priceRange || ""}&propertyType=${
          propertyType || ""
        }&paymentPlan=${paymentPlan || ""}&projectDelivery=${
          projectDelivery || ""
        }&developer=${developer || ""}`
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
  };

  const properties = await fetchProperties();

  return (
    <div className="flex flex-col bg-black items-center">
      <div
        className="relative h-[80vh] w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${SearchBg.src})` }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          <p className="text-lg text-white hover:font-extrabold">
            <Link href="/">Home</Link> /{" "}
            <Link href="/Commercial">Commercial</Link>
          </p>
          <h1 className="text-6xl text-white font-bold">
            Commercial Properties
          </h1>
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

export default CommercialPropertiesPage;
