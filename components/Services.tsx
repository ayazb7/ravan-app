import Image from "next/image";
import React from "react";
import bg from "@/logos/servicebg.png";
import cardBg from "@/logos/cardImage.png";
import offPlan from "@/logos/offPlan.png";
import resedential from "@/logos/resedential.jpg";
import special from "@/logos/callcenter.jpg";
import Card from "./Card";

const Services = () => {
  return (
    <div className="relative h-[75vh] w-full ">
      {/* <p
        className="z-20 absolute top-8 w-full text-center text-lg text-white"
        style={{ marginTop: "4rem" }}
      >
        Our Services
      </p> */}
      <h2 className="z-20 absolute top-16 w-full text-center text-4xl text-white font-bold">
        Our Services
      </h2>
      <Image
        src={bg}
        alt="gray arc to write text on"
        className="z-10 absolute w-full h-full object-cover"
      />
      <div className="absolute z-30 w-[60%] mx-auto left-0 right-0 top-[20vh] grid grid-cols-3 gap-10">
        <Card
          imageSrc={special}
          text="Connect with a Specialist"
          content="Access our dedicated team of over 400+ expert agents ready to assist you."
          redirectUrl="/Commercial"
          borderRadiusClass="rounded-tl-[15px] rounded-bl-[15px]"
        />
        <Card
          imageSrc={resedential}
          text="List Your Property"
          content="Achieve optimal value by listing your property with our expert marketing strategies"
          redirectUrl="/Residential"
          borderRadiusClass="rounded-none"
        />
        {/* <Card
          imageSrc={cardBg}
          text="Holiday Homes"
          content="Learn More"
          redirectUrl="/HolidayHomes"
          borderRadiusClass="rounded-none"
        /> */}
        <Card
          imageSrc={offPlan}
          text="Explore Dubai Projects"
          content="Browse and find your ideal property from our extensive portfolio of Dubai projects"
          redirectUrl="/OffPlan"
          borderRadiusClass="rounded-tr-[15px] rounded-br-[15px]"
        />
      </div>
    </div>
  );
};

export default Services;
