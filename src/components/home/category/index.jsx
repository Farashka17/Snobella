import React, { useEffect, useState } from 'react'
import SingleCategory from './singleCategory'

const Category = () => {
 
const [bagCategories,setBagCategories]= useState([]);
useEffect(()=>{
  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/category');
    const result = await response.json();
    setBagCategories(result);
    console.log(result);
  }
  fetchData()
  },[]);
  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px]  flex justify-between items-center mx-auto py-[80px] ">
      {bagCategories && bagCategories.map(category=>
       <SingleCategory key={category.id} name={category.name} image={category.image}/>
      )}


      </div>
    </div>
    
  )
}

export default Category