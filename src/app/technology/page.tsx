// components/UwaziTechInnovations.tsx
import React from 'react';
import {  FaShieldAlt, FaVrCardboard, FaRegHandshake, FaMobileAlt } from 'react-icons/fa';
import { FaIoxhost } from 'react-icons/fa6';

import { MdOutlineAutoGraph } from 'react-icons/md';

// Define types for the innovation card props
interface InnovationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}

// Define the type for each innovation
interface Innovation {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}

const InnovationCard: React.FC<InnovationCardProps> = ({ icon, title, description, capabilities }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-6 border border-blue-100 transition-all duration-300 hover:shadow-2xl">
    <div className="absolute -right-12 -top-12 w-36 h-36 bg-blue-500 opacity-10 rounded-full"></div>
    <div className="relative z-10">
      <div className="bg-blue-600 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5 text-sm leading-relaxed">{description}</p>
      <div className="space-y-3">
        {capabilities.map((capability: string, index: number) => (
          <div key={index} className="flex items-center">
            <div className="w-2 h-8 bg-blue-400 rounded-sm mr-3"></div>
            <span className="text-gray-700">{capability}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const UwaziTechInnovations: React.FC = () => {
  const innovations: Innovation[] = [
    {
      icon: <FaVrCardboard className="text-white text-2xl" />,
      title: "Spatial Intelligence Engine",
      description: "Reimagine property exploration with our proprietary spatial mapping technology that creates photorealistic digital twins of properties.",
      capabilities: [
        "Interactive space reconfiguration",
        "Sunlight pattern simulation",
        "Custom furniture placement"
      ]
    },
    {
      icon: <MdOutlineAutoGraph className="text-white text-2xl" />,
      title: "Predictive Market Oracle",
      description: "Harness the power of our exclusive market prediction algorithm that combines macroeconomic indicators with hyperlocal market dynamics.",
      capabilities: [
        "5-year property value forecasting",
        "Neighborhood development alerts",
        "Investment opportunity scoring"
      ]
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "TrustChain Verification",
      description: "Our proprietary blockchain solution that revolutionizes property transactions with unmatched security and transparency.",
      capabilities: [
        "Tamper-proof ownership records",
        "Automated payment escrow",
        "Real-time transaction validation"
      ]
    },
    {
      icon: <FaIoxhost className="text-white text-2xl" />,
      title: "SmartHabitat Ecosystem",
      description: "An integrated IoT framework designed exclusively for Uwazi properties that learns and adapts to occupant behaviors.",
      capabilities: [
        "Biometric access control",
        "Predictive maintenance alerts",
        "Energy consumption optimization"
      ]
    },
    {
      icon: <FaRegHandshake className="text-white text-2xl" />,
      title: "Tenant-Owner Harmony Platform",
      description: "Our innovative communication and relationship management system that transforms property management experiences.",
      capabilities: [
        "AI-mediated dispute resolution",
        "Automated maintenance coordination",
        "Digital lease management"
      ]
    },
    {
      icon: <FaMobileAlt className="text-white text-2xl" />,
      title: "Unified Property Command Center",
      description: "Take complete control of your property portfolio with our comprehensive mobile-first management dashboard.",
      capabilities: [
        "Cross-property performance analytics",
        "Real-time occupancy monitoring",
        "Customizable alert thresholds"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center">
              <div className="h-1 w-12 bg-blue-600 mr-2"></div>
              <h2 className="text-blue-600 font-semibold text-lg">REVOLUTIONARY TECHNOLOGY</h2>
              <div className="h-1 w-12 bg-blue-600 ml-2"></div>
            </div>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Proptech Innovations <span className="text-blue-600">Exclusive to Uwazi</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Discover proprietary technologies that redefine how properties are managed, 
            experienced, and transacted—available only through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <InnovationCard
              key={index}
              icon={innovation.icon}
              title={innovation.title}
              description={innovation.description}
              capabilities={innovation.capabilities}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-300 focus:outline-none">
            Experience Our Technology Advantage
          </button>
        </div>
      </div>
    </div>
  );
};

export default UwaziTechInnovations;