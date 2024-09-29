import React from "react";
import HeroBags from "../../../assets/images/HeroBags.svg";
const Hero = () => {
  return (
    <div className="bg-[#FFE2E0] ">
      <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[25px] ">
        {/* sol */}
        <div className="w-[450px]">
          <p className="text-[24px] text-[#DF4244] font-medium">30% off</p>
          <p className="text-[40px] font-bold text-[#212121]">Handbag products</p>
          <p className=" text-[16px] font-normal text-[#212121BF] opacity-75 mt-2">It is a long established fact that a reader will be distracted by the readable content expound the actual teachings of the great explorer  </p>
          <button className="py-3 px-[57px] font-medium text-[16px] text-[#FFFFFF]  border-0 rounded-[8px] shadow-md bg-[#206363] mt-12">Shop now</button>
        </div>
        {/* sag */}
        <div>
          <img src={HeroBags}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
