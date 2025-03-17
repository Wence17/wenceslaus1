import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I am Wenceslaus Obimka{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl md:text-6xl lg:text-[66px] font-ovo">
        Frontend web developer based in Nigeria.
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a Frontend developer with many years of on field experience,
        building websites and web apps for different organisations.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:shadow-xl"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/ObimkaWenceslausSomtochukwuResume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:shadow-xl"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
