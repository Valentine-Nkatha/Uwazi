"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import HeaderComponent from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
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
        <h1 className="text-4xl font-bold text-gray-800">📞 Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Have any questions? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          ✉️ Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              rows={4}
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800">📍 Our Office</h3>
        <p className="text-gray-600 mt-2">123 Real Estate Street, Nairobi, Kenya</p>
        <p className="text-gray-600">📧 Email: support@realestate.com</p>
        <p className="text-gray-600">📞 Phone: +254 700 123 456</p>
      </div>

      {/* Google Maps Embed */}
      <div className="mt-8 w-full max-w-2xl">
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.317697318057!2d36.8219464!3d-1.2920655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4c14d7e63%3A0xb22bfb3dd8a4c5e6!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex space-x-6 text-gray-600">
        <Link href="https://facebook.com" className="hover:text-blue-600 transition flex gap-2">
          <FaFacebook/> Facebook
        </Link>
        <Link href="https://twitter.com" className="hover:text-blue-600 transition flex gap-2">
        <FaTwitter/> Twitter
        </Link>
        <Link href="https://linkedin.com" className="hover:text-blue-600 transition flex gap-2">
        <FaLinkedin/>LinkedIn
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
