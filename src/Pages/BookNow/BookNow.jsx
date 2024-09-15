import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCreditCard, FaTag, FaBed } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

const BookNow = () => {
  const location = useLocation();

  const {
    city = "Unknown City",
    hotelName = "Unknown Hotel",
    roomType = "Standard Room",
    baseRoomAmount = 5000,
    gstAmount = 1000
  } = location.state || {};

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [nights, setNights] = useState(1);
  const [roomAmount, setRoomAmount] = useState(baseRoomAmount);
  const [discount, setDiscount] = useState(0);
  const [numAdults, setNumAdults] = useState(2);
  const [numChildren, setNumChildren] = useState(0);
  const [numRooms, setNumRooms] = useState(1);
  const [totalRooms, setTotalRooms] = useState(1);

  const navigate = useNavigate(); 
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate - checkInDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      const updatedRoomAmount = baseRoomAmount * totalRooms * diffDays;
      setRoomAmount(updatedRoomAmount);
      const calculatedDiscount = updatedRoomAmount * 0.15;
      setDiscount(calculatedDiscount);
    } else {
      setRoomAmount(baseRoomAmount * totalRooms);
    }
  }, [checkInDate, checkOutDate, baseRoomAmount, totalRooms]);

  const handleGuestDetailsChange = () => {
    if (numAdults > 2 || numChildren > 2) {
      const additionalRooms = Math.ceil((numAdults - 2) / 2 + (numChildren - 2) / 2);
      setTotalRooms(additionalRooms + 1);
      alert("For more than 2 adults or 2 children, please select additional rooms.");
    }
  };

  const handleBookingsClick = () => {
    
    navigate("/bookings"); 
  };

  useEffect(() => {
    handleGuestDetailsChange();
  }, [numAdults, numChildren]);

  return (
    <>
    <div>
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 shadow-2xl rounded-xl">
      {/* Custom Navbar */}
      <nav className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-indigo-600 shadow-xl rounded-full py-4 px-6 mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Luxury Hotel Booking</h2>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        onClick={handleBookingsClick}
        >
          My Bookings
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg p-6 md:p-8 rounded-lg border border-gray-700 transition-transform hover:scale-[1.02]">
          {/* Hotel Info */}
          <h1 className="text-4xl font-extrabold text-white mb-3 tracking-wide">
            {hotelName}
          </h1>
          <p className="text-2xl text-gray-400 italic">{city}</p>
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-pink-500 mb-5">
              {roomType} <FaBed className="inline ml-2" /> (2 Adults)
            </h2>
            <p className="text-gray-400 mb-2">• Room with Free Cancellation</p>
            <p className="text-gray-400 mb-2">• No meals included</p>
            <p className="text-gray-400 mb-2">• Complimentary Welcome Drink on Arrival</p>
          </div>

          {/* Date Picker Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-pink-500 mb-3">Select Your Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400">Check-in Date</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  className="border border-gray-600 p-3 rounded-md w-full text-gray-300 bg-gray-800 focus:ring-2 focus:ring-pink-500"
                  placeholderText="Select Check-in Date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400">Check-out Date</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  className="border border-gray-600 p-3 rounded-md w-full text-gray-300 bg-gray-800 focus:ring-2 focus:ring-pink-500"
                  placeholderText="Select Check-out Date"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>
          </div>

          {/* Guest Details Form */}
          <div className="mt-10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg p-6 md:p-8 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-pink-500 mb-3">Guest Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-400">Adults</label>
                <input
                  type="number"
                  min="1"
                  value={numAdults}
                  onChange={(e) => setNumAdults(parseInt(e.target.value))}
                  className="border border-gray-600 p-3 rounded-md text-gray-300 bg-gray-800 w-full"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-gray-400">Children</label>
                <input
                  type="number"
                  min="0"
                  value={numChildren}
                  onChange={(e) => setNumChildren(parseInt(e.target.value))}
                  className="border border-gray-600 p-3 rounded-md text-gray-300 bg-gray-800 w-full"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-gray-400">Rooms</label>
                <input
                  type="number"
                  min="1"
                  value={numRooms}
                  onChange={(e) => setNumRooms(parseInt(e.target.value))}
                  className="border border-gray-600 p-3 rounded-md text-gray-300 bg-gray-800 w-full"
                />
              </div>
              <button
                onClick={handleGuestDetailsChange}
                className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-3 px-4 rounded-full shadow-lg w-full hover:scale-105 transition transform"
              >
                Update Details
              </button>
            </div>
          </div>

          {/* Important Information */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-pink-500">Important Information</h3>
            <ul className="list-disc ml-6 mt-3 text-gray-400 space-y-2">
              <li>Guests below 18 years of age are not allowed at the property.</li>
              <li>Passport, Aadhaar, Driving License, and Govt. ID are accepted as ID proof(s).</li>
              <li>Pets are not allowed.</li>
              <li>Outside food is not allowed.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-lg p-6 md:p-8 rounded-lg border border-gray-700">
          <h3 className="text-lg font-extrabold text-pink-500 mb-4">Price Summary</h3>
          <div className="mb-4">
            <p className="text-gray-400">{totalRooms} Room(s) x {nights} Night(s)</p>
            <p className="text-3xl font-extrabold text-white">₹{roomAmount}</p>
          </div>
          <div className="flex justify-between text-gray-400 mb-4">
            <span>Total Discount (15%)</span>
            <span className="text-green-400">₹{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400 mb-4">
            <span>Price After Discount</span>
            <span className="font-extrabold">₹{(roomAmount - discount).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400 mb-4">
            <span>Hotel Taxes</span>
            <span className="font-extrabold">₹{gstAmount}</span>
          </div>
          <div className="border-t border-gray-600 pt-4 mt-4">
            <div className="flex justify-between text-white font-extrabold text-lg">
              <span>Total Amount</span>
              <span>₹{(roomAmount - discount + gstAmount).toFixed(2)}</span>
            </div>
          </div>

          {/* Coupon Codes */}
          <div className="mt-6">
            <h3 className="text-lg font-extrabold text-pink-500 mb-3">Coupon Codes</h3>
            <p className="text-gray-400">No coupon codes applicable for this property.</p>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Have a Coupon Code?"
                className="border border-gray-600 p-3 rounded-md w-full text-gray-300 bg-gray-800 focus:ring-2 focus:ring-pink-500"
              />
              <button className="mt-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-2 rounded-full w-full hover:scale-105 transition transform shadow-lg">
                <FaTag className="inline mr-2" /> Apply
              </button>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-3 rounded-full w-full hover:scale-110 transition transform shadow-lg">
              <FaCreditCard className="inline mr-2" /> Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default BookNow;
