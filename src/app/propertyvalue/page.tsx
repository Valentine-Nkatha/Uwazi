"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeaderComponent from "../components/Navbar";

const basePricePerSqFt = {
  city: 200,
  suburb: 150,
  rural: 100,
} as const;

const conditionMultiplier = {
  new: 1.2,
  good: 1.0,
  old: 0.8,
} as const;

type LocationType = keyof typeof basePricePerSqFt;
type ConditionType = keyof typeof conditionMultiplier;

const PropertyValuation = () => {
  const [area, setArea] = useState<number | "">("");
  const [location, setLocation] = useState<LocationType | "">("");
  const [condition, setCondition] = useState<ConditionType | "">("");
  const [valuation, setValuation] = useState<number | null>(null);

  const calculateValue = () => {
    if (!area || !location || !condition) {
      alert("Please fill all fields correctly.");
      return;
    }

    const pricePerSqFt = basePricePerSqFt[location];
    const conditionFactor = conditionMultiplier[condition];

    const totalValue = pricePerSqFt * conditionFactor * Number(area);
    setValuation(totalValue);
  };

  return (
    <div>
        <HeaderComponent/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">🏡 Property Valuation</h2>
        <p className="text-gray-600 text-center mb-6">
          Estimate the value of your property based on location, condition, and size.
        </p>

        {/* Location Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value as LocationType)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
          >
            <option value="">Select Location</option>
            {Object.keys(basePricePerSqFt).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Condition Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Condition</label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value as ConditionType)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
          >
            <option value="">Select Condition</option>
            {Object.keys(conditionMultiplier).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Area Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Property Size (sq ft)</label>
          <input
            type="number"
            min="1"
            value={area}
            onChange={(e) => setArea(e.target.value ? Number(e.target.value) : "")}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            placeholder="Enter area in square feet"
          />
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateValue}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Calculate Value
        </button>

        {/* Valuation Result */}
        {valuation !== null && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded-lg text-center"
          >
            <p className="text-lg font-bold text-green-700">Estimated Value: Ksh {valuation.toLocaleString()}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
    </div>
  );
};

export default PropertyValuation;
