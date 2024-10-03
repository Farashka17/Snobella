import React from "react";
import BigBagpack from "./../../../assets/images/BigBagpack.png";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";


const SingleCartProduct = ({name,image,size,color,price,count}) => {
  
  return (
    <div className="flex p-4 gap-6 border border-[#E4E4E4] rounded-[8px] w-[744px]">
      <div className="bg-[#F9F9F9] rounded-[8px] py-5 px-3">
        <img src={image} className="w-[124px h-[137px]"/>
      </div>
      <div>
        <div className="flex gap-[115px] items-center">
          <p className="text-[#212121] text-[16px] font-medium"> {name}</p>
          <p className="text-[#212121] text-[18px] font-medium">US ${(price*count).toFixed(2)}</p>
        </div>
        <div className="flex gap-5 mt-3 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px] font-normal"> Size : {size}</p>
          <p className="text-[#212121] text-opacity-75 text-[14px] font-normal"> Color : {color}</p>
        </div>
        <div className="flex gap-5 mt-3 mb-2">
        <p className="text-[#212121] text-opacity-75 text-[14px]">
            Count : {count}
          </p>
        </div>
        <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Quality</p>
          <p className="mt-2">dropdown sheyisi</p>
          <div className="flex justify-end  gap-10  ">
            <div className="flex items-center gap-2">
            <CiHeart />
              <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Favorite</p>
            </div>
            <div className="flex items-center gap-2">
            <RiDeleteBin7Line />
          <button className="">   <p className="text-[#212121] text-opacity-75 text-[14px] font-normal">Remove</p></button> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
