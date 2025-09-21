import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // controls mobile menu
  const [isdropDownOpen,setIsDropDownOpen]=useState(false)
  const { getTotalItems, token, setToken } = useContext(StoreContext);
  const logout = ()=>{
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }
  const navigate=useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-red-600 text-3xl md:text-4xl font-bold">
            Global Bites.
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`capitalize transition-colors duration-200 cursor-pointer pb-1 ${
              menu === "home"
                ? "border-b-2 border-red-500 text-red-600"
                : "hover:text-red-500"
            }`}
          >
            Home
          </Link>

          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={`capitalize transition-colors duration-200 cursor-pointer pb-1 ${
              menu === "menu"
                ? "border-b-2 border-red-500 text-red-600"
                : "hover:text-red-500"
            }`}
          >
            Menu
          </a>

          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={`capitalize transition-colors duration-200 cursor-pointer pb-1 ${
              menu === "mobile-app"
                ? "border-b-2 border-red-500 text-red-600"
                : "hover:text-red-500"
            }`}
          >
            Mobile App
          </a>

          <a
            href="#contact-us"
            onClick={() => setMenu("contact us")}
            className={`capitalize transition-colors duration-200 cursor-pointer pb-1 ${
              menu === "contact us"
                ? "border-b-2 border-red-500 text-red-600"
                : "hover:text-red-500"
            }`}
          >
            Contact Us
          </a>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <img
            src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
            alt="search"
            className="w-6 md:w-7 cursor-pointer hover:scale-110 transition-transform"
          />

          {/* Cart */}
          <Link to="/cart" className="relative inline-block">
            <img
              src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1166717.jpg"
              alt="cart"
              className="w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {getTotalItems() > 0 ? getTotalItems() : ""}
            </span>
          </Link>

          {/* Sign in */}
          {!token ? (
            <Link to="/signin" className="hidden sm:block">
              <button className="mt-2 rounded-lg py-1.5 px-4 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                Sign In
              </button>
            </Link>
          ) : 
            <div onClick={()=>setIsDropDownOpen(prev =>!prev)} className="relative group inline-block">
              {/* Profile Image */}
              <img
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                className="size-16 rounded-full cursor-pointer"
                alt=''
              />

              {/* Dropdown Menu */}
              <ul className={!isdropDownOpen? `absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-2xl p-2 mt-2 right-0 w-40`: `absolute group-hover:flex flex-col bg-white shadow-lg rounded-2xl p-2 mt-2 right-0 w-40`}>
                <li onClick={()=>navigate('/myorders')} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <img
                    src="https://images.vexels.com/media/users/3/200093/isolated/preview/596f0d8cb733b17268752d044976f102-shopping-bag-icon.png"
                    className="size-6"
                    alt=''
                  />
                  <p className="text-sm">Orders</p>
                </li>
                <hr className="my-1 border-gray-200" />
                <li onClick={logout} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4421/4421772.png"
                    className="size-6"
                    alt=''
                  />
                  <p className="text-sm">Logout</p>
                </li>
              </ul>
            </div>
          }

          {/* Mobile Hamburger */}
          <div onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
            <FaBars className="size-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {["home", "menu", "mobile-app", "contact us"].map((item) => (
              <Link
                to={item === "home" ? "/" : ""}
                key={item}
                onClick={() => {
                  setMenu(item);
                  setIsOpen(false);
                }}
                className={`capitalize transition-colors duration-200 cursor-pointer ${
                  menu === item
                    ? "text-red-600 font-semibold"
                    : "hover:text-red-500"
                }`}
              >
                {item}
              </Link>
            ))}
            <Link to="/signin">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className=" mt-2 rounded-lg py-1.5 px-4 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
              >
                Sign In
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
