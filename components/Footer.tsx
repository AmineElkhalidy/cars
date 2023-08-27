import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          {/* <Image
            src={"/logo.svg"}
            alt="Footer Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <Link href="/">
            {/* <Image
            src={"/logo.svg"}
            alt="Car Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
            <span className="font-bold text-xl tracking-wider dark:text-white">
              GTCars
            </span>
          </Link>

          <p className="text-base text-gray-700 dark:text-gray-200">
            Cars 2023 <br /> All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold dark:text-white">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 dark:text-gray-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="text-gray-500 dark:text-gray-200">
          @2023 Cars. All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 dark:text-gray-200">
            Privacy Policy
          </Link>

          <Link href="/" className="text-gray-500 dark:text-gray-200">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
