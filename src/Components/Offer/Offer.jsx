import React from 'react';

const offers = [
  {
    title: 'Explore the Mountains',
    description: 'Get up to 30% off on mountain tours. Experience the thrill and beauty of nature.',
    image: 'https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg',
    bgColor: 'bg-gradient-to-r from-blue-700 to-purple-600',
  },
  {
    title: 'Beach Getaway',
    description: 'Enjoy a relaxing beach vacation with 20% off on all beach destinations.',
    image: 'https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  },
  {
    title: 'City Tours',
    description: 'Discover the charm of the world’s most famous cities. Book now and save 15%.',
    image: 'https://t4.ftcdn.net/jpg/01/81/07/91/360_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg',
    bgColor: 'bg-gradient-to-r from-red-500 to-pink-500',
  },
];

const Offer = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Special Offers</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden ${offer.bgColor} transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover opacity-90 hover:opacity-60 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-transform duration-300 hover:from-blue-500 hover:to-green-400">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                <p className="text-white">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
