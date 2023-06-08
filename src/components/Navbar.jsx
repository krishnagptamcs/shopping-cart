import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <div className="ml-5">
        <NavLink to="/">
          <img src="../image2.png" width={120} height={100}  className="bg-slate-900"/>
        </NavLink>
      </div>

      <div className="flex justify-between items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p className="">Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <BsCart4  className="text-2xl"/>

            {cart.length > 0 && (
              <span className="text-sm absolute -top-2 -right-2 bg-green-600 rounded-full w-5 h-5  z-20 flex justify-center items-center animate-bounce">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
