"use client";

import React from "react";
import AboutUs from "@/components/AboutUs";
import Landing from "@/components/Landing";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Discover from "@/components/Discover";
import ContactUs from "@/components/ContactUs";
import ListProperty from "@/components/ListProperty";
import Image from "@/node_modules/next/image";
import whatsapp from "@/logos/whatsapp.png";
import Link from "@/node_modules/next/link";
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
      <div className="fixed bottom-5 left-5 w-[10vw]">
        <Link
          href="http://wa.me/971542002168"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={whatsapp} alt="WhatsApp button image" />
        </Link>
      </div>
    </div>
  );
}
