import React from 'react'
import BigBagpack from './../../../assets/images/BigBagpack.png'
const SingleProduct = ({image}) => {
  return (
    <div className='bg-[#F9F9F9] rounded-[8px] w-[360px] h-[508px] flex flex-col px-[24px] py-[28px] items-center justify-center gap-4'>
       <div className='flex items-baseline w-[200px] h-[200px]  relative'><div  className='absolute bottom-0 '><img src={image}/></div></div> 
        <div>
        <div className="flex ">
      {[...Array(5)].map((_, index) => (
        <span key={index} className=" text-yellow-500">&#9733;</span>
      ))}
    </div>
          <p className='text-[16px] font-normal text-[#000] my-4'>Shoulder Bag Leather Bag Leather undertakes laborious physical physical </p>
         <div className='flex items-center gap-[14px]'>
          <p className='text-[20px] font-semibold text-[#F75145]'>$130</p>
          <p className='text-[#363636] opacity-75 text-[16px] font-normal'>From $340.00</p>
          </div> 
          <button className='py-[11px] w-full border border-[#212121] rounded-[8px] text-[#212121] font-medium text-[16px] mt-7'>Add to card</button>
        </div>
    </div>
  )
}

export default SingleProduct