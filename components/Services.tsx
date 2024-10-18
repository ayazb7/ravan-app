import Image from 'next/image';
import React from 'react';
import bg from "@/logos/servicebg.png";
import cardBg from "@/logos/cardImage.png";
import Card from './Card';

const Services = () => {
  return (
    <div className='relative h-[80vh] w-full'>
      <p className="z-20 absolute top-8 w-full text-center text-lg text-white" style={{ marginTop: '4rem' }}>Our Services</p>
      <h2 className="z-20 absolute top-16 w-full text-center text-6xl text-white font-bold" style={{ marginTop: '5rem' }}>Real Estate Solutions</h2>
      <Image
        src={bg} 
        alt="gray arc to write text on" 
        className='z-10 absolute w-full h-full object-cover'
      />
      <div className='absolute z-30 w-[75%] mx-auto left-0 right-0 top-[30vh] grid grid-cols-4 gap-4'>
        <Card 
          imageSrc={cardBg} 
          text="Commercial" 
          content="Learn More" 
          redirectUrl="/Commercial" 
          borderRadiusClass="rounded-tl-[15px] rounded-bl-[15px]" 
        />
        <Card 
          imageSrc={cardBg} 
          text="Residential" 
          content="Learn More" 
          redirectUrl="/Residential" 
          borderRadiusClass="rounded-none" 
        />
        <Card 
          imageSrc={cardBg} 
          text="Holiday Homes" 
          content="Learn More" 
          redirectUrl="/HolidayHomes" 
          borderRadiusClass="rounded-none" 
        />
        <Card 
          imageSrc={cardBg} 
          text="Off Plan" 
          content="Learn More" 
          redirectUrl="/OffPlan" 
          borderRadiusClass="rounded-tr-[15px] rounded-br-[15px]" 
        />
      </div>
    </div>
  );
};

export default Services;