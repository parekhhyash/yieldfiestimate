import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="https://i.ibb.co/N67DR5JH/image-removebg-preview-7.png" 
              alt="Logo" 
              className="h-5 w-13 rounded-lg"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium">
              Docs
            </a>
            <a href="#" className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium">
              About
            </a>
          </div>
          
          {/* Twitter Icon */}
          <div className="flex items-center flex-shrink-0">
            <a 
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;