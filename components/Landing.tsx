import Image from "@/node_modules/next/image";
import React from "react";
import bg from "@/logos/homephoto.png";
import Video from "next-video";
import "@/app/globals.css";

import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="video-wrapper ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/bg6.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="absolute flex flex-col items-center justify-center w-[80]">
        <h1 className="text-white font-black md:text-4xl text-base w-[65vw]   text-center mb-8">
          Turning Property Dreams into Reality.
        </h1>
      </div>
    </div>
  );
};

export default Landing;
