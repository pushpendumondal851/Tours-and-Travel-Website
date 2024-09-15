import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div
      className="flex justify-center items-center h-screen flex-col p-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-70 p-12 rounded-lg text-center shadow-xl">
        <h1 className="text-9xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">Oops!</h1>
        <h3 className="text-3xl font-semibold text-white mb-4 animate__animated animate__fadeIn animate__delay-2s">404 - Page Not Found</h3>
        <p className="text-lg text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-3s">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink to="/home">
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500">
            Back to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error;
