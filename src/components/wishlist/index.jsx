import React, { useEffect, useState } from 'react'
import SingleProduct from '../common/singleProduct'

const Wishlist = () => {
    const [bags,setBag]= useState([]);
    useEffect(()=>{
      const fetchData = async () => {
        const response = await fetch('http://localhost:3001/bags');
        const result = await response.json();
        setBag(result);
      }
      fetchData()
      },[]);

  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] mx-auto flex flex-col py-[50px] gap-12">
    <div className=' flex justify-between items-center'>
    {bags && bags.slice(0,3).map(bag=>
     <SingleProduct key={bag.id} id={bag.id} description={bag.description} image={bag.image} price={bag.price}/>
    )}
</div>
</div>
</div>


  )
}

export default Wishlist
