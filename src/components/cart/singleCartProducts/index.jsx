import React from "react";
import BigBagpack from "./../../../assets/images/BigBagpack.png";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";


const SingleCartProduct = () => {
  return (
    <div className="flex p-4 gap-6 border border-[#E4E4E4] rounded-[8px]">
      <div className="bg-[#F9F9F9] rounded-[8px] py-5 px-3">
        <img src={BigBagpack} className="w-[124px h-[137px]"/>
      </div>
      <div>
        <div className="flex gap-[115px] items-center">
          <p className="text-[#212121] text-[16px] font-medium">Hotel Magique  Love and Magique Tote Bag</p>
          <p className="text-[#212121] text-[18px] font-medium">US $20.00</p>
        </div>
        <div className="flex gap-5 mt-3 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Size: <span>XS</span></p>
          <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Color: <span> Grey</span></p>
        </div>
        <div className="flex gap-5 mt-3 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Delivery:<span>25-32 days</span></p>
        </div>
        <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Quality</p>
          <p className="mt-2">dropdown sheyisi</p>
          <div className="flex justify-end  gap-10 ">
            <div className="flex items-center gap-2">
            <CiHeart />
              <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Favorite</p>
            </div>
            <div className="flex items-center gap-2">
            <RiDeleteBin7Line />
              <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Remove</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
