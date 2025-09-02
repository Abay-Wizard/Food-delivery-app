import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCart } = useContext(StoreContext);

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Delivery Information
      </h1>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-lg">
        {/* Left Column */}
        <div className="space-y-4">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zip code"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>

          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Street"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>
        </div>
      </div>

      {/* Total + Button */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Total Cart: <span className="text-green-600">${Math.round(getTotalCart())}</span>
        </h1>
        <button className="px-8 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
          Go to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
