import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useStore from "../../../../store/store";
const BottomHeader = () => {
  const {isLogin,setLogout}=useStore();

  const logout =()=>{
    localStorage.setItem("isLogin","false");
    localStorage.setItem("userEmail","");
    setLogout(false)
  }


  const navElements = [
    { title: "Evening bags", href: "/eveningBags" },
    { title: "Shoulder bag", href: "/shoulderBag" },
    { title: "Backpack", href: "/backpack" },
    { title: "Handbag", href: "/handbag" },
    { title: "Postman bag", href: "/postmanBag" },
    { title: "Belt bags", href: "/beltBags" },
  ];
  return (
    <div className=" bg-white">
      <div className="container max-w-[1128px] py-3 gap-[50px] justify-between items-center mx-auto flex flex-col">
        {/* yuxari */}
        <div className="flex gap-[70px] items-center">
        <Link to="/"> <button>
            <p className="text-[40px] font-bold">Snobella</p>
          </button></Link> 
          <div className="relative">
            <input
              placeholder="Search all product"
              className="py-[15px] pl-4 pr-[341px] bg-[#F7F9FC] text-[#AAAAAA] rounded-[8px]"
            />
            <div className="absolute text-[#273142] top-[12px] right-[12px]">
              <IoSearch className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-[20px] items-center">
      <Link to="/login" > <button className="flex items-center gap-[10px]" onClick={()=>{logout()}}>
              <LuUser2 className="w-6 h-6" />
         {isLogin ? <p className="text-[14px] font-medium text-[#2E2E2E]">Log out</p> : <p className="text-[14px] font-medium text-[#2E2E2E]">Sign In</p>}     
            </button></Link>
            <Link to="/wishlist" >    <button className="flex items-center gap-[10px]">
              <FaRegHeart className="w-6 h-6" />
              <p className="text-[14px] font-medium text-[#2E2E2E]">Wishlist</p>
            </button></Link>
          <Link to="/cart" ><button className="flex items-center gap-[10px]">
              <HiOutlineShoppingBag className="w-6 h-6" />
              <p className="text-[14px] font-medium text-[#2E2E2E]">Basket</p>
            </button></Link> 
          </div>
        </div>
        {/* asagi */}
        <div className="flex items-center gap-[53px]">
          <ul className="flex items-start gap-[53px] w-[1128px]">
          {
            navElements.map((navElement ,index) => (
             <button><li key={index}  className="text-[#273142] text-[16px] font-normal w-[122px]">
               {navElement.title}
              </li></button> 
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
