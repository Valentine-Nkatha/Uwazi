"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';

const ratingsData = [
  {
    text: "Uwazi revolutionized my property transaction experience. From searching for property details to finalizing the contract, the process was transparent and efficient. The integration of 3D viewing of the property assured me of the system's reliability.",
    author: "Nyaga Gloria",
    role: "Real Estate Investor",
    image: "/Images/house.jpg"
  },
  {
    text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
    author: "Valentine Nkatha",
    role: "Home owner",
    image: "/Images/house.jpg"
  },
  {
    text: "Uwazi platform made my property search so much easier. The support team was quick to assist, and I had a seamless experience throughout.",
    author: "Brenda Khamali",
    role: "Home owner",
    image: "/Images/house.jpg"
  },
  {
    text: "Uwazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
    author: "Maureen Gatweri",
    role: "Land seller",
    image: "/Images/house.jpg"
  },
];

const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? ratingsData.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ratingsData.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, ratingsData.length]); // Dependencies
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white font-jost">
      <div className="max-w-5xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
        
        <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 sm:p-10 overflow-hidden">
          {/* Large decorative quote mark */}
          <div className="absolute top-8 left-8 text-indigo-100 opacity-40">
            <FaQuoteLeft size={80} />
          </div>
          
          {/* Stars */}
          <div className="flex items-center justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar 
                key={star} 
                className="w-6 h-6 text-yellow-400 mx-1" 
                fill="currentColor" 
              />
            ))}
          </div>
          
          {/* Testimonial content with animation */}
          <div 
            className={`relative min-h-[200px] flex items-center justify-center transition-all duration-300 ${
              isAnimating 
                ? direction === 'left' 
                  ? 'opacity-0 transform -translate-x-10' 
                  : 'opacity-0 transform translate-x-10'
                : 'opacity-100 transform translate-x-0'
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center italic leading-relaxed">
              {ratingsData[currentIndex].text}
            </p>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              className="w-12 h-12 bg-white text-indigo-600 border border-indigo-200 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all hover:bg-indigo-50"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Pagination indicators */}
            <div className="flex space-x-2">
              {ratingsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-indigo-600 w-8' 
                      : 'bg-indigo-200 hover:bg-indigo-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              className="w-12 h-12 bg-white text-indigo-600 border border-indigo-200 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all hover:bg-indigo-50"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Author information */}
        <div className="mt-10 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-70 transform scale-110"></div>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src={ratingsData[currentIndex].image} 
                alt={ratingsData[currentIndex].author} 
                className="object-cover" 
                fill
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{ratingsData[currentIndex].author}</p>
            <p className="text-lg text-indigo-600 font-medium">{ratingsData[currentIndex].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;