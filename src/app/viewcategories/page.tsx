"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeaderComponent from "../components/Navbar";

const categories = [
  { title: "Urban Apartments", imageUrl: "/Images/house.jpg", properties: 42 },
  { title: "Ranch Estates", imageUrl: "/Images/house.jpg", properties: 28 },
  { title: "Beach Villas", imageUrl: "/Images/house.jpg", properties: 36 },
  { title: "Safari Lodges", imageUrl: "/Images/house.jpg", properties: 19 },
  { title: "Luxury Penthouses", imageUrl: "/Images/house.jpg", properties: 15 },
  { title: "Mountain Cabins", imageUrl: "/Images/house.jpg", properties: 22 },
];

const CategoriesPage = () => {
  return (
    <div>
        <HeaderComponent/>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-10"
      >
        Explore All Categories
      </motion.h1>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={category.imageUrl}
              alt={category.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

            {/* Category Name */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-white text-2xl font-bold tracking-wide group-hover:scale-110 transition-all duration-300">
                {category.title}
              </h2>
              <div className="mt-2 bg-white/80 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                {category.properties} Properties
              </div>
              <Link href="/specificproperty/">
                <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-full font-medium opacity-90 hover:opacity-100 transition">
                  View Listings
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-12">
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
    </div>
    </div>
  );
};

export default CategoriesPage;
