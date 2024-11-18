"use client";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import { LayoutGridDemo } from "@/components/testing";
import Link from "next/link";

interface SearchParams {
  project?: string;
  developer?: string;
  price?: string;
  paymentPlan?: string;
  handover?: string;
  photos?: string; // This should be the folder name
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const { project, developer, price, paymentPlan, handover, photos } =
    searchParams;

  useEffect(() => {
    // Set the background image directly using the first image path
    if (photos) {
      setBackgroundImage(`/${photos}/1.jpg`); // Assuming the image is named "1.jpg"
    }
  }, [photos]);

  return (
    <div>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            color: "#fff",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{project}</h1>
          <p> By : {developer}</p>

          {/* Bottom Buttons */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href={`/${photos}/broucher.pdf`}
              className="btn-custom hover:bg-black hover:rounded-lg text-center justify-center pt-4"
              download="broucher"
            >
              View Brochure
            </a>
            <Link href="/contact">
              <button className="btn-custom hover:bg-black hover:rounded-lg">
                Register Interest
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[80vh] bg-black ">
        <div className="flex flex-col justify-center ml-10 mr-40 w-[30vw]">
          <h2 className="text-gray-500 font-semibold mb-10">
            About the project
          </h2>
          <p className="text-white">
            Monaco Mansions at Dubai South by Azizi Developments offers a
            stunning blend of water-inspired luxury in expansive 6 to 8-bedroom
            homes. These mansions redefine elegance, merging classic royal
            architecture with contemporary, high-quality infrastructure. Nestled
            within lush greenery and peaceful lagoons, Monaco Mansions by Azizi
            invites you to experience a lifestyle of refined luxury and
            tranquility.
          </p>
        </div>
        <div className="bg-white h-[40vh] w-[0.1vw]"></div>
        <div className="flex flex-col items-center w-[30vw] h-[70%] justify-between">
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Starting Price</h3>
            <p className="text-4xl font-bold text-white">{price} Million AED</p>
          </div>

          <div className="bg-white h-[0.1vh] w-[80%]"></div>
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Handover</h3>
            <p className="text-4xl font-bold text-white">{handover}</p>
          </div>
          <div className="bg-white h-[0.1vh] w-[80%]"></div>
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Payment Plan</h3>
            <p className="text-4xl font-bold text-white">{paymentPlan}</p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <LayoutGridDemo photos={photos} />
      </div>
    </div>
  );
}
