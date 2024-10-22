import React from "react";
import CardProp from "@/components/CardProp";

// Define the type for a property
interface Property {
  _id: string;
  status: string;
  bedrooms: string;
  price: number;
  photoUrl: string;
  delivery: string;
  developer: string;
  paymentPlan: string;
  propertyType: string;
  // Add other fields as needed
}

// Define the type for the props
interface FilteredPropertiesProps {
  initialProperties: Property[];
}

const FilteredProperties: React.FC<FilteredPropertiesProps> = ({
  initialProperties,
}) => {
  if (!initialProperties.length) {
    return <p>No commercial properties found.</p>;
  }

  return (
    <div className="my-10 w-[75vw] flex-col items-center justify-center">
      <h2 className="mb-10 text-center text-white text-5xl font-semibold ">
        Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10">
        {initialProperties.map((property) => (
          <CardProp
            key={property._id}
            status={property.status}
            bedrooms={property.bedrooms}
            price={property.price}
            photoUrl={property.photoUrl}
            delivery={property.delivery}
            developer={property.developer}
            paymentPlan={property.paymentPlan}
            propertyType={property.propertyType}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProperties;
