import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import places from '../../Data/Hotel/similarHotel';

const SimilarHotels = ({ state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,       
      offset: 200,      
    });
    
    AOS.refresh();
  }, []);

  const place = places.find((place) => place.location.includes(state));

  const handleViewDetails = (name, state) => {
    window.scrollTo(0, 0);
    navigate(`/item/${state}/${name}`, {
      state: {
        hotelName: name,
        hotelState: state,
      },
    });
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Similar Hotels in {state}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {place ? (
          place.hotels.map((hotel, index) => (
            <div
              key={index}
              className="relative bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 transform hover:translate-y-[-10px] hover:shadow-2xl will-change-transform"
              data-aos="fade-up"                 
              data-aos-delay={index * 100}        
              data-aos-offset="200"               
            >
              <img
                src={hotel.image}
                alt={`Hotel in ${hotel.name}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold text-indigo-600">
                    {hotel.price}
                  </span>
                  <span className="text-sm text-yellow-500">
                    {hotel.rating} ★
                  </span>
                </div>
                <div className="mt-2 text-sm text-green-600">
                  Discount: {hotel.discount}
                </div>
                <button
                  className="mt-4 w-full bg-gradient-to-r from-purple-400 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-400 transition-all duration-200"
                  onClick={() => handleViewDetails(hotel.name, state)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600">
            No hotels found in {state}.
          </p>
        )}
      </div>
    </div>
  );
};

export default SimilarHotels;
