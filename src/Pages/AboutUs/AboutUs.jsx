import React from "react";
import { FaPlane, FaMountain, FaCity } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "./AboutUs.css";
import Navbar from "./Navbar";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const navigate = useNavigate(); 

  const handlePlanTripClick = () => {
    navigate("/"); 
  };

  return (
    <>
      <div>
        <div className="bg-black text-gray-100 font-sans">
          {/* Hero Section */}
          <div
            className="relative overflow-hidden h-[50vh] md:h-[650px] flex items-center justify-center text-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://5.imimg.com/data5/SELLER/Default/2023/4/299455148/PX/GU/WN/187501798/international-tour-packages.jpg')",
            }}
          >
            <Navbar />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="relative z-10 text-white px-4 md:px-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wider drop-shadow-2xl animate-pulse">
                Dream. Explore. Discover.
              </h1>
              <p className="mt-4 text-lg md:text-2xl italic font-light opacity-90">
                Your Adventure Begins Here.
              </p>
              <button
                className="mt-6 px-8 py-3 md:px-12 md:py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white text-lg md:text-xl rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={handlePlanTripClick} 
              >
                Plan Your Trip
              </button>
            </div>
          </div>

          {/* About Section */}
          <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-800 to-black shadow-xl rounded-xl -mt-12 md:-mt-24 mx-4 md:mx-6 lg:mx-12 relative z-10">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-10">
                Who We Are
              </h2>
              <p className="mt-2 md:mt-4 max-w-xl md:max-w-3xl mx-auto text-base md:text-lg text-gray-300 italic leading-relaxed">
                "The world is a book, and those who do not travel read only one
                page."
              </p>
              <p className="mt-4 md:mt-8 max-w-xl md:max-w-5xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed">
                Welcome to India Tour Co.! We are more than just a travel
                agency; we are your partners in creating unforgettable journeys.
                <br />
                <br />
                With a passion ignited by our own wanderlust, we offer bespoke
                travel experiences that go beyond the ordinary. Whether you’re
                seeking solitude in the mountains, excitement in a bustling
                city, or serenity by the sea, we make it happen.
                <br />
                <br />
                Join us, and let’s write your travel story together—one that is
                filled with adventure, wonder, and unforgettable memories.
              </p>

              {/* Icons Section */}
              <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 text-white">
                <div className="flex flex-col items-center group">
                  <FaPlane className="text-5xl md:text-7xl mb-4 text-pink-500 group-hover:text-pink-700 transition-transform transform group-hover:scale-125 duration-500 ease-in-out" />
                  <span className="text-base md:text-lg font-semibold tracking-widest group-hover:text-pink-400 transition-colors duration-300">
                    Adventure
                  </span>
                </div>
                <div className="flex flex-col items-center group">
                  <FaMountain className="text-5xl md:text-7xl mb-4 text-green-500 group-hover:text-green-700 transition-transform transform group-hover:scale-125 duration-500 ease-in-out" />
                  <span className="text-base md:text-lg font-semibold tracking-widest group-hover:text-green-400 transition-colors duration-300">
                    Nature
                  </span>
                </div>
                <div className="flex flex-col items-center group">
                  <FaCity className="text-5xl md:text-7xl mb-4 text-blue-500 group-hover:text-blue-700 transition-transform transform group-hover:scale-125 duration-500 ease-in-out" />
                  <span className="text-base md:text-lg font-semibold tracking-widest group-hover:text-blue-400 transition-colors duration-300">
                    Cityscapes
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
