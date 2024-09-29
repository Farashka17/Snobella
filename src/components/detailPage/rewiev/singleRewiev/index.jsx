import React from 'react'

const SingleRewiev = () => {
  return (
    <div className='border border-[#212121] border-opacity-[28%] py-6 px-[41px] rounded-[8px] w-[960px]'>
        <div className='flex gap-6 items-center'>
            <p className='text-[20px] text-[#212121] font-medium'>John Smith</p>
            <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className=" text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div className='mt-2'>
            <p className='text-[#212121] text-opacity-75 text-[14px] font-normal'>09 July, 2021</p>
        </div>
        <div className='mt-6 pr-[221px]'>
            <p className='text-[#212121] text-opacity-75 text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
    </div>
  )
}

export default SingleRewiev