import React, { useEffect, useState } from 'react'
import SingleProduct from '../../common/singleProduct';
// import { getAllCategory } from '../../../../api/service';

const BagsList = ({products}) => {
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
    <div className='grid grid-cols-2 gap-[23px] '>
     {bags && bags.map(bag=>
       <SingleProduct key={bag.id} name={bag.description} image={bag.image}/>
      )}
         
    </div>
  )
}

export default BagsList