import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItemCard from "./FoodItemCard";

const FoodDisplay = () => {
  const { foodItems } = useContext(StoreContext);
  return (
    <section className="">
        <h1 className="text-5xl text-gray-700 mb-5 mx-40">Best dishes near you :)</h1>
      <div className="grid grid-cols-4 gap-4 mx-40 my-20">
        {foodItems.map((item, index) =>  (
          <FoodItemCard
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
