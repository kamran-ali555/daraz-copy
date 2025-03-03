import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    "Groceries & Pets",
    "Health & Beauty",
    "Men's Fashion",
    "Women's Fashion",
    "Mother & Baby",
    "Home & Lifestyle",
    "Electronic Devices",
    "Electronic Accessories",
    "TV & Home Appliances",
    "Sports & Outdoor",
    "Watches & Accessories",
    "Automotive & Motorbike"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-daraz-blue py-1 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="nav-link text-xs">Sell on Daraz</a>
            <a href="#" className="nav-link text-xs">Customer Care</a>
            <a href="#" className="nav-link text-xs">Track My Order</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="nav-link text-xs">Download App</a>
            <a href="#" className="nav-link text-xs">Language</a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-daraz-purple py-3">
        <div className="container-custom flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-2xl">
            <span className="text-daraz-orange">Daraz</span>
          </Link>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search in Daraz"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 rounded-l outline-none text-daraz-black"
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full bg-daraz-orange text-white px-4 rounded-r"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
          
          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white flex flex-col items-center">
              <User size={20} />
              <span className="text-xs hidden md:inline">Account</span>
            </Link>
            <Link to="/wishlist" className="text-white flex flex-col items-center">
              <Heart size={20} />
              <span className="text-xs hidden md:inline">Wishlist</span>
            </Link>
            <Link to="/cart" className="text-white flex flex-col items-center relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-daraz-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
              <span className="text-xs hidden md:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="bg-daraz-purple pb-3 md:hidden">
        <div className="container-custom">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search in Daraz"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 rounded-l outline-none text-daraz-black"
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full bg-daraz-orange text-white px-4 rounded-r"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Categories Menu */}
      <div className="bg-white shadow hidden md:block">
        <div className="container-custom">
          <ul className="flex overflow-x-auto py-2 space-x-6 text-sm">
            {categories.map((category, index) => (
              <li key={index} className="whitespace-nowrap">
                <Link 
                  to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-daraz-orange transition-colors flex items-center"
                >
                  {category}
                  <ChevronDown size={14} className="ml-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white h-full w-4/5 max-w-xs overflow-y-auto">
            <div className="p-4 bg-daraz-purple text-white flex justify-between items-center">
              <h2 className="font-bold">Categories</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="p-4">
              {categories.map((category, index) => (
                <li key={index} className="py-2 border-b border-gray-200">
                  <Link 
                    to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block hover:text-daraz-orange transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-gray-200">
              <Link 
                to="/login" 
                className="block py-2 hover:text-daraz-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
              <Link 
                to="#" 
                className="block py-2 hover:text-daraz-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell on Daraz
              </Link>
              <Link 
                to="#" 
                className="block py-2 hover:text-daraz-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Customer Care
              </Link>
              <Link 
                to="#" 
                className="block py-2 hover:text-daraz-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Track My Order
              </Link>
              <Link 
                to="#" 
                className="block py-2 hover:text-daraz-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;