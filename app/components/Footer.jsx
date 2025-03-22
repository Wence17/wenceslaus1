import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' /> */}
        <h1 className="w-36 mx-auto mb-2 font-semibold text-4xl relative">
          Wence{" "}
          <span className="border-4 border-red-600 rounded-full ml-1.5 absolute bottom-1.5"></span>
        </h1>

        <Link
          href={
            "mailto:obimkasomto@gmail.com?subject=Enquiry%20From%20Your%20Website&body=Body%20text"
          }
          className="w-max flex items-center gap-2 mx-auto"
          target="_blank"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />{" "}
          obimkasomto@gmail.com
        </Link>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 sm:mx-[10%] mt-5 md:mt-12 py-2 md:py-6">
        <p>
          &#169; {new Date().getFullYear()} Wenceslaus Obimka. All rights
          reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link href={"https://github.com/Wence17"} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/wenceslaus-obimka-ab5172295/"}
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link href={"https://x.com/WenceHenry1"} target="_blank">
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://wa.me/2349067831050?text=Hello%20there!%0AMy%20name%20is%20%20______%0AI%20want%20to%20know%20more%20about%20your%20web%20services."
              }
              target="_blank"
            >
              WhatsApp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
