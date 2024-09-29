import React from 'react'
import CartProducts from './cartProducts'

const Cart = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col justify-between items-start mx-auto py-[50px] gap-12">
     <CartProducts/>
    </div>
    </div>
  )
}

export default Cart