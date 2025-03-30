"use client";
import Image from "next/image";
import Link from "next/link";
import HeaderComponent from "../components/Navbar";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment in Nairobi",
    location: "Westlands, Nairobi",
    price: "Ksh 15,000,000",
    image: "/Images/house.jpg",
  },
  {
    id: 2,
    title: "3 Bedroom Bungalow",
    location: "Karen, Nairobi",
    price: "Ksh 25,000,000",
    image: "/Images/house.jpg",
  },
  {
    id: 3,
    title: "Beachfront Villa",
    location: "Diani Beach, Mombasa",
    price: "Ksh 40,000,000",
    image: "/Images/house.jpg",
  },
];

const PropertyListing = () => {
  return (
    <div>
      <HeaderComponent/>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
             src={property.image}
              alt={property.title} 
              className="w-full h-48 object-cover"
              width={400}
              height={250}
               />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-bold mt-2">{property.price}</p>
              <Link href="/specificproperty" className="mt-4 block text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PropertyListing;
