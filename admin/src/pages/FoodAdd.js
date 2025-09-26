import {useState } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { asset } from "../assets/asset";
import url from "../assets/url";

const FoodAdd = () => {
  const [image, setImage] = useState(null)
  const [name,setName] =useState('')
  const [price,setPrice]=useState('')
  const [description,setDescription]=useState('')
  const [category,setCategory] =useState('Salad')
  
  const HandelSubmit = async (e) => {
  e.preventDefault(); // stop form reload

  try {
    // build FormData
    const formData = new FormData();
    formData.append("image", image);          // file
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);

    // send to backend
   const res = await axios.post(`${url}/api/food/add`, formData);

    toast.success(res.data.message);
    setImage(null);
    setName('');
    setPrice('');
    setDescription('');
    setCategory('Salad');

  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form onSubmit={HandelSubmit} className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 space-y-6">
        
        {/* Upload image */}
        <div className="text-center">
          <p className="font-medium text-gray-700 mb-2">Upload image</p>
          <label
            htmlFor="image"
            className="cursor-pointer flex justify-center items-center"
          >
            <img
              className="size-24 object-cover rounded-lg border border-dashed border-gray-400 hover:border-red-500 transition"
              src={image? URL.createObjectURL(image) :asset.upload}
              alt="upload"
            />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" required hidden />
        </div>

        {/* Product name */}
        <div>
          <p className="font-medium text-gray-700">Product name</p>
          <input
            onChange={(e)=>setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type name here"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Product description */}
        <div>
          <p className="font-medium text-gray-700">Product description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            rows={4}
            placeholder="Write about the dish here"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-700">Product category</p>
            <select
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-700">Product price</p>
            <input
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
              type="number"
              required
              placeholder="$12"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default FoodAdd;
