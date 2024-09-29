import React from 'react'
import { LiaTruckSolid } from "react-icons/lia";
import { TbDoorExit } from "react-icons/tb";
import { GoCreditCard } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
const BigDelivery = () => {
  return (
  <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[25px] pb-[50px]">
    <div className=" flex  border border-[#E4E4E4] py-8 px-[37px] w-full items-center justify-between">
    
         <div className='flex flex-col gap-3 items-center'>
         <LiaTruckSolid className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Guaranteed delivery</p>
         <div className='w-[192px] text-center'> <p className='text-[#212121] text-opacity-75 text-[16px] font-normal'>Consectetur adipiscing sed do eiusmod tempor incididunt ut labore</p></div>
         </div>

         <div className='w-[1px] h-[157.5px] bg-[#E4E4E4]'></div>

         <div className='flex flex-col gap-3 items-center'>
         <TbDoorExit className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Do not come back</p>
         <div className='w-[192px] text-center'> <p className='text-[#212121] text-opacity-75 text-[16px] font-normal'>Consectetur adipiscing sed do eiusmod tempor incididunt ut labore</p></div>
        
         </div>

         <div className='w-[1px] h-[157.5px] bg-[#E4E4E4]'></div>

         <div className='flex flex-col gap-3 items-center'>
         <IoLockClosedOutline className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Safe and secure shopping</p>
         <div className='w-[192px] text-center'> <p className='text-[#212121] text-opacity-75 text-[16px] font-normal'>Consectetur adipiscing sed do eiusmod tempor incididunt ut labore</p></div>

         </div>

         <div className='w-[1px] h-[157.5px] bg-[#E4E4E4]'></div>

         <div className='flex flex-col gap-3 items-center'>
         <GoCreditCard className='w-12 h-12 text-[#007878]'/>
         <p className='text-[16px] font-medium'>Payment at the door or online</p>
         <div className='w-[192px] text-center'> <p className='text-[#212121] text-opacity-75 text-[16px] font-normal'>Consectetur adipiscing sed do eiusmod tempor incididunt ut labore</p></div>

         </div>     
    </div>
  </div>
  )
}

export default BigDelivery