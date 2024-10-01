import React from 'react'

const Payment = () => {
  return (
    <div>
     <div className='bg-[#F9F9F9] py-8 px-6 rounded-[8px]'>
        <div className='flex justify-between'>
            <p className='text-[#212121] text-[16px] font-normal'>Your subtotal</p>
            <p className='text-[#212121] text-[16px] font-normal'>US $20.00</p>
        </div>
        <div className='flex justify-between mt-3'>
            <p className='text-[#212121] text-[16px] font-normal'>Shipping changes</p>
            <p className='text-[#212121] text-[16px] font-normal'>Free</p>
        </div>
        <div className='flex justify-between mt-[20px]'>
            <p className='text-[#212121] text-[18px] font-medium'>Totals</p>
            <p className='text-[#212121] text-[18px] font-medium'>US $20.00</p>
        </div>
        <div className='border-dashed border border-[#D0D0D0] my-6'></div>
        <div className='border border-[#DBDBDB]  rounded-[8px]'>
            <input type='text' placeholder='Discount prome code' className=' p-[15px] rounded-l-[8px]'/>
            <button className='px-[28px] py-[15px] bg-[#FF695E] rounded-r-[8px] text-white text-[16px] '>Apply</button>
        </div>
     </div>
     <button className='py-[13px] bg-[#DF4244] w-full rounded-[8px] my-[23px] text-[16px] text-[#fff] font-medium'>Confirm cart</button>
     <button className='py-[13px] border border-[#212121] w-full rounded-[8px] text-[16px]  font-medium'>Cash payment</button>

     
    </div>
  )
}

export default Payment
