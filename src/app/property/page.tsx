'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const propertyTypes = [
  { 
    title: "Urban Apartments", 
    imageUrl: "/Images/house.jpg",
    description: "Modern living spaces in the heart of vibrant cities",
    properties: 42
  },
  { 
    title: "Ranch Estates", 
    imageUrl: "/Images/house.jpg",
    description: "Spacious countryside retreats with panoramic views",
    properties: 28
  },
  { 
    title: "Beach Villas", 
    imageUrl: "/Images/house.jpg",
    description: "Luxurious oceanfront homes with private beach access",
    properties: 36
  },
  { 
    title: "Safari Lodges", 
    imageUrl: "/Images/house.jpg",
    description: "Unique getaways immersed in natural wilderness",
    properties: 19
  },
];

const PropertyGrid = () => {
 

  // In your component:
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {propertyTypes.map((property, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 w-full h-6 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            {/* Card container with shadow effect */}
            <div className={`w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 flex flex-col items-center pb-6 ${hoveredIndex === index ? "shadow-2xl scale-105" : ""}`}>

              {/* Enhanced image container */}
              <div className="relative w-full aspect-square mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Property count badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-indigo-600 z-20">
                  {property.properties} Properties
                </div>
              </div>
              
              {/* Content section */}
              <div className="px-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                
                {/* Animated button */}
                <Link href="/specificproperty"><button className="relative overflow-hidden mt-2 px-6 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <span className="relative z-10">Explore Properties</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button></Link>
              </div>
            </div>
            
            {/* Connection lines between cards (visible on desktop) */}
            {index < propertyTypes.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="flex justify-center mt-16">
        <Link href="/viewcategories"><button className="group relative px-8 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 font-medium text-sm flex items-center overflow-hidden">
          <span className="relative z-10">View All Categories</span>
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button></Link>
      </div>
    </div>
  );
};

export default PropertyGrid;