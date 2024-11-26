"use client";
import React from "react";
import videoLoop from "@/videos/bg6.mp4";
import Video from "next-video";
import Link from "next/link";
import binghatti from "@/logos/binghatti5.png";
import sobha from "@/logos/sobha.png";
import damac from "@/logos/damac.png";
import danbure from "@/logos/danbure.png";
import ContactUs from "@/components/ContactUs";
import Partners from "@/components/Partners";
import EmblaCarousel from "@/components/EmblaCarousel";
import { useRouter } from "@/node_modules/next/navigation";
const page = () => {
  const router = useRouter();
  const SLIDES = [
    <img
      src={binghatti.src}
      alt="binghatti"
      onClick={() => router.push("/developer/Binghatti")}
    />,
    <img
      src={sobha.src}
      alt="sobha"
      onClick={() => router.push("/developer/Sobha")}
    />,
    <img
      src={damac.src}
      alt="damac"
      onClick={() => router.push("/developer/DAMAC")}
    />,
    <img
      src={danbure.src}
      alt="danbure"
      onClick={() => router.push("/developer/Danube")}
    />,
  ];
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
        <h1 className="text-white font-bold text-4xl">Developers</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-white text-center my-10 text-2xl font-bold ">
          Get to Know Our Developers
        </h2>
        {/* <div className="w-[75vw] my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 gap-x-5 gap-y-10">
          <Link href="developer/Binghatti" passHref>
            <img src={binghatti.src} alt="binghatti" />
          </Link>
          <Link href="developer/Sobha" passHref>
            <img src={sobha.src} alt="sobha" />
          </Link>
          <Link href="developer/DAMAC" passHref>
            <img src={damac.src} alt="damac" />
          </Link>
          <Link href="developer/Danube" passHref>
            <img src={danbure.src} alt="danube" />
          </Link>
        </div> */}
        <p className="text-base mb-16 text-white w-[90vw] md:w-[64vw] text-center">
          Dubai is home to some of the most renowned developers, shaping the
          city's skyline with innovative designs and world class developments.
          known for their commitment to luxury, quality, and excellence, these
          developers create iconic residential and commercial projects that
          offer exceptional lifestyle experiences and investment opportunities.
        </p>
        <EmblaCarousel slides={SLIDES} options={{ loop: true }} />
      </div>
      <ContactUs />
    </div>
  );
};

export default page;
