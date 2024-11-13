import React from "react";
import videoLoop from "@/videos/bg6.mp4";
import Video from "next-video";
import Link from "next/link";
import binghatti from "@/logos/binghatti5.png";
import sobha from "@/logos/sobha.png";
import damac from "@/logos/damac.png";
import danbure from "@/logos/danbure.png";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <div className="h-full bg-black">
      <div className="video-wrapper2">
        <Video
          src={videoLoop}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="video2"
        />
        <div className="video-overlay"></div>
      </div>
      <div className="absolute left-10 top-[40%] flex gap-x-5 ">
        <p className="mt-4 text-base text-white hover:font-extrabold">
          <Link href="/">Home</Link> /{" "}
          <Link href="/developers">Developers</Link>
        </p>
        <h1 className="text-white font-bold text-4xl">Developers</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-white mt-20 text-3xl font-bold ">
          Get to Know Our Developers
        </h2>
        <div className="w-[75vw] my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 gap-x-5 gap-y-10">
          <Link href="developer/binghatti" passHref>
            <img src={binghatti.src} alt="binghatti" />
          </Link>
          <Link href="developer/sobha" passHref>
            <img src={sobha.src} alt="sobha" />
          </Link>
          <Link href="developer/damac" passHref>
            <img src={damac.src} alt="damac" />
          </Link>
          <Link href="developer/danube" passHref>
            <img src={danbure.src} alt="danube" />
          </Link>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default page;
