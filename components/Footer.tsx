import React from 'react'
import logo from '@/logos/logo2.png'
import home_logo from '@/logos/Icon.svg'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import Email_logo from '@/logos/mail-01.svg'
import { COMPANY_INFO } from '../config.js'; // Adjust the path as necessary

const Footer = () => { 
  return (
    <div> 
    <div className='bg-[#181818] w-full h-80 md:flex hidden justify-between gap-10 '>
        <Image className='my-8 ml-10 w-[16vw] h-[24vh]' src={logo} alt= "High End logo with blue bg " />
        <div className='flex flex-col justify-start my-20 gap-3'>
            <a className='mb-1 text-white text-xl font-bold'>Company</a>
            <Link href='/' className='text-white text-base font-medium'>Home</Link>
            <Link href='/en/about' className='text-white text-base font-medium'>About</Link>
            <Link href='/contact' className='text-white text-base font-medium'>Contact</Link>
        </div>
        <div className='flex flex-col justify-start my-20 gap-3'>
            <a className='mb-1 text-white text-xl font-bold'>Services</a>
            <Link href='/' className='text-white text-base font-medium'>Import</Link>
            <Link href='/' className='text-white text-base font-medium'>Distribution</Link>
            <Link href='/' className='text-white text-base font-medium'>Delivery</Link>
        </div>
        <div className='flex flex-col justify-start my-20 mr-20 gap-5'>
            <a className='mb-1 text-white text-xl font-bold'>Information</a>
            <div className='flex w-full space-x-3'>
                <Image src={home_logo} alt="Logo" />
                <p className='text-white text-base font-medium'>{COMPANY_INFO.address}</p>
            </div>
            <div className='flex w-full space-x-3'>
                <Image src={Email_logo} alt="Logo" />
                <p className='text-white text-base font-medium'>{COMPANY_INFO.email}</p>
            </div>
        </div>
    </div>
    <div className='bg-my_blue2 w-full flex-col flex md:hidden  justify-between '>
        <Image className='self-center' src={logo} alt= "High End logo with blue bg "  width={200} height={200}/>
        <div className='flex flex-col justify-start ml-4 space-y-1'>
            <a className='mb-1 text-white text-xl font-bold'>Company</a>
            <Link href='/' className='text-white text-base font-medium'>Home</Link>
            <Link href='/en/about' className='text-white text-base font-medium'>About</Link>
            <Link href='/contact' className='text-white text-base font-medium'>Contact</Link>
        </div>
        <div className='flex flex-col justify-start ml-4 space-y-1'>
            <a className='mb-1 text-white text-xl font-bold'>Services</a>
            <Link href='/en' className='text-white text-base font-medium'>Import</Link>
            <Link href='/en' className='text-white text-base font-medium'>Distribution</Link>
            <Link href='/en' className='text-white text-base font-medium'>Delivery</Link>
        </div>
        <div className='flex flex-col justify-start ml-3 my-10 mr-20 gap-5'>
            <a className='mb-1 text-white text-xl font-bold'>Information</a>
            <div className='flex w-full space-x-3'>
                <Image src={home_logo} alt="Logo" />
                <p className='text-white text-base font-medium'>{COMPANY_INFO.address}</p>
            </div>
            <div className='flex w-full space-x-3'>
                <Image src={Email_logo} alt="Logo" />
                <p className='text-white text-base font-medium'>{COMPANY_INFO.email}</p>
            </div>
        </div>
    </div>
    </div> 
  )
}

export default Footer