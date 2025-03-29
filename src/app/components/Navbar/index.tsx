import Link from "next/link";
import { useState } from "react";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
     <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md border-b border-gray-700">

        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Uwazi
            </h1>
          </div>

          {/* Navigation - Center - Hidden on mobile, visible on medium screens and up */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-white font-medium">
            <Link href="/landing" className="relative group py-2">
              <span className="hover:text-blue-200 transition-colors duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/rent" className="relative group py-2">
              <span className="hover:text-blue-200 transition-colors duration-300">Rent</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link href="/buy" className="relative group py-2">
              <span className="hover:text-blue-200 transition-colors duration-300">Buy</span>
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
                    <Link href="/propertylisting" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                      Property Listing
                    </Link>
                    <Link href="/virtual" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                      3D Virtual tour
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
                    <Link href="/legal" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                      Legal Advice
                    </Link>
                    <Link href="/propertyvalue" className="block px-4 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                      Property Valuation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="/about" className="px-3 lg:px-4 py-2 text-white/90 hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="px-3 lg:px-4 py-2 text-white/90 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <Link href="/signup"><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm lg:text-base">
              Get Started
            </button></Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Toggle visibility based on state) */}
      <div className={`${isMobileMenuOpen ? 'fixed' : 'hidden'} bg-indigo-900/95 backdrop-blur-md inset-0 z-40 p-4 overflow-y-auto`}>
        <div className="flex justify-end">
          <button 
            className="text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 mt-8 text-white text-lg">
          <Link href="/landing" className="py-2 border-b border-white/10" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/rent" className="py-2 border-b border-white/10" onClick={toggleMobileMenu}>Rent</Link>
          <Link href="/buy" className="py-2 border-b border-white/10" onClick={toggleMobileMenu}>Buy</Link>
          
          {/* Mobile Dropdown - Manage Property */}
          <div className="py-2 border-b border-white/10">
            <button className="flex items-center justify-between w-full py-2">
              Manage Property
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="mt-2 ml-4 space-y-2">
              <Link href="#" className="block py-2" onClick={toggleMobileMenu}>Property Listing</Link>
              <Link href="#" className="block py-2" onClick={toggleMobileMenu}>Tenant Management</Link>
            </div>
          </div>
          
          {/* Mobile Dropdown - Services */}
          <div className="py-2 border-b border-white/10">
            <button className="flex items-center justify-between w-full py-2">
              Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="mt-2 ml-4 space-y-2">
              <Link href="#" className="block py-2" onClick={toggleMobileMenu}>Legal Advice</Link>
              <Link href="#" className="block py-2" onClick={toggleMobileMenu}>Property Valuation</Link>
            </div>
          </div>
          
          <Link href="/about" className="py-2 border-b border-white/10" onClick={toggleMobileMenu}>About Us</Link>
          <Link href="/contact" className="py-2 border-b border-white/10" onClick={toggleMobileMenu}>Contact</Link>
          
          <div className="pt-4">
            <Link href="/signup"><button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Get Started
            </button></Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;