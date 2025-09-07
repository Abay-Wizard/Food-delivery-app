import { createContext, useState } from "react";
import foodItems from "../assets/FoodItems";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const url='http://localhost:5000'
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCart = () =>{
    let totalPrice=0
    foodItems.forEach(item =>{
        if (cartItems[item.id] >0){
            totalPrice+= cartItems[item.id]*item.price
        }
    })
    return totalPrice
  }

  const getTotalItems = () =>{
    let totalItems=0
    foodItems.forEach(item=>{
        if (cartItems[item.id] > 0){
            totalItems+=cartItems[item.id]
        }
    })
    return totalItems
  }
 
  const contextValue = {
    foodItems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCart,
    getTotalItems,
    url
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
