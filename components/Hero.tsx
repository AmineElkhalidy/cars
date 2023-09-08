"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title leading-none">
          Discover, reserve, or lease a vehicle – with speed and simplicity!
        </h1>

        <p className="hero__subtitle mb-6">
          Simplify your car rental journey through our hassle-free reservation
          system.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          destination="#discover"
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
