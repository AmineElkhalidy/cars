"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
  destination,
}: CustomButtonProps) => {
  return (
    <>
      {destination ? (
        <Link
          href={destination}
          className={`py-3 px-6 outline-none ${containerStyles}`}
        >
          <span className={`flex-1 ${textStyles}`}>{title}</span>
          {rightIcon && (
            <div className="relative w-6 h-6 ">
              <Image
                src={rightIcon}
                alt="right icon"
                fill
                className="object-contain"
              />
            </div>
          )}
        </Link>
      ) : (
        <button
          disabled={isDisabled}
          type={btnType || "button"}
          className={`custom-btn ${containerStyles}`}
          onClick={handleClick}
        >
          <span className={`flex-1 ${textStyles}`}>{title}</span>
          {rightIcon && (
            <div className="relative w-6 h-6 ">
              <Image
                src={rightIcon}
                alt="right icon"
                fill
                className="object-contain"
              />
            </div>
          )}
        </button>
      )}
    </>
  );
};

export default CustomButton;
