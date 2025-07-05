
import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

const NetflixHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="text-red-600 text-2xl md:text-3xl font-bold">
            NETFLIX
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Browse by Languages</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Search className="text-white cursor-pointer hover:text-gray-300 transition-colors" size={20} />
          <div className="hidden md:block text-white cursor-pointer hover:text-gray-300 transition-colors">Kids</div>
          <Bell className="text-white cursor-pointer hover:text-gray-300 transition-colors" size={20} />
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-1"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-8 h-8 bg-red-600 rounded"></div>
              <ChevronDown className="text-white" size={16} />
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 top-12 bg-black border border-gray-700 rounded-md py-2 w-48">
                <div className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer">Manage Profiles</div>
                <div className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer">Account</div>
                <div className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer">Help Center</div>
                <div className="border-t border-gray-700 my-2"></div>
                <div className="px-4 py-2 text-white hover:bg-gray-800 cursor-pointer">Sign out of Netflix</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Browse by Languages</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NetflixHeader;
