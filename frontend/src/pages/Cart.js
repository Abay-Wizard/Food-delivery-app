import { useContext} from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, foodItems,getTotalCart,url } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="p-5 max-w-5xl mx-auto">
      {/* Header Row */}
      <div className="hidden md:grid grid-cols-4 font-semibold text-lg border-b pb-2 mb-4">
        <h1>Item</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </div>

      {/* eslint-disable-next-line array-callback-return */}
      {foodItems.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-4 gap-4 items-center border rounded-2xl p-4 mb-4 shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`${url}/images/${item.image}`}
                  className="w-24 h-24 rounded-xl object-cover"
                  alt=""
                />
                <p className="font-medium text-gray-800">{item.name}</p>
              </div>

              <p className="text-gray-700">${item.price}</p>

              <p className="text-gray-700">x {cartItems[item._id]}</p>

              <div className="flex justify-between items-center w-full md:w-auto">
                <p className="font-semibold">
                  ${item.price * cartItems[item._id]}
                </p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="ml-4 text-red-500 cursor-pointer font-bold hover:scale-110 transition"
                >
                  ✕
                </p>
              </div>
            </div>
          );
        }
      })}

      <div className="p-5 max-w-xl mx-auto bg-white rounded-2xl shadow-md space-y-6 mb-10">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Cart details
        </h1>

        {/* Total + Checkout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4">
          <p className="text-xl font-bold">
            Total: <span className="text-green-600">${Math.round(getTotalCart())}</span>
          </p>
          <button onClick={()=>navigate('/order')} className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>

        {/* Promo Code */}
        <div className="space-y-3">
          <p className="text-gray-600">
            If you have a promo code, put it right here:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
