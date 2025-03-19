'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isScrolled, setIsSCrolled] = useState(false)

  const sideMenuRef = useRef()

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-12rem)' // 'translateX(-16rem)
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(12rem)' // 'translateX(-16rem)
  }

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if (scrollY>50){
        setIsSCrolled(true)
      }else{
        setIsSCrolled(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'><Image src={assets.header_bg_color} alt='' className='w-full' /></div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled && "bg-white/50 backdrop-blur-lg shadow-sm"}`}>
        <Link href=''>
          {/* <Image src={assets.logo} alt='' className='cursor-pointer w-28 mr-14' /> */}
          <h1 className='cursor-pointer w-28 mr-14 font-semibold text-3xl relative'>Wence <span className='border-3 border-red-600 rounded-full ml-1 absolute bottom-2'></span></h1>
        </Link>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScrolled ? "" : "bg-white/50 shadow-sm"}`}>
          <li><a className='font-ovo' href='#top'>Home</a></li>
          <li><a className='font-ovo' href='#about'>About me</a></li>
          <li><a className='font-ovo' href='#services'>Services</a></li>
          <li><a className='font-ovo' href='#work'>My Work</a></li>
          <li><a className='font-ovo' href='#contact'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt='' /></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
          <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>


        {/* ----------- Mobile Menu ------------- */}
        <ul ref={sideMenuRef} className='md:hidden flex flex-col gap-4 px-10 py-20 fixed -right-48  top-0 bottom-0 w-48 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-ovo' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#about'>About me</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#services'>Services</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#work'>My Work</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
