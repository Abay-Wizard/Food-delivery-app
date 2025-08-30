import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign up here
        </h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your email (ex: abay@gmail.com)"
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
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
