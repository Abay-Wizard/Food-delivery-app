import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'
import { StoreContext } from "../context/StoreContext";


const SignUp = () => {
  const {url} = useContext(StoreContext)
  const [name,setName] =useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
  const data = {
    name,email,password
  }
  const HandleCreate = async (e) =>{
    e.preventDefault()
   const res= await axios.post(`${url}/api/user/register`,data)
    if(res.data.success){
      toast.success(res.data.message)
      setName('')
      setEmail('')
      setPassword('')
    }else{
      toast.error(res.data.message)
    }
    //console.log(res.data.message)
   

  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign up here
        </h1>
        <form onSubmit={HandleCreate} className="flex flex-col gap-4">
          <input
            onChange={(e)=>setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Your name"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Your email (ex: abay@gmail.com)"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Your password"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-purple-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="flex items-start gap-3 mt-4">
          <input
            type="checkbox"
            required
            className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <p className="text-sm text-gray-600">
            By checking the box, I agree with all the{" "}
            <span className="text-purple-600 font-medium hover:underline cursor-pointer">
              terms
            </span>{" "}
            and{" "}
            <span className="text-purple-600 font-medium hover:underline cursor-pointer">
              privacy rules
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
