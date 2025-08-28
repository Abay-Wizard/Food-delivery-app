import React, { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold cursor-pointer">
          Tomato.
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {["home", "menu", "mobile-app", "contact us"].map((item) => (
            <li
              key={item}
              onClick={() => setMenu(item)}
              className={`capitalize transition-colors duration-200 cursor-pointer pb-1 ${
                menu === item
                  ? "border-b-2 border-red-500 text-red-600"
                  : "hover:text-red-500"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img
            src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
            alt="search"
            className="w-6 md:w-7 cursor-pointer hover:scale-110 transition-transform"
          />

          <div className="relative inline-block">
            <img
              src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1166717.jpg"
              alt="cart"
              className="w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>

          <button className="rounded-lg py-1.5 px-4 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
