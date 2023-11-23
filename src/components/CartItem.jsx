import React from "react";

import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import {remove} from "../redux/slices/CartSlice";

export const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  console.log("running..")

  const removeFromcart = () => {
    dispatch(remove(item.id));
    toast.error("item removed from cart 😓");
  };
  return (
    <div className="w-[800px] mx-auto border-b-4 py-4 px-5">
      <div className="flex  items-center  gap-4">
        <div className="w-[200px]">
          <img src={item.image} className="w-full" />
        </div>

        <div className="flex flex-col gap-2 w-[550px]">
          <h1 className="text-gray-900 font-semibold text-lg text-left truncate w-100 mt-1">{item.title}</h1>
          <h1 className="w-full text-gray-700 font-normal text-[17px]">{item.description}</h1>

          <div>
            <p className="text-green-600 font-bold">${item.price}</p>
            <div onClick={removeFromcart}>
              <MdDeleteForever  className="text-3xl text-red-600  mt-1 cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
