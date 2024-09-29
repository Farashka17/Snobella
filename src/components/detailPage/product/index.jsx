import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import BigBagpack from "./../../../assets/images/BigBagpack.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
const Product = () => {
  return (
    <div className="flex gap-[64px]">
      {/* sol */}
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-4">
          <IoIosArrowUp />
          <div className="w-[72px] h-[94px] rounded-[8px] border border-[#206363] flex justify-center items-center">
            <img src={BigBagpack} />
          </div>
          <div className="w-[72px] h-[94px] rounded-[8px] border border-[#E4E4E4] flex justify-center items-center">
            <img src={BigBagpack} />
          </div>
          <div className="w-[72px] h-[94px] rounded-[8px] border border-[#E4E4E4] flex justify-center items-center">
            <img src={BigBagpack} />
          </div>
          <div className="w-[72px] h-[94px] rounded-[8px] border border-[#E4E4E4] flex justify-center items-center">
            <img src={BigBagpack} />
          </div>
          <IoIosArrowDown />
        </div>
        <div className="w-[456px] h-[473px] flex justify-center items-center bg-[#F9F9F9] p-6 relative rounded-[3px]">
          <div className="py-[3px] px-[22px] text-white text-[16px] font-medium bg-[#DF4244] rounded-[8px] absolute top-6 left-6">
            30 %
          </div>
          <img src={BigBagpack} className="w-[340px] h-[379px]" />
          <div className="text-[#DF4244] absolute top-6 right-6">
            <IoMdHeartEmpty className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* sag */}
      <div>
        <p className="text-[24px] font-medium text-[#212121]"> Hotel Magique Love and Magique Tote Bag</p>
        <div className="flex items-center gap-[10px] mt-2"> 
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className=" text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>
          <p className="text-[14px] font-normal text-[#212121]">5.0</p>
          <div className="w-[2px] h-6 bg-[#212121]"></div>
          <p className="text-[14px] font-normal text-[#212121]">2 reviews</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-[16px]">
            <button className="border border-[#E4E4E4] rounded-[8px] flex justify-between items-center w-[224px] py-[15px] px-[18px]">
                <p className="text-[14px] font-normal text-[#212121]">2-9 pieces</p>
                <p className="text-[18px] font-medium">US $20.00</p>
            </button>
            <button className="border border-[#E4E4E4] rounded-[8px] flex justify-between items-center w-[224px] py-[15px] px-[18px]">
                <p className="text-[14px] font-normal text-[#212121]">10-49 pieces</p>
                <p className="text-[18px] font-medium">US $15.00</p>
            </button>
            <button className="border border-[#F75145] rounded-[8px] flex justify-between items-center w-[224px] py-[15px] px-[18px]">
                <p className="text-[14px] font-normal text-[#212121]">50 pieces</p>
                <p className="text-[18px] font-medium text-[#F75145]">US $12.00</p>
            </button>
            <button className="border border-[#E4E4E4] rounded-[8px] flex justify-between items-center w-[224px] py-[15px] px-[18px]">
                <p className="text-[14px] font-normal text-[#212121]">2-9 pieces</p>
                <p className="text-[18px] font-medium">US $20.00</p>
            </button>
        </div>
        <div className="flex mt-8 gap-[100px]">
            <div>
                <p className="mb-4 text-[16px] font-medium">Size</p>
                <div className="flex gap-[14px]">
                    <button className="py-[7px] px-[23px] border border-[#212121] rounded-[8px]">XS</button>
                    <button className="py-[7px] px-[23px] border border-[#E4E4E4] rounded-[8px]">S</button>
                    <button className="py-[7px] px-[23px] border border-[#E4E4E4] rounded-[8px]">M</button>

                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="mb-4 text-[16px] font-medium">Color</p>
                <div className="flex gap-[14px]">
                    <button className="w-[18px] h-[18px] bg-[#CD5C0B] rounded-full"></button>
                    <button className="w-[18px] h-[18px] bg-[#0085FF] rounded-full"></button>
                    <button className="w-[18px] h-[18px] bg-[#35783B] rounded-full"></button>
                    <button className="w-[18px] h-[18px] bg-[#ED0875] rounded-full"></button>
                </div>
            </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
            <button className="text-white py-3 px-[75px] bg-[#DF4244] rounded-[8px]">Add to card</button>
            <button className="text-[#212121] py-3 px-[63px] border border-[#212121] rounded-[8px]">Cash payment</button>
        </div>
        <p className="text-[14px] font-normal underline mt-4">WhatsApp Order</p>
      </div>
    </div>
  );
};

export default Product;
