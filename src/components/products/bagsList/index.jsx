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
 
//   const doFilter = (id) => {
//     console.log("filter");
//     console.log(id, "id");

//   const newFilter =()=>{
//   bags.filter((bag)=>bag.colorId == id)
// }
// setFilteredBags(newFilter);




//   };
  
//   return (
//     <div className='grid grid-cols-2 gap-[23px] '>
//       {filteredBags && filteredBags.map(bag =>
//         <SingleProduct key={bag.id} description={bag.description} image={bag.image} />
//       )}
//     </div>
//   );
// };

// export {doFilter};
// export default BagsList;
