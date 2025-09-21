import React, { useState, useEffect } from 'react'
import url from '../assets/url'
import axios from 'axios'
import toast from 'react-hot-toast'

const FoodOrder = () => {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/orders`)
      if (response.data.success) {
        setOrders(response.data.data)
      } else {
        toast.error('Something went wrong!')
      }
    } catch (error) {
      toast.error('Server error!')
    }
  }

  const handleStatus = async (status, orderId) => {
  try {
    const response = await axios.post(`${url}/api/order/status`, { status, orderId })
    if (response.data.success) {
      toast.success("Order status updated")
      setOrders(prev=>prev.map(order=>(
        order._id ===orderId ? {...order,status}:order
      )))
    } else {
      toast.error("Failed to update status")
    }
  } catch (error) {
    toast.error("Server error while updating status")
  }
}


  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Orders</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg transition"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b pb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
                className="w-8 h-8"
                alt="order"
              />
              <p className="text-gray-700 font-medium">
                {order.items.map((item, idx) => {
                  if (!item) return null
                  return (
                    <span key={idx}>
                      {item.name} × {item.quantity}
                      {idx !== order.items.length - 1 && ', '}
                    </span>
                  )
                })}
              </p>
            </div>

            {/* Customer Info */}
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street}</p>
              <p>
                {order.address.city}, {order.address.state},{' '}
                {order.address.country}
              </p>
              <p>{order.address.zipcode}</p>
              <p className="mt-1 text-gray-700 font-medium">
                📞 {order.address.phone}
              </p>
            </div>

            {/* Order Summary */}
            <div className="flex justify-between items-center text-gray-700 font-medium mt-2">
              <span>Items: {order.items.length}</span>
              <span className="text-lg font-bold text-green-600">
                ${order.amount}
              </span>
            </div>

            {/* Status Selector */}
            <select
              onChange={(e)=>handleStatus(e.target.value,order._id)}
              value={order.status || "Food processing"}
              className="mt-2 border rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="Food processing">Food processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodOrder
