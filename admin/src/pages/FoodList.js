import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import url from "../assets/url";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const FetchFoodItems = async () => {
      try {
        const res = await axios.get(`${url}/api/food/list`);
        setFoods(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchFoodItems();
  }, []);
  const HandleDelete = async (id) => {
    try {
      const res = await axios.delete(`${url}/api/food/delete/${id}`);
      if (res.data) {
        toast.success(res.data.message);
        setFoods((prev) => prev.filter((food) => food._id !== id));
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      //console.log("Something went wrong!");
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mb-4">All Food Items</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-600 font-medium">Image</th>
              <th className="p-3 text-left text-gray-600 font-medium">Name</th>
              <th className="p-3 text-left text-gray-600 font-medium">
                Description
              </th>
              <th className="p-3 text-left text-gray-600 font-medium">Price</th>
              <th className="p-3 text-center text-gray-600 font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={`${url}/images/${food.image}`}
                    alt={food.name}
                    className="size-16 object-cover rounded"
                  />
                </td>
                <td className="p-3">{food.name}</td>
                <td className="p-3 truncate max-w-xs">{food.description}</td>
                <td className="p-3 font-semibold text-gray-700">
                  ${food.price}
                </td>
                <td className="p-3 flex justify-center items-center gap-2">
                  <button
                    onClick={() => HandleDelete(food._id)}
                    className="p-2 bg-red-100 rounded hover:bg-red-200"
                  >
                    <AiFillDelete size={20} className="text-red-500" />
                  </button>
                  <button className="p-2 bg-purple-100 rounded hover:bg-purple-200">
                    <AiFillEdit size={20} className="text-purple-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FoodList;
