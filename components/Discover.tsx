import React, { useState } from "react";
import CardProp from "@/components/CardProp";
import bg from "@/logos/cardImage.png";

const Discover = () => {
  // State to track the active button (initially 'To Rent')
  const [activeButton, setActiveButton] = useState<"rent" | "sale">("rent");

  return (
    <div
      className="bg-black w-full flex flex-col items-center justify-center py-16"
      style={{ paddingBottom: "8rem" }}
    >
      <h2
        className="text-center text-6xl text-white font-bold"
        style={{ marginTop: "5rem" }}
      >
        Discover Properties in Dubai
      </h2>

      {/* Buttons */}
      <div className="flex space-x-4 mb-12" style={{ marginTop: "4rem" }}>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            activeButton === "rent"
              ? "bg-white text-black"
              : "bg-black text-white border border-white hover:bg-white hover:text-black"
          }`}
          onClick={() => setActiveButton("rent")}
        >
          To Rent
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            activeButton === "sale"
              ? "bg-white text-black"
              : "bg-black text-white border border-white hover:bg-white hover:text-black"
          }`}
          onClick={() => setActiveButton("sale")}
        >
          For Sale
        </button>
      </div>

      {/* Property Cards */}
      <div className="flex w-full h-full items-center justify-center space-x-10">
        <CardProp
          key={"33"}
          status={"property.status"}
          bedrooms={"property.bedrooms"}
          price={3}
          photoUrl={"/cardImage"}
          delivery={"ahlfh"}
          developer={"property.developer"}
          paymentPlan={"property.paymentPlan"}
          propertyType={"property.propertyType"}
        />
        <CardProp
          key={"11"}
          status={"property.status"}
          bedrooms={"property.bedrooms"}
          price={1}
          photoUrl={"/cardImage"}
          delivery={"ahlfh"}
          developer={"property.developer"}
          paymentPlan={"property.paymentPlan"}
          propertyType={"property.propertyType"}
        />

        <CardProp
          key={"123"}
          status={"property.status"}
          bedrooms={"property.bedrooms"}
          price={24}
          photoUrl={"/cardImage"}
          delivery={"ahlfh"}
          developer={"property.developer"}
          paymentPlan={"property.paymentPlan"}
          propertyType={"property.propertyType"}
        />
      </div>
    </div>
  );
};

export default Discover;
