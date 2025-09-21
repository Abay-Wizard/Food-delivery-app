import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "./../context/StoreContext";
import axios from "axios";

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorder`,
      {},
      { headers: { token } }
    );
    setOrders(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Orders
      </h1>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <p className="text-gray-700 font-medium mb-2">
              {order.items.map((item, i) => {
                if (!item) return null;
                return (
                  <span key={i}>
                    {item.name} × {item.quantity}
                    {i !== order.items.length - 1 && ", "}
                  </span>
                );
              })}
            </p>
            <p className="text-lg font-semibold text-green-600">
              ${order.amount}
            </p>
            <p className="text-gray-600">Items: {order.items.length}</p>
            <p className="text-gray-700">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`${
                  order.status === "Delivered"
                    ? "text-green-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                }`}
              >
                {order.status}
              </span>
            </p>
            <button onClick={fetchOrders} className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
