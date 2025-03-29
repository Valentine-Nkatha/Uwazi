'use client';

import {FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import PropertyGrid from "../property/page";
import { FaBuilding, FaCheck, FaUpload } from "react-icons/fa6";
import Footer from "../footer/page";
import StatsSection from "../statiscs/page";
import UwaziTechInnovations from "../technology/page";
import Ratings from "../ratings/page";

export default function PropertyDashboard() {
//   const [displayTotalPrice, setDisplayTotalPrice] = useState(false);
const features = [
    {
      title: "Find Your Dream Home",
      description: "There are many variations of passages of lorem ipsum available.",
      icon: <FaHome size={50} className="text-blue-500" />,
    },
    {
      title: "Experienced Agents",
      description: "There are many variations of passages of lorem ipsum available.",
      icon: <FaCheck size={50} className="text-blue-500" />,
    },
    {
      title: "Buy or Rent Homes",
      description: "There are many variations of passages of lorem ipsum available.",
      icon: <FaBuilding size={50} className="text-blue-500" />,
    },
    {
      title: "List Your Own Property",
      description: "There are many variations of passages of lorem ipsum available.",
      icon: <FaUpload size={50} className="text-blue-500" />,
    },
  ];
  
  const properties = [
    {
      name: "Sobha Heartland II Villas",
      location: "Al Barsha 1, Al Barsha",
      price: 189,
      rating: 4.83,
      image: "/Images/house.jpg"
    },
    {
      name: "Mykonos Damac Lagoons",
      location: "Palm Jumeirah",
      price: 560,
      rating: 4.67,
      image: "/Images/house.jpg"
    },
    {
      name: "Verdana 2 Residence",
      location: "Dubai Marina",
      price: 231,
      rating: 4.45,
      image: "/Images/house.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 min-h-screen font-sans">
  {/* Navbar with glass morphism effect */}
  <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Uwazi
        </h1>
      </div>

      {/* Navigation - Center */}
      <nav className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
        <Link href="/rent" className="relative group py-2">
          <span className="hover:text-white transition-colors duration-300">Rent</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link href="/sell" className="relative group py-2">
          <span className="hover:text-white transition-colors duration-300">Sell</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link href="/buy" className="relative group py-2">
          <span className="hover:text-white transition-colors duration-300">Buy</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Dropdown - Manage Property */}
        <div className="relative group">
          <button className="flex items-center hover:text-white transition-colors duration-300">
            Manage Property
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl overflow-hidden">
              <div className="p-2 space-y-1">
                <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                  Property Listing
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                  Tenant Management
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown - Services */}
        <div className="relative group">
          <button className="flex items-center hover:text-white transition-colors duration-300">
            Services
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl overflow-hidden">
              <div className="p-2 space-y-1">
                <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                  Legal Advice
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                  Property Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Right Side - Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/about" className="px-4 py-2 text-white/90 hover:text-white transition-colors duration-300">
          About Us
        </Link>
        <Link href="/contact" className="px-4 py-2 text-white/90 hover:text-white transition-colors duration-300">
          Contact
        </Link>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
          Get Started
        </button>
      </div>
    </div>
  </header>

  {/* Mobile Menu (Hidden by default) */}
  <div className="hidden bg-indigo-900/95 backdrop-blur-md fixed inset-0 z-40 p-4">
    <div className="flex justify-end">
      <button className="text-white p-2">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <nav className="flex flex-col space-y-4 mt-8 text-white text-lg">
      <Link href="/rent" className="py-2 border-b border-white/10">Rent</Link>
      <Link href="/sell" className="py-2 border-b border-white/10">Sell</Link>
      <Link href="/buy" className="py-2 border-b border-white/10">Buy</Link>
      <Link href="#" className="py-2 border-b border-white/10">Manage Property</Link>
      <Link href="#" className="py-2 border-b border-white/10">Services</Link>
      <Link href="/about" className="py-2 border-b border-white/10">About Us</Link>
      <Link href="/contact" className="py-2 border-b border-white/10">Contact</Link>
    </nav>
  </div>

  {/* Hero Section with animated elements */}
  <div className="container mx-auto px-4 pt-16 md:pt-24 pb-16">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Manage Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Property</span> with Ease
        </h1>
        
        <p className="text-lg text-white/80 max-w-lg">
          You will have everything nearby – supermarkets, stations, cinemas, and more. We make property management simple and stress-free.
        </p>
        
        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-md p-2 rounded-full flex items-center border border-white/20 shadow-lg mt-8">
          <div className="flex-1 flex items-center px-4">
            <svg className="w-5 h-5 text-white/60 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search for properties..." 
              className="bg-transparent w-full outline-none text-white placeholder-white/60"
            />
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            Search
          </button>
        </div>
        
        {/* Authentication Buttons */}
        <div className="flex items-center space-x-6 mt-8">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            Sign Up
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex items-center space-x-6 mt-10 text-white/80">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Verified Properties</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
      
      {/* Right - Image with decorative elements */}
      <div className="md:w-1/2 relative">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-2xl border border-white/20 shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
          <Image
            src="/Images/house.jpg" // Replace with actual image
            alt="Modern property"
            width={550}
            height={400}
            className="rounded-lg object-cover"
          />
          
          {/* Property Details Card */}
          <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 border border-white/20 w-64">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-white">Modern Villa</h3>
                <p className="text-white/80 text-sm">San Francisco, CA</p>
              </div>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">Available</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-white/80 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>3 Beds</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>2 Baths</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <span>1,200 sqft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      
      <div className="mt-8">
      <StatsSection/>
      </div>
      </div>


      {/* <div className="flex items-center justify-center mt-6">
        <label className="flex items-center space-x-2 text-gray-600">
          <span>Display Total Price</span>
          <input type="checkbox" className="toggle-checkbox" onChange={() => setDisplayTotalPrice(!displayTotalPrice)} />
        </label>
      </div> */}

     
<div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-xl">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    <div className="mb-4 md:mb-0">
      <h2 className="text-4xl font-extrabold text-white mb-2">Popular Properties</h2>
      <p className="text-indigo-100">Discover our most loved vacation homes</p>
    </div>
    <button className="relative overflow-hidden group bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg">
      <span className="relative z-10">View All Properties</span>
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
    </button>
  </div>

  {/* Properties Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {properties.map((property, index) => (
      <div key={index} className="bg-white dark:bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {property.rating}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p className="text-gray-600">{property.location}</p>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-4">{property.name}</h3>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-bold text-indigo-600">${property.price} <span className="text-sm font-normal text-gray-500">/ Night</span></div>
          </div>
          
          <button className="w-full mt-6 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium py-3 rounded-lg transition-colors">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
<section className="relative bg-gradient-to-b from-blue-50 to-gray-100 py-24 overflow-hidden">
  {/* Curved Top Shape */}
  <div className="absolute top-0 left-0 w-full">
    <svg className="w-full" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,165.3C960,128,1056,96,1152,117.3C1248,139,1344,213,1392,250.7L1440,288V0H0Z"
      ></path>
    </svg>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="mb-16">
      <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Benefits</span>
      <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-800">Why Choose Us</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  
  {/* Decorative Elements */}
  <div className="absolute bottom-0 right-0 opacity-10">
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="currentColor" className="text-blue-600" />
    </svg>
  </div>
  <div className="absolute top-1/4 left-0 opacity-10">
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="75" cy="75" r="75" fill="currentColor" className="text-blue-600" />
    </svg>
  </div>
</section>
    <div className="relative py-16 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-70 blur-2xl"></div>
  <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-amber-100 to-rose-100 rounded-full opacity-70 blur-3xl"></div>
  
  <div className="relative text-center max-w-6xl mx-auto px-4">
    {/* Subtle decorative line */}
    <div className="flex justify-center mb-6">
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </div>
    
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
      Discover Your Perfect Space
    </h2>
    
    <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
      Explore living environments meticulously crafted to enhance your lifestyle, 
      where comfort meets elegance in spaces that inspire.
    </p>
    
    {/* Search or filter options */}
    <div className="mt-10 mb-8 max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 text-left mb-1">Location</label>
        <div className="relative">
          <select className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option>Any Location</option>
            <option>Downtown</option>
            <option>Suburbs</option>
            <option>Beachfront</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 text-left mb-1">Property Type</label>
        <div className="relative">
          <select className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option>All Types</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 text-left mb-1">Price Range</label>
        <div className="relative">
          <select className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <option>Any Price</option>
            <option>$0 - $1,000</option>
            <option>$1,000 - $2,000</option>
            <option>$2,000+</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search
      </button>
    </div>
    
    <div className="mt-12">
      <PropertyGrid />
    </div>
  </div>
</div>
     <UwaziTechInnovations/>
     <Ratings/>
    <Footer/>
    </div>
  );
}
