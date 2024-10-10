import React from "react";
import BigBagpack from "./../../../assets/images/BigBagpack.png";
import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
const SingleProduct = ({ image, description, productId, price }) => {
  const addToCart = async (productId) => {
    console.log(price)
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("Please log in to add items to your cart.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find((user) => user.email === userEmail);

      if (user) {
        const existingProduct = user.basket.find(
          (item) => item.productId === productId
        );

        if (existingProduct) {
          existingProduct.count += 1;
        } else {
          user.basket.push({productId, count: 1 });
        }

        const updateResponse = await fetch(
          `http://localhost:3001/users/${user.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        if (updateResponse.ok) {
          alert("Item added to your cart!");
        } else {
          alert("Failed to update cart. Please try again.");
        }
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const addToWishlist = ()=>{

  }
  return (
    <div className="bg-[#F9F9F9] rounded-[8px] w-[360px] h-[508px] flex flex-col px-[24px] py-[28px] items-center justify-center gap-4">
    <Link to={`/product/:${productId}`}> {/* URL-də məhsul ID-sini əlavə et */}
      <div className="flex items-baseline w-[200px] h-[200px] mx-auto relative">
        <div className="absolute bottom-0 ">
          <img src={image} alt={description} />
        </div>
        <div className="absolute right-[-36px]">
          <LuHeart className="w-[22px] h-[22px]" />
        </div>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-500">
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-[16px] font-normal text-[#000] my-4">
        {description}
      </p>
      <div className="flex items-center gap-[14px]">
        <p className="text-[20px] font-semibold text-[#F75145]">{price}$</p>
        <p className="text-[#363636] opacity-75 text-[16px] font-normal">
          From $340.00
        </p>
      </div>
    </Link>
    <button
      className="py-[11px] w-full border border-[#212121] rounded-[8px] text-[#212121] font-medium text-[16px] mt-7"
      onClick={() => {
        addToCart(id);
      }}
    >
      Add to cart
    </button>
  </div>
  );
};

export default SingleProduct;
