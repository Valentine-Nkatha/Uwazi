"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeaderComponent from "../components/Navbar";

const legalQuestions = [
  {
    question: "What legal documents are required to buy a property?",
    answer:
      "You need a sale agreement, title deed, land search report, transfer forms, and stamp duty payment receipt.",
  },
  {
    question: "What is the process of property transfer?",
    answer:
      "The process involves drafting a sale agreement, conducting due diligence, obtaining consent, and registering the transfer with the relevant authorities.",
  },
  {
    question: "What are the legal rights of a tenant?",
    answer:
      "Tenants have the right to a habitable space, proper notice before eviction, and protection against unfair rent increases.",
  },
];

const LegalAdvice = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <HeaderComponent/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">📜 Legal Advice</h1>
        <p className="text-gray-600 mt-3">
          Get expert legal insights on property transactions, ownership, and
          tenant rights.
        </p>
      </motion.div>

      {/* FAQ Section */}
      <div className="w-full max-w-2xl">
        {legalQuestions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-4 bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-200 hover:bg-gray-300 transition"
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-4 text-gray-700"
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact Form for Legal Assistance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 md:p-8 mt-10 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          🏛️ Ask a Lawyer
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Need further legal guidance? Submit your inquiry below.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Legal Question
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              rows={4}
              placeholder="Describe your legal issue..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </motion.div>
    </div>
    </div>
  );
};

export default LegalAdvice;
