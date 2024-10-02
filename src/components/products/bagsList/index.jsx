// import React, { useEffect, useState } from 'react';
// import SingleProduct from '../../common/singleProduct';

// const BagsList = () => {
   
//   const [bags, setBag] = useState([]);
//   const [filteredBags, setFilteredBags] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:3001/bags');
//       const result = await response.json();
//       setBag(result);
//     };
//     fetchData();
//   }, []);

//   // Dışa aktarılması gereken fonksiyon
 
//   const doFilter = (id,type) => {
//     console.log("filter");
//     console.log(id, "id");
  
//   let newFilter=[]
//   if(type=="color"){
//      newFilter = bags.filter((bag)=>bag.colorId == id)
//   }
//   if(type=="size"){
//      newFilter = bags.filter((bag)=>bag.sizeId == id)
//   }
//   if(type=="material"){
//     newFilter = bags.filter((bag)=>bag.materialId == id)
//   }
//   if(type=="category"){
//     newFilter = bags.filter((bag)=>bag.categoryId == id)
//   }
  
  
//   setFilteredBags(newFilter);
//    }
//   const resetFilter =(type)=>{
//     if(type=="reset"){
//       setFilteredBags(bags)
//     }
//   }
  
  
//   return (
//     <div className='grid grid-cols-2 gap-[23px] '>
//       {bags && bags.map(bag =>
//         <SingleProduct key={bag.id} description={bag.description} image={bag.image} />
//       )}
//     </div>
//   );
// };

// ;
// export default BagsList;



