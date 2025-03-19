import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg font-ovo mb-2">What I offer</h4>
      <h2 className="font-ovo text-center text-5xl">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am a Frontend developer with many years of on field experience,
        building websites and web apps for notable organisations.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ description, icon, link, title }, i) => (
          <div key={i} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more <Image src={assets.right_arrow} alt="" className="w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
