import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
  const { id } = useParams();
  
  const company = {
    name: 'Company A',
    description: 'Best restaurant in town offering a variety of local and international cuisines.',
    logo: '/path/to/logo.jpg',
    address: '123 Main St, Townsville'
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-64 object-cover"/>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
          <p className="text-gray-700 mb-4">{company.description}</p>
          <p className="text-gray-600">Address: {company.address}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
