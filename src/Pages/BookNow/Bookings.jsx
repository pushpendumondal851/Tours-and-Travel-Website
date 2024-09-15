import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHotel,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

const PastBookingCard = ({
  hotelName,
  city,
  date,
  price,
  status,
  rating,
  checkIn,
  checkOut,
}) => {
  return (
    <div className="bg-gray-800 dark:bg-gray-200 dark:text-gray-900 text-white shadow-lg rounded-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300 relative">
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <FaHotel className="text-purple-500 text-4xl" />
          <div>
            <h3 className="text-2xl font-semibold">{hotelName}</h3>
            <p className="text-gray-400 dark:text-gray-600 flex items-center">
              <FaMapMarkerAlt className="text-purple-400 mr-2" /> {city}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-purple-500" />
            <span className="text-gray-300 dark:text-gray-600">{date}</span>
          </div>
          <span className="text-white dark:text-gray-900 font-semibold text-xl">
            ₹{price}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === "Completed" ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {status}
          </span>
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-base" />
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400 dark:text-gray-600">
          <p>Check-in: {checkIn}</p>
          <p>Check-out: {checkOut}</p>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 text-white dark:text-gray-900 px-6 py-2 rounded-full hover:scale-105 transition-transform">
            Modify
          </button>
          <button className="bg-gradient-to-r from-red-500 to-red-700 dark:from-red-400 dark:to-red-600 text-white dark:text-gray-900 px-6 py-2 rounded-full hover:scale-105 transition-transform">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const bookings = [
    {
      hotelName: "Luxury Resort, Maldives",
      city: "Maldives",
      date: "12th Aug 2024 - 15th Aug 2024",
      price: "50,000",
      status: "Completed",
      rating: 5,
      checkIn: "12th Aug, 2:00 PM",
      checkOut: "15th Aug, 11:00 AM",
    },
    {
      hotelName: "Beachfront Villa, Bali",
      city: "Bali",
      date: "20th Sept 2024 - 25th Sept 2024",
      price: "70,000",
      status: "Upcoming",
      rating: 4,
      checkIn: "20th Sept, 3:00 PM",
      checkOut: "25th Sept, 11:00 AM",
    },
    {
      hotelName: "City Hotel, New York",
      city: "New York",
      date: "1st Dec 2024 - 5th Dec 2024",
      price: "90,000",
      status: "Upcoming",
      rating: 5,
      checkIn: "1st Dec, 2:00 PM",
      checkOut: "5th Dec, 11:00 AM",
    },
  ];

  const filteredBookings = bookings.filter((booking) =>
    booking.hotelName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogoutClick = () => {
    navigate("/home");
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gradient-to-br from-gray-800 to-black dark:from-gray-200 dark:to-gray-400 text-white dark:text-gray-900 p-8 shadow-xl rounded-br-3xl flex-shrink-0">
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/28/23/32/ai-generated-7957457_1280.png"
              alt="Profile"
              className="rounded-full mx-auto border-4 border-gray-700 dark:border-gray-300 shadow-lg w-28 h-28 hover:scale-110 transition-transform"
            />
            <h2 className="text-3xl font-bold mt-6 text-center dark:text-gray-900">
              John Doe
            </h2>
            <p className="text-gray-400 dark:text-gray-700 text-center">
              johndoe@example.com
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <FaFacebook className="text-2xl hover:text-gray-300 dark:hover:text-gray-700 transition-transform hover:scale-110" />
              <FaTwitter className="text-2xl hover:text-gray-300 dark:hover:text-gray-700 transition-transform hover:scale-110" />
              <FaInstagram className="text-2xl hover:text-gray-300 dark:hover:text-gray-700 transition-transform hover:scale-110" />
            </div>
          </div>
          <nav className="mt-8 space-y-4">
            <a
              href="#"
              className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400 transition-all"
            >
              <FaUser className="text-lg" />
              <span className="text-base">Profile</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400 transition-all"
            >
              <FaCog className="text-lg" />
              <span className="text-base">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700 dark:bg-gray-300 hover:bg-gray-600 dark:hover:bg-gray-400 transition-all"
              onClick={handleLogoutClick}
            >
              <FaSignOutAlt className="text-lg" />
              <span className="text-base">Logout</span>
            </a>
          </nav>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLogoutClick}
              className="flex items-center space-x-2 p-3 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-all transform hover:scale-105 shadow-lg"
            >
              <span className="text-lg font-semibold">Explore More</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow p-8 md:px-12 md:py-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
          {/* Header with Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Bookings</h1>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search bookings"
                className="p-2 pl-10 rounded-lg bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 shadow-xl w-full md:w-80 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Bookings List */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBookings.map((booking, index) => (
              <PastBookingCard key={index} {...booking} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bookings;
