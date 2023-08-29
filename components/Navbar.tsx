import React from "react";
import Link from "next/link";

import { CustomButton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          {/* <Image
            src={"/logo.svg"}
            alt="Car Logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          <span className="font-bold text-xl tracking-wider dark:text-white">
            Cars
          </span>
        </Link>

        <div className="flex items-center gap-5 mr-2">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] shadow-md"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
