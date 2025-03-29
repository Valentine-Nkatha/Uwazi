'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaBed, FaBath, FaRulerCombined, FaSearch, FaMapMarkerAlt, FaDollarSign, FaHome } from 'react-icons/fa';
import Link from 'next/link';

// Property interface for type safety
interface Property {
  id: number;
  name: string;
  address: string;
  monthlyRent: number;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  imageUrl: string;
  popular?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Palm Harbor',
    address: '2699 Green Valley, Highland Lake, FL',
    monthlyRent: 2095,
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 52.7,
    imageUrl: '/Images/house.jpg',
    popular: true
  },
  {
    id: 2,
    name: 'Beverly Springfield',
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    monthlyRent: 2700,
    bedrooms: 4,
    bathrooms: 2,
    squareMeters: 67.5,
    imageUrl: '/Images/house.jpg',
    popular: true
  },
  {
    id: 3,
    name: 'Faulkner Ave',
    address: '909 Woodland St, Michigan, IN',
    monthlyRent: 4550,
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 81.0,
    imageUrl: '/Images/house.jpg',
    popular: true
  },
  {
    id: 4,
    name: 'St. Crystal',
    address: '210 US Highway, Highland Lake, FL',
    monthlyRent: 2400,
    bedrooms: 4,
    bathrooms: 2,
    squareMeters: 68,
    imageUrl: '/Images/house.jpg'
  },
  {
    id: 5,
    name: 'Cove Red',
    address: '243 Curlew Road, Palm Harbor, TX',
    monthlyRent: 1500,
    bedrooms: 2,
    bathrooms: 1,
    squareMeters: 57.5,
    imageUrl: '/Images/house.jpg'
  },
  {
    id: 6,
    name: 'The Old Steele',
    address: '103 Lake Shores, Michigan, IN',
    monthlyRent: 1600,
    bedrooms: 3,
    bathrooms: 1,
    squareMeters: 57,
    imageUrl: '/Images/house.jpg'
  }
];

export default function RentalPropertiesPage() {
  const [location, setLocation] = useState('New York, USA');
  const [priceRange, setPriceRange] = useState('$500-$2,500');
  const [propertyType, setPropertyType] = useState('Houses');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId) 
        : [...prev, propertyId]
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Uwazi
            </h1>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            <Link href="/rent" className="relative group py-2">
              <span className="hover:text-blue-600 transition-colors duration-300">Rent</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/sell" className="relative group py-2">
              <span className="hover:text-blue-600 transition-colors duration-300">Sell</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/buy" className="relative group py-2">
              <span className="hover:text-blue-600 transition-colors duration-300">Buy</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Dropdown - Manage Property */}
            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition-colors duration-300">
                Manage Property
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white backdrop-blur-lg rounded-lg border border-blue-100 shadow-xl overflow-hidden">
                  <div className="p-2 space-y-1">
                    <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Property Listing
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Tenant Management
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown - Services */}
            <div className="relative group">
              <button className="flex items-center hover:text-blue-600 transition-colors duration-300">
                Services
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white backdrop-blur-lg rounded-lg border border-blue-100 shadow-xl overflow-hidden">
                  <div className="p-2 space-y-1">
                    <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Legal Advice
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors duration-200">
                      Property Valuation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-blue-600">Discover</span> Your Perfect Rental
          </h1>
          <p className="text-gray-600 mt-2 md:mt-0">
            {properties.length} properties available
          </p>
        </div>
        
        {/* Search Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 transform hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-blue-500" />
              </div>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option>New York, USA</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
              </select>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Location</label>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-blue-500" />
              </div>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option>$500-$2,500</option>
                <option>$2,500-$5,000</option>
                <option>$5,000+</option>
              </select>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Price Range</label>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaHome className="text-blue-500" />
              </div>
              <select 
                value={propertyType} 
                onChange={(e) => setPropertyType(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Houses</option>
                <option>Apartments</option>
                <option>Condos</option>
              </select>
              <label className="block text-xs font-medium text-gray-500 mb-1 ml-1">Property Type</label>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
              <FaSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
        
        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <div 
              key={property.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <Image 
                  src={property.imageUrl} 
                  alt={property.name} 
                  width={400} 
                  height={250} 
                  className="w-full h-64 object-cover"
                />
                {property.popular && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    POPULAR
                  </span>
                )}
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FaHeart 
                    className={`w-5 h-5 ${
                      favorites.includes(property.id) 
                        ? 'text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-2xl font-bold text-blue-600">
                    ${property.monthlyRent.toLocaleString()}
                    <span className="text-gray-500 text-base font-normal">/month</span>
                  </h2>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{property.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-gray-400 mr-1" size={14} />
                  {property.address}
                </p>
                
                <div className="border-t pt-4 mt-2">
                  <div className="flex justify-between text-gray-600">
                    <div className="flex items-center">
                      <FaBed className="text-blue-500 mr-2" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-blue-500 mr-2" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="text-blue-500 mr-2" />
                      <span>{property.squareMeters} m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}