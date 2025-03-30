"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeaderComponent from "../components/Navbar";
import Link from "next/link";

const properties = [
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    image: "/Images/house.jpg",
    price: 500,
    rating: 4.9,
  },
  {
    name: "Modern Apartment",
    location: "New York, NY",
    image: "/Images/house.jpg",
    price: 350,
    rating: 4.7,
  },
  {
    name: "Cozy Cottage",
    location: "Aspen, CO",
    image:"/Images/house.jpg",
    price: 250,
    rating: 4.8,
  },
];

const PropertiesPage = () => {
  return (
    <div>
        <HeaderComponent/>
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Explore Our Properties
      </motion.h1>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image & Rating */}
            <div className="relative">
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-yellow-500 font-bold flex items-center">
                  ⭐ {property.rating}
                </span>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
              {/* Location */}
              <div className="flex items-center mb-3">
                <svg
                  className="w-5 h-5 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-gray-600">{property.location}</p>
              </div>

              {/* Property Name */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{property.name}</h3>

              {/* Price */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-2xl font-bold text-indigo-600">
                  ${property.price}{" "}
                  <span className="text-sm font-normal text-gray-500">/ Night</span>
                </div>
              </div>

              {/* View Details Button */}
             <Link href="/specificproperty"> <button className="w-full mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-colors">
                View Details
              </button></Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PropertiesPage;
