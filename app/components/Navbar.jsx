'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <Link href=''>
          {/* <Image src={assets.logo} alt='' className='cursor-pointer w-28 mr-14' /> */}
          <h1 className='cursor-pointer w-28 mr-14 font-semibold text-3xl relative'>Wence <span className='border-3 border-red-600 rounded-full ml-1 absolute bottom-2'></span></h1>
        </Link>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm backdrop-opacity-50'>
          <li><a className='font-ovo' href='#top'>Home</a></li>
          <li><a className='font-ovo' href='#about'>About me</a></li>
          <li><a className='font-ovo' href='#services'>Services</a></li>
          <li><a className='font-ovo' href='#work'>My Work</a></li>
          <li><a className='font-ovo' href='#contact'>Contact me</a></li>
        </ul>

        <div>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt='' /></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
