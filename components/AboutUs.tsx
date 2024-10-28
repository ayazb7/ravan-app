import React from "react";
import bgImage from "@/logos/about-bg.jpg"; // Import the image

const AboutUs = () => {
  return (
    <div
      className="relative h-[100vh] w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage.src})` }} // Use the imported image
    >
      {/* Text Container */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
        <p className="md:text-lg text-sm text-white">About Ravan</p>{" "}
        {/* Smaller "About Ravan" text */}
        <p className="text-4xl md:text-6xl text-white font-bold">Who We Are</p>
        <p
          className="text-sm md:text-lg text-white max-w-4xl leading-8 mt-4"
          style={{ marginTop: "3rem" }}
        >
          Welcome to Ravan Real Estate, your trusted partner in Dubai's property
          market. Whether you're seeking residential, commercial, or off-plan
          properties, we offer expert guidance and a seamless experience.
          Established in 2024, we are dedicated to helping you find the perfect
          fit in Dubai's real estate landscape.
        </p>
        {/* Contact Button */}
        <button
          className="text-black bg-white px-8 py-3 rounded-md font-semibold"
          style={{ marginTop: "5rem" }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
