import React from 'react'
import menu_list from '../assets/Menu_list'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section id='explore-menu' className="px-4 sm:px-10 md:mx-40 my-10 md:my-20">
      <div className="mb-10 md:w-1/2 flex flex-col items-start gap-5">
        <h1 className="text-2xl sm:text-3xl font-semibold">Explore our menu</h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Discover a world of flavors crafted to delight every taste bud. From
          classic favorites like pizza, pasta, and burgers to traditional dishes
          like shiro and hearty beef meals, our menu is designed to bring
          comfort and excitement to your dining experience. Whether you’re
          craving something light and fresh or rich and savory, each dish is
          made with care to ensure the perfect balance of taste and
          satisfaction. Explore our menu and find your next favorite bite.
        </p>
      </div>

      {/* Scrollable menu icons */}
      <div className="flex gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-center"
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
          >
            <img
              src={item.image}
              alt="menu"
              className={
                category === item.name
                  ? "size-16 sm:size-20 border-4 border-red-400 object-cover rounded-full cursor-pointer"
                  : "size-16 sm:size-20 rounded-full cursor-pointer"
              }
            />
            <p className="text-xs sm:text-sm text-slate-600 cursor-pointer mt-1">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <hr className="bg-gray-400 mt-5 h-0.5 border-none" />
    </section>
  )
}

export default ExploreMenu
