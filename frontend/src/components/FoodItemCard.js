import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItemCard = ({id, name, price, description, image }) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center text-center cursor-pointer">
      
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

    
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>

   
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

      
      <div className="flex justify-between items-center w-full mt-auto">
       
        <span className="text-purple-600 font-extrabold text-xl tracking-wide">
          ${price}
        </span>

        
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="bg-purple-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md hover:bg-purple-700 active:scale-90 transition-all duration-200"
          >
            +
          </button>
        ) : (
          <div className="flex items-center gap-3 bg-purple-100 rounded-full px-3 py-1 shadow-inner">
            <button
              onClick={() => removeFromCart(id)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold hover:bg-red-700 active:scale-90 transition"
            >
              -
            </button>

            <p className="text-green-700 font-bold text-lg">{cartItems[id]}</p>

            <button
              onClick={() => addToCart(id)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white text-lg font-bold hover:bg-purple-700 active:scale-90 transition"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;
