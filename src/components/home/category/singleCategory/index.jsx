import React from 'react'
import Category from '..'

const SingleCategory = ({name,image}) => {

  return ( 
    <div className='bg-[#F5F5F5] p-6 rounded-[8px] relative w-[264px] h-[162px]'>
        <p className='font-medium text-[#000] text-[18px]'>{name}</p> 
       <div className='absolute bottom-[5px] right-0 rounded-[8px] overflow-hidden'><img src={image} alt={name} /></div>
      
    </div>
  )
}

export default SingleCategory