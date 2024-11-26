// app/developer/[id]/page.tsx
import { FC } from "react";
import SearchBg from "@/logos/sobhaphoto.jpg";
import FilteredProperties from "@/components/FilteredProperties";
import { DEVS_INFO } from "@/data.js";
interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { id } = params;

  // Fetch properties based on the developer ID
  const fetchProperties = async () => {
    try {
      const response = await fetch(
        `https://yassin811-app.vercel.app//api/devs?developer=${id}`
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
  const developerInfo = DEVS_INFO[id as keyof typeof DEVS_INFO];

  return (
    <div className="flex flex-col bg-black items-center">
      <div
        className="relative h-[90vh] w-full bg-fixed bg-center bg-cover "
        style={{ backgroundImage: `url(${SearchBg.src})` }}
      >
        <div className="video-overlay"></div>
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4 ">
          <p className="md:text-lg text-base text-white hover:font-extrabold brightness-200">
            About {id}
          </p>
          <h1 className="md:text-4xl text-3xl  text-white font-bold brightness-200">
            {id} Properties
          </h1>
          <p className="md:text-xl text-sm text-white max-w-4xl leading-5 md:leading-8 mt-4 w-[70vw] brightness-200">
            {developerInfo
              ? developerInfo
              : "Developer information not available."}
          </p>
        </div>
      </div>

      <FilteredProperties initialProperties={properties} />
    </div>
  );
};

export default ProductPage;
