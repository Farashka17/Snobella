import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { PiTelegramLogoLight } from "react-icons/pi";


const MainFooter = () => {
  const company = [
    { title: "About Us", href: "/aboutUs" },
    { title: "Contact", href: "/contact" },
    { title: "Terms of Use", href: "/termsOfUse" },
    { title: "Customer Service", href: "/customerService"}
  ];
  const shop = [
    { title: "Evening bags", href: "/eveningBags" },
    { title: "Shoulder bag", href: "/shoulderBag" },
    { title: "Backpack", href: "/backpack" },
    { title: "Handbag", href: "/handbag" },
    { title: "Postman bag", href: "/postmanBag" },
    { title: "Belt bags", href: "/beltBags" },
    { title: "Purse", href: "/purse" }
  ];
  const help = [
    { title: "FAQ", href: "/faq" },
    { title: "Delivery", href: "/delivery" },
    { title: "Cancellation of the order", href: "/cancellationOfTheOrder" },
    { title: "Don't go back", href: "/dontGoBack" },
  ];
  return (
    <div className="bg-[#F7F7F9] ">
      <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[25px]">
        {/* sol */}
        <div>
          <div className='w-[325px]'><p className='text-[16px] text-[#212121] opacity-75 font-normal'>The wise man therefore always holds selectionThe wise man therefore always rejects pleasures to secure other greater</p></div>
        <div className='flex gap-[10px] items-center mt-10'>
        <MdOutlineMailOutline className='w-[22px] h-[22px]'/>
        <p className='text-[16px] text-[#212121] opacity-75 font-normal'>Snobella@gmail.com</p>
        </div>
        <div className='flex gap-[10px] items-center mt-6'>
        <BsTelephone className='w-[22px] h-[22px]'/>
        <p className='text-[16px] text-[#212121] opacity-75 font-normal'>+748 383 23 14</p>
        </div>
        
          <button className='flex gap-[10px] items-center py-[14px] px-4 border border-[#171717] rounded-[8px] mt-12'>
          <PiTelegramLogoLight className='w-[22px] h-[22px]'/>
          <p className='text-[16px] text-[#212121] opacity-75 font-normal'>Snobella@gmail.com</p>
          </button>
        
        </div>
        {/* sag */}
        <div className='flex gap-[105px]'>
          {/* 1ci */}
        <div className="flex flex-col gap-[20px]">
          <p className='font-medium text-[18px]'>Shop</p>
          <ul className="flex flex-col gap-[20px] items-start ">
          {
           shop.map((item ,index) => (
              <li key={index}  className="text-[#212121] text-[16px] font-normal opacity-75">
               {item.title}
              </li>
            ))}
            </ul>
        </div>
         {/* 2ci */}
         <div className="flex flex-col gap-[20px]">
          <p className='font-medium text-[18px]'>Company</p>
          <ul className="flex flex-col gap-[20px] items-start ">
          {
           company.map((item ,index) => (
              <li key={index}  className="text-[#212121] text-[16px] font-normal opacity-75">
               {item.title}
              </li>
            ))}
            </ul>
        </div>
        {/* 3cu */}
        <div className="flex flex-col gap-[20px]">
          <p className='font-medium text-[18px]'>Help</p>
          <ul className="flex flex-col gap-[20px] items-start ">
          {
           help.map((item ,index) => (
              <li key={index}  className="text-[#212121] text-[16px] font-normal opacity-75">
               {item.title}
              </li>
            ))}
            </ul>
        </div>

        </div>
      </div>
    </div>
  )
}

export default MainFooter