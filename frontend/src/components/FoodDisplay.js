import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItemCard from "./FoodItemCard";

const FoodDisplay = () => {
  const { foodItems,url } = useContext(StoreContext);
  //console.log("Food items in display:", foodItems);
  if(foodItems.length===0){
    return <p className='text-3xl text-green-600 text-center'>Loading ...</p>
  }

  return (
    <section>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-600 mb-5 px-4 sm:px-10 md:mx-40">
        Best dishes near you :)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-10 md:mx-40 my-10 md:my-20">
        {foodItems.map((item, index) => (
          <FoodItemCard
            key={index}
            name={item.name}
            price={item.price}
            description={item.description}
            image={`${url}/images/${item.image}`}
            id={item._id}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
