import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header className="mt-16 p-12 bg-red-100 text-center">
        <h1 className="text-5xl font-bold text-red-500 animate-pulse">Find the Best Local Businesses</h1>
      </header>

      <section id="categories" className="p-12">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition duration-300">
            <Link to="/category/1" className="block">
              <h3 className="text-2xl font-semibold">Restaurants</h3>
              <p className="text-gray-700">Explore the best food spots in town.</p>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition duration-300">
            <Link to="/category/2" className="block">
              <h3 className="text-2xl font-semibold">Shops</h3>
              <p className="text-gray-700">Local shops with amazing products.</p>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition duration-300">
            <Link to="/category/3" className="block">
              <h3 className="text-2xl font-semibold">Services</h3>
              <p className="text-gray-700">Find services you need in your area.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
