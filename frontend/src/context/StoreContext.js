import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const url = "https://food-delivery-app-1-7bb1.onrender.com";
  const [cartItems, setCartItems] = useState({});
  const [foodItems, setFoodItems] = useState([]);
  const [token, setToken] = useState("");
  const fetchFoodItems = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      setFoodItems(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartData=async(token)=>{
    const res=await axios.get(`${url}/api/cart/get`,{headers:{token}})
    //console.log(res.data)
    setCartItems(res.data.cartData)
  }

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      axios.post(`${url}/api/cart/delete`,{itemId},{headers:{token}})
    } 
  };


  const getTotalCart = () => {
    let totalPrice = 0;
    foodItems.forEach((item) => {
      if (cartItems[item._id] > 0) {
        totalPrice += cartItems[item._id] * item.price;
      }
    });
    return totalPrice;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    foodItems.forEach((item) => {
      if (cartItems[item._id] > 0) {
        totalItems += cartItems[item._id];
      }
    });
    return totalItems;
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodItems();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await getCartData(localStorage.getItem('token'))
      }
    };
    loadData()
  }, []);

  const contextValue = {
    foodItems,
    setFoodItems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCart,
    getTotalItems,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
