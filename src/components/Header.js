import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/images/logo.png" alt="Mentora Logo" className="h-10" />
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Coin Series</a>
          <a href="#" className="hover:text-gray-300">Investment</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="md:hidden">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
