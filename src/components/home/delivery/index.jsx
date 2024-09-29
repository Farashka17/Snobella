import React from 'react'
import { LiaTruckSolid } from "react-icons/lia";
import { TbDoorExit } from "react-icons/tb";
import { GoCreditCard } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
const Delivery = () => {
  return (
    <div className="bg-[#F7F7F7] ">
    <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[25px]">
         <div className='flex gap-2 items-center'>
         <LiaTruckSolid className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Guaranteed delivery</p>
         </div>
         <div className='flex gap-2 items-center'>
         <TbDoorExit className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Do not come back</p>
         </div>
         <div className='flex gap-2 items-center'>
         <IoLockClosedOutline className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Safe and secure shopping</p>
         </div>
         <div className='flex gap-2 items-center'>
         <GoCreditCard className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Payment at the door or online</p>
         </div>     
    </div>
  </div>
  )
}

export default Delivery