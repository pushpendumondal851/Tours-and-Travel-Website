import React from 'react';

const ServiceHeading = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 mt-5">
      <div className="relative group">
        <img src={service.image} alt={service.name} className="w-full h-52 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 cursor-pointer">
          <span className="text-white text-lg">View Details</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceHeading;
