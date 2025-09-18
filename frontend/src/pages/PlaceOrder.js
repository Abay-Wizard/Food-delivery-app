import React, { useState, useContext } from "react";
import axios from 'axios'
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCart, url, foodItems, cartItems, token } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipcode: '',
    phone: '',
    street: '',
    state: '',
    city: '',
    country: ''
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    const orderItems = [];
    let itemInfo;
    foodItems.map((item) => {
      if (cartItems[item._id] > 0) {
        itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
      }
      orderItems.push(itemInfo);
    });
    let orderData={
       items:orderItems,
       amount:getTotalCart()+2,
       address:data
    }
    let response=await axios.post(`${url}/api/order/place`,orderData,{headers:{token}})
    if(response.data.success){
      const {session_url}=response.data
      window.location.replace(session_url)
    }
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Delivery Information
      </h1>

      {/* Unified Form Section */}
      <form onSubmit={placeOrder} className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-lg">
        {/* Left Column */}
        <div className="space-y-4">
          <input
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            name='firstName'
            placeholder="First name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            name='lastName'
            placeholder="Last name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name='email'
            placeholder="Email address"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
            name='city'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <input
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
            name='zipcode'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
            name='phone'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            name='country'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            name='street'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            name='state'
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Total + Payment Button */}
        <div className="mt-10 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Total Cart: <span className="text-green-600">${Math.round(getTotalCart()) + 2}</span>
          </h1>
          <button type='submit' className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
            Go to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
