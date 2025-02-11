import React from "react";

import Link from "next/link";

const AboutUs = () => {
  return (
    <div
      className="relative md:h-[85vh] h-[60vh] w-full md:bg-fixed bg-scroll bg-center bg-cover"
      style={{ backgroundImage: "url(/about-bg.jpg)" }} // Use the imported image
    >
      {/* Text Container */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
        <p className="md:text-lg text-sm text-white">About Ravan</p>{" "}
        {/* Smaller "About Ravan" text */}
        <p className="text-2xl md:text-4xl text-white font-bold">Who We Are</p>
        <p
          className="text-sm md:text-lg text-white max-w-4xl leadin-6 md:leading-8 mt-4"
          style={{ marginTop: "3rem" }}
        >
          Welcome to Ravan Real Estate, your trusted partner in Dubai's property
          market. Whether you're seeking residential, commercial, or off-plan
          properties, we offer expert guidance and a seamless experience.
          Established in 2024, we are dedicated to helping you find the perfect
          fit in Dubai's real estate landscape.
        </p>
        {/* Contact Button */}
        <Link
          className="text-black bg-white px-8 py-3 rounded-md font-semibold"
          style={{ marginTop: "5rem" }}
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
