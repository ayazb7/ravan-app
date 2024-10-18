import React, { useState } from 'react';
import CardProp from '@/components/CardProp';
import bg from "@/logos/cardImage.png";

const Discover = () => {
  // State to track the active button (initially 'To Rent')
  const [activeButton, setActiveButton] = useState<'rent' | 'sale'>('rent');

  return (
    <div className='bg-black w-full flex flex-col items-center justify-center py-16' style={{ paddingBottom: '8rem' }}>
      <h2 className='text-center text-6xl text-white font-bold' style={{ marginTop: '5rem' }}>Discover Properties in Dubai</h2>
      
      {/* Buttons */}
      <div className='flex space-x-4 mb-12' style={{ marginTop: '4rem' }}>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            activeButton === 'rent' ? 'bg-white text-black' : 'bg-black text-white border border-white hover:bg-white hover:text-black'
          }`}
          onClick={() => setActiveButton('rent')}
        >
          To Rent
        </button>
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            activeButton === 'sale' ? 'bg-white text-black' : 'bg-black text-white border border-white hover:bg-white hover:text-black'
          }`}
          onClick={() => setActiveButton('sale')}
        >
          For Sale
        </button>
      </div>
      
      {/* Property Cards */}
      <div className='flex w-full h-full items-center justify-center space-x-10'>
        <CardProp 
          imageSrc={bg} 
          basePrice={3000} 
          details="2 bedroom, 1 bathroom" 
          address="Emaar Tower, Dubai" 
        />
        <CardProp 
          imageSrc={bg} 
          basePrice={4000} 
          details="3 bedroom, 2 bathroom" 
          address="Downtown Dubai" 
        />
        <CardProp 
          imageSrc={bg} 
          basePrice={5000} 
          details="4 bedroom, 3 bathroom" 
          address="Palm Jumeirah, Dubai" 
        />
      </div>
    </div>
  );
}

export default Discover;