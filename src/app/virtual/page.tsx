"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import HeaderComponent from "../components/Navbar";

const VirtualTours = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tours = [
    { id: "house1", name: "Luxury Villa", image: "/Images/house.jpg" },
    { id: "house2", name: "Modern Apartment", image: "/Images/house.jpg" },
    { id: "house3", name: "Cozy Cottage", image: "/Images/house.jpg" },
  ];

  return (
    <div>
        <HeaderComponent/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 flex flex-col items-center">
        
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-white text-center"
      >
        Explore Our Virtual Tours
      </motion.h1>

      {/* Tour Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedTour(tour.id)}
          >
            <Image src={tour.image} alt={tour.name} className="w-full h-52 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-white">{tour.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Viewer */}
      {selectedTour && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-4xl"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Viewing: {selectedTour}</h2>
            <button
              onClick={() => setSelectedTour(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>

          {/* 3D Canvas */}
          <div className="mt-6 h-[400px]">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <Environment preset="city" />
              <mesh>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial map={null} />
              </mesh>
            </Canvas>
          </div>
        </motion.div>
      )}

      {/* Back to Home */}
     
    </div>
    </div>
  );
};

export default VirtualTours;
