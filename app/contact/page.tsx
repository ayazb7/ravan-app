import React from "react";
import bg from "@/logos/contactBg.jpg";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";
const page = () => {
  return (
    <div className="bg-black items-center flex flex-col">
      <div
        className="relative h-[50vh] w-full md:bg-fixed bg-scroll bg-center bg-cover"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col items-center justify-center h-full text-center space-y-8 px-4">
          <p className="text-lg text-white hover:font-extrabold">
            <Link href="/">Home</Link> / <Link href="/contact">Contact Us</Link>
          </p>
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        </div>
      </div>
      <p className="text-white mt-20 md:text-xl text-lg text-center font-semibold">
        Fill the contact us from below to get in contact with us
      </p>
      <ContactUs />
    </div>
  );
};

export default page;
