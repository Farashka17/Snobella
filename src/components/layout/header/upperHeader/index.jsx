import React from 'react'
import { BsTelephone } from "react-icons/bs";


const UpperHeader = () => {
  return (
    <div className=' bg-[#007878] '>
    <div className='container max-w-[1128px] py-3 flex justify-between items-center mx-auto'>
        {/* sol */}
        <div className='flex items-center gap-3 justify-center'>
        <div className='text-white'><BsTelephone /></div>
        <p className='text-[14px] text-white'>+748 383 23 14</p>
        </div>
        {/* sag */}
        <div className='flex text-white font-medium items-center' >
           <div className='px-[18px] border-r-4 border-white h-5'>Terms of Use</div>
           <div className='px-[18px] border-r-4 border-white h-5'>FAQ</div>
           <div className='px-[18px] h-5 '>Customer service</div>
        </div>
    </div>
    </div>
  )
}

export default UpperHeader