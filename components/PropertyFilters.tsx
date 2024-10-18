"use client";
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "@/node_modules/next/navigation";

const PropertyFilters = () => {
  const router = useRouter();
  const [location, setLocation] = useState("Location");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [bedrooms, setBedrooms] = useState("Bedrooms");

  const handleLocationSelect = (key) => setLocation(key);
  const handlePropertyTypeSelect = (key) => setPropertyType(key);
  const handlePriceRangeSelect = (key) => setPriceRange(key);
  const handleBedroomsSelect = (key) => setBedrooms(key);
  useEffect(() => {
    const query = [
      location && `location=${location}`,
      propertyType && `propertyType=${propertyType}`,
      priceRange && `priceRange=${priceRange}`,
      bedrooms && `bedrooms=${bedrooms}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/commercial?${query}`);
  }, [location, propertyType, priceRange, bedrooms]);

  return (
    <div className="flex space-x-2 border-2 bg-black text-white p-2 rounded-md">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{location}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Location"
          style={{
            backgroundColor: "#2e2e2e", // Dark gray background
            width: "150px", // Increase the width of the dropdown menu
            color: "#ffffff", // White text for the entire menu
          }}
        >
          <DropdownItem
            key="New York"
            onClick={() => handleLocationSelect("New York")}
          >
            New York
          </DropdownItem>
          <DropdownItem
            key="Los Angeles"
            onClick={() => handleLocationSelect("Los Angeles")}
          >
            Los Angeles
          </DropdownItem>
          <DropdownItem
            key="Chicago"
            onClick={() => handleLocationSelect("Chicago")}
          >
            Chicago
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{propertyType}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Property Type"
          style={{
            backgroundColor: "#2e2e2e", // Dark gray background
            width: "150px", // Increase the width of the dropdown menu
            color: "#ffffff", // White text for the entire menu
          }}
        >
          <DropdownItem
            key="Apartment"
            onClick={() => handlePropertyTypeSelect("Apartment")}
          >
            Apartment
          </DropdownItem>
          <DropdownItem
            key="House"
            onClick={() => handlePropertyTypeSelect("House")}
          >
            House
          </DropdownItem>
          <DropdownItem
            key="Condo"
            onClick={() => handlePropertyTypeSelect("Condo")}
          >
            Condo
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{priceRange}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Price Range"
          style={{
            backgroundColor: "#2e2e2e", // Dark gray background
            width: "150px", // Increase the width of the dropdown menu
            color: "#ffffff", // White text for the entire menu
          }}
        >
          <DropdownItem
            key="$0 - $1,000"
            onClick={() => handlePriceRangeSelect("$0 - $1,000")}
          >
            $0 - $1,000
          </DropdownItem>
          <DropdownItem
            key="$1,000 - $2,000"
            onClick={() => handlePriceRangeSelect("$1,000 - $2,000")}
          >
            $1,000 - $2,000
          </DropdownItem>
          <DropdownItem
            key="$2,000 - $3,000"
            onClick={() => handlePriceRangeSelect("$2,000 - $3,000")}
          >
            $2,000 - $3,000
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{bedrooms}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Bedrooms"
          style={{
            backgroundColor: "#2e2e2e", // Dark gray background
            width: "150px", // Increase the width of the dropdown menu
            color: "#ffffff", // White text for the entire menu
          }}
        >
          <DropdownItem key="1" onClick={() => handleBedroomsSelect("1")}>
            1
          </DropdownItem>
          <DropdownItem key="2" onClick={() => handleBedroomsSelect("2")}>
            2
          </DropdownItem>
          <DropdownItem key="3" onClick={() => handleBedroomsSelect("3")}>
            3
          </DropdownItem>
          <DropdownItem key="4+" onClick={() => handleBedroomsSelect("4+")}>
            4+
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default PropertyFilters;
