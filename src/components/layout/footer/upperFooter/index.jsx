import React from 'react'
import { IoSearch } from "react-icons/io5";


const UpperFooter = () => {
  return (
    <div className='bg-[#F7F7F9] border-b border-b-[#273142] border-opacity-15'>
        <div className='container max-w-[1128px] py-3 flex justify-between items-center mx-auto'>
        <div>
            <p className="text-[40px] font-bold">Snobella</p>
          </div>
          <div className="relative">
            <input
              placeholder="Search all product"
              className="py-[15px] pl-4 pr-[341px] bg-[#fff] text-[#AAAAAA] rounded-[8px] border border-[#273142] border-opacity-35"
            />
            <div className="absolute text-[#273142] top-[12px] right-[12px]">
              <IoSearch className="w-6 h-6" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpperFooter