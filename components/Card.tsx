"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  imageSrc: StaticImageData;
  text: string;
  content: string;
  redirectUrl: string;
  borderRadiusClass?: string; // Optional prop to set border radius class
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  text,
  content,
  redirectUrl,
  borderRadiusClass,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden shadow-lg cursor-pointer ${borderRadiusClass} flex-shrink-0 flex-grow-0`} // Ensure square shape
      style={{ maxWidth: "350px", maxHeight: "350px" }} // Max size constraints
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = redirectUrl)}
    >
      <div className="relative w-full h-full aspect-square">
        {" "}
        {/* Ensures the card stays square */}
        <Image
          src={imageSrc}
          alt={text}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-[#040D16]/65 flex flex-col items-start justify-end p-4 text-white transition-opacity duration-500 ${
            isHovered ? "opacity-90" : "opacity-0"
          }`}
        >
          <p className="text-2xl font-semibold mb-1">{text}</p>
          <p className="text-lg text-green-500">{content}</p>
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        {!isHovered && (
          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold transition-transform duration-500">
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
