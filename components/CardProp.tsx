"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useCurrency } from "@/context/currencyContext";
import useEmblaCarousel from "embla-carousel-react";

interface CardProps {
  type: string;
  status: string;
  bedrooms: string;
  price: number;
  photoUrl: string; // Base path to the folder containing images, e.g., "/images/properties"
  address: string | undefined;
  delivery: string;
  developer: string;
  paymentPlan: string;
  project: string;
  propertyType: string;
}

const CardProp: React.FC<CardProps> = ({
  type,
  status,
  bedrooms,
  price,
  photoUrl,
  address,
  delivery,
  developer,
  paymentPlan,
  project,
  propertyType,
}) => {
  price = price * 1000000;
  const { currency, conversionRates } = useCurrency();
  const [convertedPrice, setConvertedPrice] = useState(price);
  const [currencySymbol, setCurrencySymbol] = useState("AED");
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [isHovered, setIsHovered] = useState(false);

  // Construct paths for images
  const photos = [
    `${photoUrl}/image1.png`,
    `${photoUrl}/image2.png`,
    `${photoUrl}/image3.png`,
  ];

  useEffect(() => {
    if (conversionRates && conversionRates[currency]) {
      setConvertedPrice(price * conversionRates[currency]);
      setCurrencySymbol(currency);
    }
  }, [currency, price, conversionRates]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className={`relative overflow-hidden shadow-lg cursor-pointer rounded-2xl flex flex-col`}
      style={{ width: "350px", height: "550px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Section */}
      <div className="relative w-full h-1/2" ref={emblaRef}>
        <div className="flex">
          {photos.map((src, index) => (
            <div className="relative flex-[0_0_100%] w-full h-full" key={index}>
              <Image
                src={src}
                alt={`property image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
          onClick={scrollPrev}
        >
          ‹
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
          onClick={scrollNext}
        >
          ›
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-[#2A2A2A] text-white p-4 flex flex-col justify-between h-1/2">
        <div className="text-start">
          <p className="text-2xl font-bold mb-2">
            Price {currencySymbol} {convertedPrice}{" "}
            {status === "For Sale" ? "" : "p/m"}
          </p>
          <p className="text-lg font-medium">Bedrooms: {bedrooms}</p>
          <p className="text-base font-medium">{propertyType}</p>
          <p className="text-base font-medium">
            To be delivered by: {delivery}
          </p>
          <p className="text-base font-medium">Developer: {developer}</p>
          <p className="text-base font-medium">Payment plan: {paymentPlan}</p>
        </div>

        {/* Adjusted Buttons */}
        <div className="flex space-x-4 mt-4">
          <button className="border border-white text-white bg-transparent py-2 px-4 rounded-full w-1/2 hover:bg-white hover:text-black transition-colors duration-300">
            Contact
          </button>
          <button className="bg-[#6EACDA] text-white py-2 px-4 rounded-full w-1/2 hover:bg-[#5998C7] transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProp;
