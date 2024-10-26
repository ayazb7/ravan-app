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
  const [bedrooms, setBedrooms] = useState("Bedrooms");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [paymentPlan, setPaymentPlan] = useState("Payment Plan");
  const [projectDelivery, setProjectDelivery] = useState("Project Delivery");
  const [developer, setDeveloper] = useState("Developer");

  const handleBedroomsSelect = (key: string) => setBedrooms(key);
  const handlePriceRangeSelect = (key: string) => setPriceRange(key);
  const handlePropertyTypeSelect = (key: string) => setPropertyType(key);
  const handlePaymentPlanSelect = (key: string) => setPaymentPlan(key);
  const handleProjectDeliverySelect = (key: string) => setProjectDelivery(key);
  const handleDeveloperSelect = (key: string) => setDeveloper(key);

  useEffect(() => {
    const query = [
      bedrooms && `bedrooms=${bedrooms}`,
      priceRange && `priceRange=${priceRange}`,
      propertyType && `propertyType=${propertyType}`,
      paymentPlan && `paymentPlan=${paymentPlan}`,
      projectDelivery && `projectDelivery=${projectDelivery}`,
      developer && `developer=${developer}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/commercial?${query}`);
  }, [
    bedrooms,
    priceRange,
    propertyType,
    paymentPlan,
    projectDelivery,
    developer,
  ]);

  return (
    <div className="flex space-x-2 border-2 bg-black text-white p-2 rounded-md">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{bedrooms}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Bedrooms"
          style={{
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
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
          <DropdownItem key="4+" onClick={() => handleBedroomsSelect("4")}>
            4+
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
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
          }}
        >
          <DropdownItem
            key="$0 - $1,000"
            onClick={() => handlePriceRangeSelect("1")}
          >
            Less than $1 M
          </DropdownItem>
          <DropdownItem
            key="$1,000 - $2,000"
            onClick={() => handlePriceRangeSelect("2")}
          >
            Less Than 2 M
          </DropdownItem>
          <DropdownItem
            key="$2,000 - $3,000"
            onClick={() => handlePriceRangeSelect("5")}
          >
            Less than 5 M
          </DropdownItem>
          <DropdownItem
            key="$2,000 - $3,000"
            onClick={() => handlePriceRangeSelect("10")}
          >
            Less than 10 M
          </DropdownItem>
          <DropdownItem
            key="$2,000 - $3,000"
            onClick={() => handlePriceRangeSelect("100")}
          >
            More than 10 M
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
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
          }}
        >
          <DropdownItem
            key="Apartment"
            onClick={() => handlePropertyTypeSelect("Apartment")}
          >
            Apartment
          </DropdownItem>
          <DropdownItem
            key="villa"
            onClick={() => handlePropertyTypeSelect("villa")}
          >
            Villa
          </DropdownItem>
          <DropdownItem
            key="studio"
            onClick={() => handlePropertyTypeSelect("studio")}
          >
            Studio
          </DropdownItem>
          <DropdownItem
            key="penthouse"
            onClick={() => handlePropertyTypeSelect("penthouse")}
          >
            Penthouse
          </DropdownItem>
          <DropdownItem
            key="lagoon"
            onClick={() => handlePropertyTypeSelect("lagoon")}
          >
            Lagoon
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{paymentPlan}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Payment Plan"
          style={{
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
          }}
        >
          <DropdownItem
            key="Monthly"
            onClick={() => handlePaymentPlanSelect("60/40")}
          >
            60/40
          </DropdownItem>
          <DropdownItem
            key="Quarterly"
            onClick={() => handlePaymentPlanSelect("70/30")}
          >
            70/30
          </DropdownItem>
          <DropdownItem
            key="Yearly"
            onClick={() => handlePaymentPlanSelect("80/20")}
          >
            80/20
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{projectDelivery}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Project Delivery"
          style={{
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
          }}
        >
          <DropdownItem
            key="2023"
            onClick={() => handleProjectDeliverySelect("2023")}
          >
            2023
          </DropdownItem>
          <DropdownItem
            key="2024"
            onClick={() => handleProjectDeliverySelect("2024")}
          >
            2024
          </DropdownItem>
          <DropdownItem
            key="2025"
            onClick={() => handleProjectDeliverySelect("2025")}
          >
            2025
          </DropdownItem>
          <DropdownItem
            key="2025"
            onClick={() => handleProjectDeliverySelect("2026")}
          >
            2026
          </DropdownItem>
          <DropdownItem
            key="2025"
            onClick={() => handleProjectDeliverySelect("2027")}
          >
            2027
          </DropdownItem>
          <DropdownItem
            key="2025"
            onClick={() => handleProjectDeliverySelect("2028")}
          >
            2028
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{developer}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Developer"
          style={{
            backgroundColor: "#2e2e2e",
            width: "150px",
            color: "#ffffff",
          }}
        >
          <DropdownItem
            key="Developer A"
            onClick={() => handleDeveloperSelect("Sobha")}
          >
            Sobha
          </DropdownItem>
          <DropdownItem
            key="Developer B"
            onClick={() => handleDeveloperSelect("Danube")}
          >
            Danube
          </DropdownItem>
          <DropdownItem
            key="Developer C"
            onClick={() => handleDeveloperSelect("Binghatti")}
          >
            Binghatti
          </DropdownItem>
          <DropdownItem
            key="Developer C"
            onClick={() => handleDeveloperSelect("Damac")}
          >
            Damac
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default PropertyFilters;
