import React from 'react'

const DescAndRewMenu = () => {
  return (
    <div className='border-b-2 border-b-[#273142] border-opacity-15 py-4 relative flex items-center gap-[48px] w-full'>
    <div className='  relative'>
      <div className='w-[96px] h-1 absolute bottom-[-19px]   bg-[#DF4244]  rounded-[8px]'></div>
      <button className='text-[#212121] font-medium text-[20px] '>Product Description</button>
    </div>
    <div className=' relative'>
      {/* <div className='w-[96px] h-1 absolute bottom-[-19px]  bg-[#DF4244]  rounded-[8px]'></div> */}
      <button className='text-[#212121] text-opacity-55 font-medium text-[20px] '>Reviews <span>(3)</span></button>
    </div>
    </div>
  )
}

export default DescAndRewMenu