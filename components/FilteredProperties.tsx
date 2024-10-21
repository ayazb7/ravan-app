import React from "react";
import CardProp from "@/components/CardProp";

// Define the type for a property
interface Property {
  _id: string;
  photoUrl: string;
  price: number;
  address: string;
  bedrooms: number;
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
    <div className="flex my-10 items-center justify-center xl:grid-cols-4 grid-cols-2 w-[70vw]">
      <div className="space-y-4">
        {initialProperties.map((property) => (
          <CardProp
            key={property._id}
            imageSrc={property.photoUrl}
            basePrice={property.price}
            details={`Number of bedrooms: ${property.bedrooms}`}
            address={property.address}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProperties;
