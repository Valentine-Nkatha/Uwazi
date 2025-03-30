"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {  Environment, useGLTF, PresentationControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeaderComponent from "../components/Navbar";
import { FaVrCardboard, FaCompass, FaTimes, FaInfoCircle } from "react-icons/fa";

// Define types for our data
interface TourData {
  id: string;
  name: string;
  image: string;
  location: string;
  features: string[];
}

interface TourCardProps {
  tour: TourData;
  onClick: () => void;
  index: number;
}

// Custom tour card component with proper types
const TourCard = ({ tour, onClick, index }: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      
      <Image 
        src={tour.image} 
        alt={tour.name} 
        width={500} 
        height={300} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{tour.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{tour.location}</p>
        
        <div className="flex items-center gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <FaVrCardboard className="text-emerald-400" />
            Start Tour
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// 3D House Model component with proper types
const Model = () => {
  return (
    <PresentationControls
      global
      zoom={0.8}
      rotation={[0, -Math.PI / 4, 0]}
      polar={[-Math.PI / 4, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <primitive 
        object={useGLTF("/models/house.glb").scene} 
        scale={2} 
        position={[0, -2, 0]} 
      />
    </PresentationControls>
  );
};

const VirtualTours = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);
  const [activeTourIndex, setActiveTourIndex] = useState<number>(0);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  const tours: TourData[] = [
    { 
      id: "luxury-villa", 
      name: "Luxury Villa", 
      image: "/Images/house.jpg",
      location: "Nairobi, Kenya",
      features: ["4 Bedrooms", "Swimming Pool", "Garden", "Smart Home"]
    },
    { 
      id: "modern-apartment", 
      name: "Modern Apartment", 
      image: "/Images/house.jpg",
      location: "Mombasa, Kenya",
      features: ["2 Bedrooms", "Ocean View", "Gym", "Rooftop Terrace"]
    },
    { 
      id: "cozy-cottage", 
      name: "Cozy Cottage", 
      image: "/Images/house.jpg",
      location: "Nakuru, Kenya",
      features: ["3 Bedrooms", "Fireplace", "Lake View", "Private Garden"]
    },
  ];

  const handleTourClick = (tourId: string, index: number) => {
    setSelectedTour(tourId);
    setActiveTourIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <HeaderComponent />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-16 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-transparent z-10" />
          <Image 
            src="/Images/house.jpg" 
            alt="Virtual Tours" 
            width={1200} 
            height={400} 
            className="w-full h-64 object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Immersive <span className="text-emerald-400">Virtual</span> Tours
              </h1>
              <p className="text-lg text-gray-200 max-w-xl">
                Experience properties in stunning 3D before your visit. Navigate through spaces as if you were actually there.
              </p>
              
              <motion.div 
                className="flex gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-emerald-600/20">
                  <FaVrCardboard />
                  <span>Start Exploring</span>
                </button>
                <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium py-2 px-6 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-12">
          {/* Featured Tours Text */}
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-2 inline-block relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">Browse Featured Properties</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-emerald-500/20 -z-0 rounded"></span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Select any property to begin an interactive 3D walkthrough experience
            </p>
          </div>

          {/* Tour Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <TourCard 
                key={tour.id}
                tour={tour}
                index={index}
                onClick={() => handleTourClick(tour.id, index)}
              />
            ))}
          </div>
        </div>

        {/* 3D Viewer Modal */}
        <AnimatePresence>
          {selectedTour && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl"
              >
                {/* Modal header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {tours[activeTourIndex].name}
                    </h2>
                    <p className="text-gray-400">{tours[activeTourIndex].location}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsInfoVisible(!isInfoVisible)}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <FaInfoCircle size={18} />
                    </button>
                    <button
                      onClick={() => setSelectedTour(null)}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <FaTimes size={18} />
                    </button>
                  </div>
                </div>
                
                {/* 3D Viewer with sidepanel */}
                <div className="flex flex-col md:flex-row">
                  {/* 3D Canvas */}
                  <div className="relative flex-grow h-[400px] md:h-[500px]">
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white py-2 px-4 rounded-full z-10 flex items-center gap-2">
                      <FaCompass className="text-emerald-400" />
                      <span>Drag to rotate | Pinch to zoom</span>
                    </div>
                    
                    <Canvas shadows camera={{ position: [10, 10, 10], fov: 25 }}>
                      <Environment preset="city" />
                      <ambientLight intensity={0.5} />
                      <spotLight 
                        position={[10, 10, 10]} 
                        angle={0.3} 
                        penumbra={1} 
                        intensity={1} 
                        castShadow 
                      />
                      
                      {/* 3D Model */}
                      <Model />
                    </Canvas>
                  </div>
                  
                  {/* Info Panel - Conditionally rendered */}
                  <AnimatePresence>
                    {isInfoVisible && (
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="w-full md:w-64 bg-gray-900 p-6"
                      >
                        <h3 className="text-xl font-semibold mb-4 text-emerald-400">Property Details</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-gray-400 text-sm mb-2">Features</h4>
                            <ul className="space-y-2">
                              {tours[activeTourIndex].features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-gray-400 text-sm mb-2">Tour Guide</h4>
                            <p className="text-sm text-gray-300">
                              Use your mouse or touch to navigate through the property. Click and drag to rotate the view.
                            </p>
                          </div>
                          
                          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg mt-4 transition-all duration-300">
                            Schedule a Visit
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VirtualTours;