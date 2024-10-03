
import React, { useEffect, useState } from "react";
import SingleProduct from "../../common/singleProduct";
import useStore from "../../../store/store";

const BagsList = () => {
  const [bags, setBags] = useState([]);
  const [filteredBags, setFilteredBags] = useState([]);
  const selectedCategoryId = useStore((state) => state.selectedCategoryId);
  const selectedMaterialId = useStore((state) => state.selectedMaterialId);
  const selectedSizeId = useStore((state) => state.selectedSizeId);
  const selectedColorId = useStore((state) => state.selectedColorId);

      const fetchData = async () => {
        const response = await fetch("http://localhost:3001/bags");
        const result = await response.json();
        setBags(result);
      };
  const fetchProd = async () => {
    const resp = await fetch("http://localhost:3001/bags");

    const data = await resp.json();

    let newFilter = data;

    if (selectedColorId) {
      newFilter = [...newFilter].filter(
        (item) => item.colorId == selectedColorId
      );
    }
    if (selectedSizeId) {
      newFilter = [...newFilter].filter(
        (item) => item.sizeId == selectedSizeId
      );
    }
    if (selectedCategoryId) {
      newFilter = [...newFilter].filter(
        (item) => item.categoryId == selectedCategoryId
      );
    }
    if (selectedMaterialId) {
      newFilter = [...newFilter].filter(
        (item) => item.materialId == selectedMaterialId
      );
    }
    console.log(newFilter, "newFilter");
    setFilteredBags(newFilter);
  };

  useEffect(() => {
    fetchData();
    fetchProd();
  }, []);

  useEffect(() => {
    fetchProd();
  }, [
    selectedCategoryId,
    selectedMaterialId,
    selectedSizeId,
    selectedColorId,
    bags,
  ]);

  console.log("Filtered Bags:", filteredBags);
  return (
    <div className="grid grid-cols-2 gap-[23px] ">
      {filteredBags.length===0 ? (<div className="flex items-center justify-center">
        <h1 className="font-bold text-[60px] ">Items Not Found</h1>
      </div> ):(
        filteredBags.map((bag) => (
          <SingleProduct
            key={bag.id}
            description={bag.description}
            image={bag.image}
            id={bag.id}
          />)
        ))}
    </div>
  );
};

export default BagsList;