import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import { add, remove } from "../redux/slices/CartSlice";
// import "react-toastify/dist/React-Toastify.css";

export const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed succesfully 😓");

      // Track the "removebutton_clicked" event
      window.gtag('event', 'removebutton_clicked', {
        event_category: 'Engagement',
        event_label: 'Remove Cart Button Clicked',
      });
  };

  const addCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart 😀 ");

    // Track the "addtocartbutton_clicked" event
    window.gtag("event", "addtocartbutton_clicked", {
      event_category: "Engagement",
      event_label: "Add to Cart Button Clicked",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 hover:scale-110 transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 mt-10 ml-5 rounded-xl  ">
      <div>
        <h3 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title.split(" ").slice(0, 3)}
        </h3>
      </div>
      <div>
        {/* for short description */}
        <p className="w-40 text-gray-400 font-normal text-[14px]">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-14">
        <p className="text-green-600 font-semibold">${post.price}</p>

        {/* condition to show addcart or removecart button */}
        {cart.some((p) => p.id == post.id) ? (
          <button
            onClick={removeCart}
            className="font-semibold text-gray-700 border-2 border-gray-700 text-[12px]  rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in bg-green-600 "
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addCart}
            className="font-semibold text-gray-700 border-2 border-gray-700 text-[12px]  rounded-full p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
