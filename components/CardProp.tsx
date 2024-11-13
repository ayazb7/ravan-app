"use client";
import React, { useState, useEffect } from "react";
import { useCurrency } from "@/context/currencyContext";
import EmblaCarousel from "./EmblaCarousel2";
import Link from "next/link";

interface CardProps {
  status: string;
  bedrooms: string;
  price: number;
  delivery: string;
  developer: string;
  paymentPlan: string;
  propertyType: string;
  project: string;
  photoUrl: string; // This should be the folder name
}

const CardProp: React.FC<CardProps> = ({
  status,
  bedrooms,
  price,
  delivery,
  developer,
  paymentPlan,
  project,
  propertyType,
  photoUrl,
}) => {
  const { currency, conversionRates } = useCurrency();
  const [convertedPrice, setConvertedPrice] = useState(price * 1000000);
  const [currencySymbol, setCurrencySymbol] = useState("AED");
  const [isHovered, setIsHovered] = useState(false);
  const [slides, setSlides] = useState<string[]>([]);

  // Convert price based on currency and conversion rate
  useEffect(() => {
    if (conversionRates && conversionRates[currency]) {
      setConvertedPrice(price * 1000000 * conversionRates[currency]);
      setCurrencySymbol(currency);
    }
  }, [currency, price, conversionRates]);

  // Manually create image paths for slides
  useEffect(() => {
    if (photoUrl) {
      const slideImages = [
        `/${photoUrl}/1.jpg`,
        `/${photoUrl}/2.jpg`,
        `/${photoUrl}/3.jpg`,
        `/${photoUrl}/4.jpg`,
      ];
      setSlides(slideImages);
    }

    return () => {
      setSlides([]); // Clear slides on unmount or when photoUrl changes
    };
  }, [photoUrl]);

  return (
    <div
      className="relative overflow-hidden shadow-lg cursor-pointer  flex flex-col w-[27vw]  lg:h-[55vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-1/2">
        <EmblaCarousel slides={slides} options={{}} />
      </div>

      {/* Content Section */}
      <div className="bg-[#2A2A2A] text-white p-4 flex flex-col justify-between h-1/2">
        <div className="text-start">
          <p className="text-2xl font-bold">{project}</p>
          <p className="text-sm font-medium">by: {developer}</p>
          <div className="flex items-start">
            <p className="text-lg">Starting price:</p>
            <p className="text-lg font-medium text-white ml-1">
              {currencySymbol} {convertedPrice.toLocaleString()}
            </p>
          </div>

          <p className="text-base font-medium">Handover: {delivery}</p>
        </div>

        <div className="flex space-x-4 mt-4">
          <button className="border border-white text-white bg-transparent py-2 px-4 rounded-full w-1/2 hover:bg-white hover:text-black transition-colors duration-300">
            Contact
          </button>
          <Link
            href={`\projects?project=${project}&developer=${developer}&price=${price}&paymentPlan=${paymentPlan}&handover=${delivery}&photos=${photoUrl}`}
            className="w-[10vw]"
          >
            <button className="bg-[#6EACDA] text-white py-2 px-4 rounded-full w-full hover:bg-[#5998C7] transition-colors duration-300">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProp;
