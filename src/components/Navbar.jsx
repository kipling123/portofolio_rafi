import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#service' },
    { label: 'Projects', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scroll ke bawah
        setShowNavbar(false);
      } else {
        // Scroll ke atas
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white text-gray-900 shadow-md fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        {/* Brand */}
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Rafi Ikbar Fahrezy
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-blue-500 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Connect Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white px-6 py-4 space-y-4 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="block text-gray-800 font-medium hover:text-blue-500 transition"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-semibold"
          onClick={() => setIsOpen(false)}
        >
          Connect Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
