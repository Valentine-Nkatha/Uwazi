import React from "react";
import { FaCrown, FaHome, FaSmile, FaTrophy } from "react-icons/fa";


const StatsSection = () => {
  const stats = [
    { icon: <FaCrown size={24} />, count: "9k+", label: "Premium Property", color: "bg-orange-400" },
    { icon: <FaSmile size={24} />, count: "5k+", label: "Happy Customer", color: "bg-indigo-500" },
    { icon: <FaTrophy size={24} />, count: "30+", label: "Award Winning", color: "bg-green-500" },
    { icon: <FaHome size={24} />, count: "15", label: "Years Experience", color: "bg-purple-500" },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 flex justify-center items-center rounded-full ${stat.color} mb-4 shadow-md`}>
                <span className="text-white">{stat.icon}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.count}</h3>
              <p className="text-gray-600 font-medium text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;