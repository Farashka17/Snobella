import React from 'react'
import SingleCartProduct from '../singleCartProducts'

const CartProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <SingleCartProduct/>
        <SingleCartProduct/>
        <SingleCartProduct/>

    </div>
  )
}

export default CartProducts