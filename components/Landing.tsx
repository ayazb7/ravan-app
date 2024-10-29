import Image from "@/node_modules/next/image";
import React from "react";
import bg from "@/logos/homephoto.png";
import Video from "next-video";
import "@/app/globals.css";
import videoLoop from "@/videos/bg6.mp4";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="video-wrapper ">
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="video"
        ></Video>
        <div className="video-overlay"></div>
      </div>
      <div className="absolute flex flex-col items-center justify-center">
        <h1 className="text-white font-black md:text-4xl text-base w-[65vw] md:w-[100vw]  text-center mb-8">
          Turning Property Dreams into Reality
        </h1>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-4 md:space-y-0 md:flex-nowrap">
          <Link href="/commercial">
            <button className="btn-custom hover:bg-black hover:rounded-lg">
              Commercial
            </button>
          </Link>
          <button className="btn-custom hover:bg-black hover:rounded-lg">
            Residential
          </button>
          <button className="btn-custom hover:bg-black hover:rounded-lg">
            Off Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
