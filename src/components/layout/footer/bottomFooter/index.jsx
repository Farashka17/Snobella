import React from "react";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const BottomFooter = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[25px]">
        <div>
          <p className="text-[16px] text-[#212121]  opacity-75 font-normal">
            © 2020. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 items-center">
        <FaInstagram  className="w-5 h-5"/>
        <LuFacebook className="w-5 h-5"/>
        <FaWhatsapp className="w-5 h-5"/>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
