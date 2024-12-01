import "@/app/globals.css";
import { LayoutGridDemo } from "@/components/testing";
import Link from "next/link";
import fs from "fs";
import path from "path";
interface SearchParams {
  project?: string;
  developer?: string;
  price?: string;
  paymentPlan?: string;
  handover?: string;
  photos: string;
  details: string; // This should be the folder name
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const { project, developer, price, paymentPlan, handover, photos, details } =
    searchParams;

  const photosDir = path.resolve("./public", photos || "");
  const filenames = fs.readdirSync(photosDir);

  const images = filenames
    .filter(
      (name) =>
        name.toLowerCase().endsWith(".jpg") ||
        name.toLowerCase().endsWith(".jpeg")
    )
    .map((name) => path.join(photos, name));

  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative h-screen flex flex-col justify-between bg-cover bg-center"
        style={{ backgroundImage: `url(/${photos}/1.jpg)` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-transparent to-transparent z-1"></div>

        {/* Content Section */}
        <div className="absolute bottom-8 left-8 flex flex-col gap-4 text-white z-10">
          <h1 className="text-2xl md:text-3xl font-bold">{project}</h1>
          <p className="text-sm md:text-base">By: {developer}</p>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`/api/get-pdf?photo=${photos}&file=broucher`}
              download="broucher"
              className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition"
            >
              View Brochure
            </a>
            <Link href="/contact">
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition">
                Register Interest
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center h-[80vh] bg-black ">
        <div className="flex flex-col justify-center my-10 md:my-0 text-center md:text-start md:ml-10 md:mr-40 w-[85vw] md:w-[30vw]">
          <h2 className="text-gray-500 font-semibold mb-3 md:mb-10">
            About the project
          </h2>
          <p className="text-white">{details}</p>
        </div>
        <div className="bg-white md:h-[40vh] h-[0vh] w-[0.1vw] "></div>
        <div className="flex flex-col items-center w-[80vw] md:w-[30vw] h-[70%] justify-between">
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Starting Price</h3>
            <p className="text-2xl font-bold text-white">{price} Million AED</p>
          </div>

          <div className="bg-white h-[0.1vh] w-[80%]"></div>
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Handover</h3>
            <p className="text-2xl font-bold text-white">{handover}</p>
          </div>
          <div className="bg-white h-[0.1vh] w-[80%]"></div>
          <div className="text-center flex flex-col justify-between items-center ">
            <h3 className="text-gray-500 font-semibold mb-5">Payment Plan</h3>
            <p className="text-2xl font-bold text-white">{paymentPlan}</p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <LayoutGridDemo photosDir={images} />
      </div>
    </div>
  );
}
