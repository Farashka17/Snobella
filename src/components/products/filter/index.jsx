// import React, { useEffect, useState } from "react";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";
// import {doFilter} from './../bagsList'
// const Filter = () => {
//   const [bags, setBags] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [materials, setMaterials] = useState([]); 
//   // const [items, setItems] = useState(bags);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:3001/bags");
//       const result = await response.json();
//       setBags(result);
//       setFilteredBags(result);
//     };
//     fetchData();

//     const fetchCategory = async () => {
//       const response = await fetch("http://localhost:3001/category");
//       const result = await response.json();
//       setCategories(result);
//     };
//     fetchCategory();

//     const fetchColors = async () => {
//       const response = await fetch("http://localhost:3001/colors");
//       const result = await response.json();
//       setColors(result);
//     };
//     fetchColors();

//     const fetchSizes = async () => {
//       const response = await fetch("http://localhost:3001/sizes");
//       const result = await response.json();
//       setSizes(result);
//     };
//     fetchSizes();
 
//     const fetchMaterials = async () => {
//       const response = await fetch("http://localhost:3001/materials");
//       const result = await response.json();
//       setMaterials(result);
//     };
//     fetchMaterials();
    
//   }, []);

//   return (
//     <div className="w-[326px] flex flex-col gap-6">
//       {/* Kategoriler */}
//       <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
//         <div className="flex justify-between items-center">
//           <p className="text-[20px] font-medium text-[#212121]">Kategoriler</p>
//           <IoIosArrowUp />
//         </div>
//         <div>
//           <ul className="flex flex-col gap-4">
//             {categories.map((category) => (
//               <li key={category.id}>
//                 <button >
//                   <p>{category.name}</p>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Malzemeler */}
//       <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
//         <div className="flex justify-between items-center">
//           <p className="text-[20px] font-medium text-[#212121]">Malzemeler</p>
//           <IoIosArrowUp />
//         </div>
//         <div>
//           <ul className="flex flex-col gap-4">
//             {materials.map((material) => (
//               <li key={material.id} className="flex gap-[14px] items-center">
//                 <button className="flex gap-[14px] items-center">
//                   <input type="checkbox" />
//                   <p>{material.name}</p>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Fiyat */}
//       <div>
//         <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
//           <div className="flex justify-between items-center">
//             <p className="text-[20px] font-medium text-[#212121]">Fiyat</p>
//             <IoIosArrowUp />
//           </div>
//           <div className="flex items-center gap-2">
//             <div>
//               <input
//                 className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center"
//                 placeholder="$10"
//               />
//             </div>
//             <p>-</p>
//             <div>
//               <input
//                 className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center"
//                 placeholder="$50"
//               />
//             </div>
//             <button className="px-[15px] py-[10px] bg-[#EF544F] rounded-[8px] text-white">
//               <IoSearch className="w-[20px] h-[20px]" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Boyutlar */}
//       <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
//         <div className="flex justify-between items-center">
//           <p className="text-[20px] font-medium text-[#212121]">Boyutlar</p>
//           <IoIosArrowUp />
//         </div>
//         <div>
//           <ul className="flex gap-4">
//             {sizes.map((size) => (
//               <li key={size.id} className="flex gap-[14px] items-center">
//                 <button className="py-[7px] px-[23px] rounded-[8px] border border-[#C8C8C8] text-[16px] font-normal">
//                   {size.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Renkler */}
//       <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
//         <div className="flex justify-between items-center">
//           <p className="text-[20px] font-medium text-[#212121]">Renkler</p>
//           <IoIosArrowUp />
//         </div>
//         <div>
//           <ul >
//           {colors.map((color) => (
//             <li>
//             <button key={color.id} className={`w-[18px] h-[18px] rounded-full`} onClick={(id)=>{
//               doFilter(color.id)
//             }} >{color.name}</button>
//             </li>
//           ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;