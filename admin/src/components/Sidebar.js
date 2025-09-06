import React from "react";
import { asset } from "../assets/asset";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
      <div
        className="flex flex-col gap-5 border-r border-gray-800 
                      w-2/5 sm:w-1/4 md:w-1/5 lg:w-1/6 
                      px-5 mt-3"
      >
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-gray-800"
          }
        >
          <div className="flex gap-3 items-center border border-gray-800 p-1 rounded-lg cursor-pointer">
            <img className="size-10" src={asset.add_icon} alt="" />
            <h1 className="hidden sm:block">Add food items</h1>
          </div>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-gray-800"
          }
        >
          <div className="flex gap-3 items-center border border-gray-800 p-1 rounded-lg cursor-pointer">
            <img className="size-10" src={asset.list_icon} alt="" />
            <h1 className="hidden sm:block">List food items</h1>
          </div>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-gray-800"
          }
        >
          <div className="flex gap-3 items-center border border-gray-800 p-1 rounded-lg cursor-pointer">
            <img className="size-10" src={asset.right_icon} alt="" />
            <h1 className="hidden sm:block">Display orders</h1>
          </div>
        </NavLink>
      </div>
  );
};

export default Sidebar;
