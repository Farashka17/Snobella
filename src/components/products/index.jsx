import React from 'react'
import Filter from './filter'
import Heading from './heading'
import BagsList from './bagsList'

const Products = () => {
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] flex flex-col justify-between items-center mx-auto py-[50px] gap-12">
     <Heading/>
     <div className='flex gap-[58px] items-start'>
     <Filter />
     <BagsList />
     </div>


      </div>
    </div>
  )
}

export default Products