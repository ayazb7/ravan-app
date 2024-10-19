"use client";
import React, { useState, useEffect } from "react";
import { StaticImageData } from 'next/image';
import CardProp from "@/components/CardProp";


// Define the type for a property
interface Property {
  _id: string;
  photoUrl: string;
  price: number;
  address: string;
  bedrooms: number; // Add other fields as needed
}

// Define the type for the props
interface FilteredPropertiesProps {
  initialProperties: Property[];
}

const FilteredProperties: React.FC<FilteredPropertiesProps> = ({
  initialProperties,
}) => {
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(initialProperties);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching data when component mounts or filters change
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api"); // Replace with your correct API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setFilteredProperties(data.properties || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading properties...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!filteredProperties.length) {
    return <p>No commercial properties found.</p>;
  }

  return (
    <div className="flex my-10 items-center justify-center xl:grid-cols-4 grid-cols-2 w-[70vw]">
      <div className="space-y-4">
        {filteredProperties.map((property) => (
          <CardProp
            imageSrc={property.photoUrl}
            basePrice={property.price}
            details={`Number of bedroom ${property.bedrooms}`}
            address={property.address}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProperties;
