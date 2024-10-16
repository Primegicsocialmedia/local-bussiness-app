import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { id } = useParams();
  
  const companies = [
    { id: 1, name: 'Company A', description: 'Best restaurant in town' },
    { id: 2, name: 'Company B', description: 'Amazing services' }
  ];

  return (
    <div className="p-12">
      <h2 className="text-4xl font-bold text-red-500 mb-8">Category {id}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companies.map(company => (
          <div key={company.id} className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-100 transition duration-300">
            <Link to={`/company/${company.id}`} className="block">
              <h3 className="text-2xl font-semibold">{company.name}</h3>
              <p className="text-gray-700">{company.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
