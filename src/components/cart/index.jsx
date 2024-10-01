import React from 'react'
import CartProducts from './cartProducts'
import Payment from './payment'

const Cart = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col  justify-between items-start mx-auto py-[50px] gap-12">
          <h1 className='text-[40px] font-medium text-[#212121]'>Shopping bag</h1>
        <div className='flex justify-between items-start gap-6'>
     <CartProducts/>
     <Payment/>
     </div>
    </div>
    </div>
  )
}

export default Cart