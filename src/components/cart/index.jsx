import React, { useEffect, useState } from "react";
import SingleCartProduct from "./singleCartProducts";
// import CartProducts from './cartProducts'
// import Payment from './payment'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    const currentUser = data.find(
      (user) => user.email === localStorage.getItem("userEmail")
    );
    setUser(currentUser);
    setCart(currentUser ? currentUser.basket : []);
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const data = await response.json();
    setProducts(data);
  };

  const clearCart = async () => {
    if (user) {
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ basket: [] }),
      });

      // Clear the cart in the state
      setCart([]);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#fff] ">
      <div className="container max-w-[1128px] mx-auto flex flex-col py-[50px] gap-12">
        <div className="flex items-center justify-between">
          <h1 className="text-[40px] font-medium text-[#212121]">
            Shopping bag
          </h1>
          <button
            className="bg-red-500 px-5 py-3 rounded-[8px]"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
        <div className="flex items-start gap-6 justify-between">
          <div className="flex flex-col gap-6">
            {cart.length > 0 ? (
              cart.map((item, index) => {
                const product = products.find(
                  (prod) => prod.id === item.productId
                );
                return product ? (
                  <SingleCartProduct
                    key={index}
                    image={product.image}
                    name={product.name}
                    id={product.id}
                    price={product.price}
                    count={item.count}
                  />
                ) : null;
              })
            ) : (
              <div className="flex items-center justify-center">
                <h1 className="font-bold text-[60px]">Items Not Found</h1>
              </div>
            )}
          </div>
          <div>
            <div className="bg-[#F9F9F9] py-8 px-6 rounded-[8px]">
              <div className="flex justify-between">
                <p className="text-[#212121] text-[16px] font-normal">
                  Your subtotal
                </p>
                <p className="text-[#212121] text-[16px] font-normal">
                  US{" "}
                  {cart
                    .reduce((acc, item) => {
                      const product = products.find(
                        (prod) => prod.id === item.productId
                      );
                      return acc + (product ? product.price * item.count : 0);
                    }, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="text-[#212121] text-[16px] font-normal">
                  Shipping changes
                </p>
                <p className="text-[#212121] text-[16px] font-normal">Free</p>
              </div>
              <div className="flex justify-between mt-[20px]">
                <p className="text-[#212121] text-[18px] font-medium">Totals</p>
                <p className="text-[#212121] text-[18px] font-medium">
                  US{" "}
                  {cart
                    .reduce((acc, item) => {
                      const product = products.find(
                        (prod) => prod.id === item.productId
                      );
                      return acc + (product ? product.price * item.count : 0);
                    }, 0)
                    .toFixed(2)}
                </p>
              </div>
              <div className="border-dashed border border-[#D0D0D0] my-6"></div>
              <div className="border border-[#DBDBDB]  rounded-[8px]">
                <input
                  type="text"
                  placeholder="Discount prome code"
                  className=" p-[15px] rounded-l-[8px]"
                />
                <button className="px-[28px] py-[15px] bg-[#FF695E] rounded-r-[8px] text-white text-[16px] ">
                  Apply
                </button>
              </div>
            </div>
            <button className="py-[13px] bg-[#DF4244] w-full rounded-[8px] my-[23px] text-[16px] text-[#fff] font-medium">
              Confirm cart
            </button>
            <button className="py-[13px] border border-[#212121] w-full rounded-[8px] text-[16px]  font-medium">
              Cash payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
