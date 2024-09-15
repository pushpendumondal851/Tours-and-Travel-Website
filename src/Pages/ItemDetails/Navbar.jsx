import React, { useState } from "react";
import {
  FaLocationArrow,
  FaCalendarDay,
  FaUsers,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="text-2xl font-bold">Tour India</div>

      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      <div className={`sm:flex ${isMenuOpen ? "flex" : "hidden"} flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 absolute sm:relative top-16 sm:top-auto left-0 sm:left-auto bg-gray-900 sm:bg-transparent w-full sm:w-auto px-6 py-4 sm:px-0`}>
        <div className="flex items-center space-x-2 w-full sm:w-auto p-4 sm:p-0">
          <FaLocationArrow className="text-lg" />
          <input
            type="text"
            placeholder="City, Area, or Property"
            className="bg-gray-800 text-white py-2 px-4 rounded placeholder-gray-400 border border-gray-700 w-full sm:w-auto"
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto p-4 sm:p-0">
          <FaCalendarDay className="text-lg" />
          <input
            type="date"
            className="bg-gray-800 text-white py-2 px-4 rounded border border-gray-700 w-full sm:w-auto"
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto p-4 sm:p-0">
          <FaCalendarDay className="text-lg" />
          <input
            type="date"
            className="bg-gray-800 text-white py-2 px-4 rounded border border-gray-700 w-full sm:w-auto"
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto p-4 sm:p-0">
          <FaUsers className="text-lg" />
          <input
            type="number"
            placeholder="Rooms & Guests"
            className="bg-gray-800 text-white py-2 px-4 rounded placeholder-gray-400 border border-gray-700 w-full sm:w-auto"
          />
        </div>

        <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-6 rounded-full hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 flex items-center space-x-2 shadow-lg transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
