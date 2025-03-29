"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign-Up Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-white text-center">Create an Account</h2>
        <p className="text-gray-300 text-center mt-2">Sign up to get started</p>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg mt-1 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg mt-1 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg mt-1 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-400 hover:text-blue-500 font-semibold">
            Login
          </Link>
        </p>
        <div className="flex justify-center mt-2">
        <Link href="/">
          <button className="group relative px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 font-medium text-sm flex items-center overflow-hidden">
            <span className="relative z-10">Back to Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
         
        </Link>
        </div>
      </motion.div>
      
        
      </div>
    
  );
};

export default Signup;
