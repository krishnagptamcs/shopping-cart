import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";

import {Link} from "react-router-dom";

export const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));

    // use effect run when cart change either add or delet item
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto" >
      {cart.length > 0 ? (
        <div className="flex justify-between">
          <div>
            {cart.map((item, index) => (
              <CartItem item={item} key={item.id} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col  items-center w-[300px] py-4 px-10 relative">
            <p className="font-bold text-gray-700 text-4xl">Your cart </p>
            <h1 className="font-bold text-green-600 text-3xl mt-5 uppercase">Summary</h1>

            <p className="absolute top-[22rem] font-extrabold text-xl">
              Total Items: <span className="text-green-600">{cart.length}</span>
            </p>

            <p className="absolute top-[24rem] font-extrabold text-xl mt-2">Total Amount:<span className="text-green-600">${totalAmount}</span></p>
            <button className="absolute top-[27rem] font-extrabold text-xl mt-2 bg-green-700 border-2 border-green-900 w-full py-2 rounded-lg capitalize hover:bg-green-600 hover:text-gray-300 transition duration-300 ease-in hover:border-white hover:border-2">Check out</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 justify-center items-center mt-40">
          <h1 className="font-bold text-2xl capitalize">Empty cart 😔 </h1>
          <Link to={"/"}>
            <button className="font-bold text-2xl capitalize bg-green-700 py-4 px-6 rounded-lg text-white  hover:bg-green-800 hover:scale-105 transition duration-500">Shop now ! 🤩</button>
          </Link>
        </div>
      )}
    </div>
  );
};
