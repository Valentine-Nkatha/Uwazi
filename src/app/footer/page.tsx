import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-3xl font-bold flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Uwazi</span>
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Find your dream home with exclusive real estate opportunities. Our expert agents are here to guide you through every step of your property journey.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1">
                <FaFacebookF className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1">
                <FaTwitter className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-600/20 hover:-translate-y-1">
                <FaInstagram className="text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/20 hover:-translate-y-1">
                <FaLinkedinIn className="text-gray-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Properties', 'Services', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-400">123 Property Lane, Nairobi City, 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-3" />
                <span className="text-gray-400">+254701815843</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                <span className="text-gray-400">info@uwazi.com</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Business Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-400 text-sm">Sat: 10AM - 4PM</p>
              <p className="text-gray-400 text-sm">Sun: Closed</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-800">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new properties and exclusive offers.
            </p>
            
            <div className="mt-4 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 pl-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button className="absolute right-0 top-0 h-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-r-lg text-white hover:from-blue-600 hover:to-purple-600 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg">
              <h4 className="text-white font-medium mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Your Privacy Protected
              </h4>
              <p className="text-gray-400 text-sm">We respect your privacy and will never share your information.</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-blue-400">Uwazi</span>. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;