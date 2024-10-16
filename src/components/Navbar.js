import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 fixed w-full top-0 flex justify-between">
      <div className="font-bold text-lg">Local Business</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/#categories" className="hover:text-gray-300">Categories</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
