import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Filter = () => {
  const [bagCategories, setBagCategories] = useState([]);
  // const [uniqueBagCategories, setUniqueBagCategories] = useState([]);
  const [uniqueMaterials, setUniqueMaterials] = useState([]);
  // const [uniqueColors, setUniqueColors] = useState([]);
  // const [uniqueSizes, setUniqueSizes] = useState([]);
  const [categories,setCategories]=useState([]);
  const [colors,setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [materials, setMaterials] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/bags");
      const result = await response.json();
      setBagCategories(result);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/category");
      const result = await response.json();
      setCategories(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/colors");
      const result = await response.json();
      setColors(result);
    };
    fetchData();
  }, []);
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/sizes");
      const result = await response.json();
      setSizes(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/materials");
      const result = await response.json();
      setMaterials(result);
    };
    fetchData();
  }, []);
  // Benzersiz kategorileri al
  // useEffect(() => {
  //   const uniqueCategories = {};
  //   bagCategories.forEach(bag => {
  //     if (!uniqueCategories[bag.name]) {
  //       uniqueCategories[bag.name] = bag;
  //     }
  //   });
  //   setUniqueBagCategories(Object.values(uniqueCategories));
  // }, [bagCategories]);

  // Benzersiz malzemeleri al
  // useEffect(() => {
  //   const uniqueMaterials = {};
  //   bagCategories.forEach(bag => {
  //     if (!uniqueMaterials[bag.material]) {
  //       uniqueMaterials[bag.material] = bag;
  //     }
  //   });
  //   setUniqueMaterials(Object.values(uniqueMaterials));
  // }, [bagCategories]);

  // Benzersiz renkleri al
  // useEffect(() => {
  //   const uniqueColors = {};
  //   bagCategories.forEach(bag => {
  //     if (!uniqueColors[bag.color]) {
  //       uniqueColors[bag.color] = bag;
  //     }
  //   });
  //   setUniqueColors(Object.values(uniqueColors));
  // }, [bagCategories]);

  // Benzersiz olculeri al
  //  useEffect(()=>{
  //   const uniqueSizes ={};
  //   bagCategories.forEach(bag=>{
  //     if(!uniqueSizes[bag.size]){
  //       uniqueSizes[bag.size]=bag;
  //     }
  //   });
  //   setUniqueSizes(Object.values(uniqueSizes));
  //  },[bagCategories])
  return (
    <div className="w-[326px] flex flex-col gap-6">
    {/* Kategoriler */}
    <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-medium text-[#212121]">Categories</p>
        <IoIosArrowUp />
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {categories && categories.map(bag => (
            <li key={bag.id}>
             <button> <p>{bag.name}</p></button>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Malzeme */}
    <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-medium text-[#212121]">Materials</p>
        <IoIosArrowUp />
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {materials.map(bag => (
            <li key={bag.id} className="flex gap-[14px] items-center">
           <button className="flex gap-[14px] items-center"> 
             <input type="checkbox" />
              <p>{bag.name}</p>
           </button> 
            </li>
          ))}
        </ul>
      </div>
    </div>
 {/* parasi */}
 <div>
 <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
   <div className="flex justify-between items-center">
     <p className="text-[20px] font-medium text-[#212121]">Price</p>
     <IoIosArrowUp />
   </div>
   <div className="flex items-center gap-2">
     <div><input className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center" placeholder="$10"/></div>
     <p>-</p>
     <div><input className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center" placeholder="$50"/></div>
     <button className="px-[15px] py-[10px] bg-[#EF544F] rounded-[8px] text-white"><IoSearch  className="w-[20px] h-[20px]"/> </button>
   </div>
 </div>
 </div>
 {/* olculeri */}
 <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
   <div className="flex justify-between items-center">
     <p className="text-[20px] font-medium text-[#212121]">Size</p>
     <IoIosArrowUp />
   </div>
   <div >
   <ul className="flex gap-4">
          {sizes.map(bag => (
            <li key={bag.id} className="flex gap-[14px] items-center">
     <button className="py-[7px] px-[23px] rounded-[8px] border border-[#C8C8C8] text-[16px] font-normal">{bag.name}</button>
             
            </li>
          ))}
        </ul>
     

   </div>
 </div>

    {/* Renk */}
    <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-medium text-[#212121]">Colors</p>
        <IoIosArrowUp />
      </div>
      <div className="flex flex-wrap gap-[17px]">
        {colors.map(bag => (
          <button key={bag.id}>{bag.name}</button>
        ))}
      </div>
    </div>
  </div>

  );
};

export default Filter;

 