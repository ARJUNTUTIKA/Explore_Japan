import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Culture', path: '/culture' },
    { name: 'Food', path: '/food' },
    { name: 'History', path: '/history' },
    { name: 'Tourist Places', path: '/tourist-places' },
    { name: 'Japan News', path: '/news' },
    { name: 'Translator', path: '/translator' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  if (isHome) {
    return (
      <nav className="fixed top-0 right-0 z-50 p-6">
        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-red-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-red-300 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-black bg-opacity-90 rounded-lg p-4 min-w-48">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white hover:text-red-300 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Explore Japan
          </Link>
          
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-red-600 transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-red-600 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block hover:text-red-600 transition-colors duration-300 py-2 px-4 ${
                  location.pathname === item.path ? 'text-red-600' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
