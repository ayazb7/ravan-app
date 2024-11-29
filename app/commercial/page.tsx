// app/commercial/page.tsx (assuming this file structure)
import PropertyFilters from "@/components/PropertyFilters";
import FilteredProperties from "@/components/FilteredProperties";
import SearchBg from "@/logos/projectsBg.jpg";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";
import RegisterInterest from "@/components/RegisterInterest";

interface SearchParams {
  bedrooms?: string;
  priceRange?: string;
  propertyType?: string;
  paymentPlan?: string;
  projectDelivery?: string;
  developer?: string;
}

// Server-side data fetching
// async function fetchProperties(searchParams: SearchParams) {
//   const {
//     bedrooms,
//     priceRange,
//     propertyType,
//     paymentPlan,
//     projectDelivery,
//     developer,
//   } = searchParams;

// //   try {
// //     const response = await fetch(
// //       `http://localhost:3000/api/commercial?bedrooms=${
// //         bedrooms || ""
// //       }&priceRange=${priceRange || ""}&propertyType=${
// //         propertyType || ""
// //       }&paymentPlan=${paymentPlan || ""}&projectDelivery=${
// //         projectDelivery || ""
// //       }&developer=${developer || ""}`,
// //       { cache: "no-store" }
// //     );
// //     if (!response.ok) {
// //       throw new Error("Failed to fetch properties");
// //     }
// //     const data = await response.json();
// //     return data.properties || [];
// //   } catch (err) {
// //     console.error("Error fetching properties:", err);
// //     return [];
// //   }
// }

const CommercialPropertiesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  // Fetch properties on the server side
  //   const properties = await fetchProperties(searchParams);

  return (
    <div className="flex flex-col bg-black items-center">
      <div
        className="relative h-[80vh] w-full md:bg-fixed bg-scroll bg-center bg-cover"
        style={{ backgroundImage: `url(${SearchBg.src})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          <p className="text-lg text-white hover:font-extrabold">
            <Link href="/">Home</Link> /{" "}
            <Link href="/commercial">Commercial</Link>
          </p>
          <h1 className="text-4xl text-white font-bold">Commercial Projects</h1>
          <p className="text-xl text-white max-w-4xl leading-8 mt-4 w-[70vw]">
            Unlock the potential of commercial properties to grow your business,
            invest in premium spaces, or find the perfect spot for your
            enterprise. Though these properties aren’t available yet, you can
            register your interest below to be notified as soon as they become
            accessible. Don’t miss the opportunity to be among the first to
            know!
          </p>
          {/* <PropertyFilters /> */}
        </div>
      </div>
      <RegisterInterest />
      {/* <FilteredProperties initialProperties={properties} /> */}
    </div>
  );
};

export default CommercialPropertiesPage;
