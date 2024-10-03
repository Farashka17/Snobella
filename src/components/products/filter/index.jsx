import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useStore from "../../../store/store";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleArrows=()=>{
    setIsOpen(!isOpen)
  }

  const [categories, setCategories] = useState([]);
  const setSelectedCategoryId = useStore(
    (state) => state.setSelectedCategoryId
  );

  const [materials, setMaterials] = useState([]);
  const setSelectedMaterialId = useStore(
    (state) => state.setSelectedMaterialId
  );

  const [sizes, setSize] = useState([]);
  const setSelectedSizeId = useStore(
    (state) => state.setSelectedSizeId);

  const [colors, setColors] = useState([]);
  const setSelectedColorId = useStore(
    (state) => state.setSelectedColorId);

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3001/category");
    const data = await response.json();
    setCategories(data);
  };
  const fetchMaterials = async () => {
    const response = await fetch("http://localhost:3001/materials");
    const data = await response.json();
    setMaterials(data);
  };
  const fetchSizes = async () => {
    const response = await fetch("http://localhost:3001/sizes");
    const data = await response.json();
    setSize(data);
  };
  const fetchColors = async () => {
    const response = await fetch("http://localhost:3001/colors");
    const data = await response.json();
    setColors(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchMaterials();
    fetchSizes();
    fetchColors();
  }, []);
  return (
    <div className="w-[326px] flex flex-col gap-6">
      <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-medium text-[#212121]">Categories</p>
          {isOpen === true ? <IoIosArrowUp className="cursor-pointer" onClick={toggleArrows}/> : <IoIosArrowDown className="cursor-pointer" onClick={toggleArrows}/>}
        </div>
        <div>
          {isOpen === true ?
          <ul className="flex flex-col gap-4">
            {categories.map((category) => (
              <li key={category.id} >
                <button onClick={() => setSelectedCategoryId(category.id)}>
                  <p>{category.name}</p>
                </button>
              </li>
            ))}
          </ul>:""}
        </div>
      </div>

      <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-medium text-[#212121]">Materials</p>
          <IoIosArrowUp/>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            {materials.map((material) => (
              <li key={material.id} className="flex gap-[14px] items-center">
                <button
                  className="flex gap-[14px] items-center"
                  onClick={() => setSelectedMaterialId(material.id)}
                >
                  <p>{material.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-medium text-[#212121]">Price</p>
            <IoIosArrowUp />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <input
                className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center"
                placeholder="$10"
              />
            </div>
            <p>-</p>
            <div>
              <input
                className="py-[7px] w-[72px] border border-[#C8C8C8] rounded-[8px] text-center"
                placeholder="$50"
              />
            </div>
            <button className="px-[15px] py-[10px] bg-[#EF544F] rounded-[8px] text-white">
              <IoSearch className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-medium text-[#212121]">Size</p>
          <IoIosArrowUp />
        </div>
        <div>
          <ul className="flex gap-4">
            {sizes.map((size) => (
              <li key={size.id} className="flex gap-[14px] items-center">
                <button
                  className="py-[7px] px-[23px] rounded-[8px] border border-[#C8C8C8] text-[16px] font-normal"
                  onClick={() => setSelectedSizeId(size.id)}
                >
                  {size.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full rounded-[8px] py-4 px-10 border border-[#D0D0D0] flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-medium text-[#212121]">Colors</p>
          <IoIosArrowUp />
        </div>
        <div className="flex flex-wrap gap-[17px]">
          {colors.map((color) => (
            <button key={color.id} onClick={() => setSelectedColorId(color.id)}>
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;