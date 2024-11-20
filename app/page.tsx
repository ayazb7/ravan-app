"use client";

import React from "react";
import AboutUs from "@/components/AboutUs";
import Landing from "@/components/Landing";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

import ContactUs from "@/components/ContactUs";
import ListProperty from "@/components/ListProperty";

export default function Home() {
  return (
    <div className="flex-col items-center justify-center bg-black  w-full">
      <Landing />
      <Partners />
      <AboutUs />
      {/* <Services /> */}
      {/* <Discover /> */}
      {/* <ListProperty /> */}
      <ContactUs />
    </div>
  );
}
