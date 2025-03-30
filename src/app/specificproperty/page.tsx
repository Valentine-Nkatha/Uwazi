'use client'

import { useParams } from "next/navigation";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaHeart, FaShare } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeaderComponent from "../components/Navbar";

const PropertyDetails = () => {
  const { id } = useParams();

  // Mock property data (replace this with actual data from an API or database)
  const property = {
    id,
    title: "Luxury Modern Villa",
    location: "Nairobi, Kenya",
    price: "Ksh 15,000,000",
    bedrooms: 4,
    bathrooms: 3,
    size: "2500 sqft",
    description:
      "A luxurious villa with modern finishes, spacious rooms, and a breathtaking view. Perfect for families or investment.",
    image: "/Images/house.jpg", // Replace with actual image URL
    features: [
      "Swimming Pool",
      "Garden",
      "Smart Home",
      "Security System"
    ]
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <HeaderComponent />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button & Actions */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/landing">
            <motion.div 
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
              whileHover={{ x: -5 }}
            >
              <IoArrowBack />
              <span>Back to listings</span>
            </motion.div>
          </Link>
          
          <div className="flex gap-4">
            <motion.button 
              className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-emerald-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaHeart />
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-emerald-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShare />
            </motion.button>
          </div>
        </div>

        {/* Property Showcase */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Image */}
          <div className="lg:col-span-2">
            <motion.div 
              className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={property.image}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  For Sale
                </span>
                <h1 className="text-3xl font-bold mt-2 drop-shadow-md">{property.title}</h1>
                <p className="flex items-center gap-2 mt-1 text-gray-200">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  {property.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Property Details Card */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                    <span className="text-sm text-emerald-800 font-medium">Property ID</span>
                    <p className="text-emerald-600 font-bold">{property.id}</p>
                  </div>
                  <span className="text-2xl font-bold text-emerald-700">{property.price}</span>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <FaBed className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Bedrooms</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <FaBath className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Bathrooms</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <FaRulerCombined className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-semibold">{property.size}</p>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2">About this property</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>
                
                {/* Amenities */}
                <div>
                  <h2 className="text-lg font-bold mb-2">Key Features</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Button */}
              <motion.button
                className="mt-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Schedule a Viewing</span>
                <span className="absolute inset-0 bg-emerald-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetails;