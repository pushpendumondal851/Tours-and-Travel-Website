import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hotel1 } from "../../Data/Hotel/hotel";
import { FaLocationPin, FaCalendarDay, FaUsers, FaSearch, FaLocationArrow } from "react-icons/fa";
import SimilarHotels from "../../Components/SimilarPlaces/SimilarHotels";
import Footer from "../../Components/Footer/Footer";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ItemDetails = () => {
  const { name, state } = useParams();
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out',
      once: true, 
      offset: 200, 
      delay: 300, 
    });

    AOS.refresh();
    
    window.scrollTo(0, 0);
  }, []);

  const hotel = hotel1.find((hotel) => hotel.name === name);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const { description, images, rooms } = hotel;

  const handlePrevClick = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentRoomIndex((prevIndex) =>
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBookNowClick = () => {
    const roomType = rooms[currentRoomIndex].type;
    const roomAmount = rooms[currentRoomIndex].price_per_night;
    const gstAmount = rooms[currentRoomIndex].price_per_night * 0.2;
    navigate("/booknow", {
      state: { city: state, hotelName: name, roomType, roomAmount, gstAmount },
    });
  };

  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <Navbar />

        <div className="max-w-6xl mx-auto p-4 mt-24">
          {/* Hotel Name */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:mr-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mr-2" data-aos="fade-up">
                {hotel.name}
              </h1>
              <p className="text-yellow-500 text-2xl" data-aos="fade-up" data-aos-delay="300">★★★★☆</p>
            </div>

            <button
              className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-[#B8860B] hover:border-[#FF4500] hover:bg-gradient-to-r hover:from-[#FFD700] hover:via-[#FF4500] hover:to-[#FF6347]"
              onClick={handleGoBackClick}
            >
              Explore More
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
            <div className="flex flex-col lg:flex-row">
              {/* Left section: Images and description */}
              <div className="lg:w-2/3 p-4 border border-gray-200 rounded-lg lg:mr-4 mb-4 lg:mb-0">
                <div className="relative mb-4" data-aos="fade-right">
                  <img
                    src={images[0]}
                    alt={hotel.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Guest Photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      data-aos="zoom-in"
                      data-aos-delay={index * 200}
                    />
                  ))}
                </div>

                <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-4" data-aos="fade-up">
                  <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center lg:text-left">
                    Discover Our Luxurious Accommodations
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                    {hotel.description}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 p-4 border border-gray-200 rounded-lg" data-aos="fade-left">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-center lg:text-left">
                    {rooms[currentRoomIndex].type}
                  </h3>
                  <p className="text-gray-600 text-center lg:text-left">
                    {rooms[currentRoomIndex].description}
                  </p>
                  <p className="text-lg font-bold mt-2 text-center lg:text-left">
                    ₹ {rooms[currentRoomIndex].price_per_night}
                  </p>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    + ₹ {rooms[currentRoomIndex].price_per_night * 0.2} taxes & fees
                  </p>
                  <button
                    className="mt-4 bg-gradient-to-r from-blue-500 via-white to-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:via-gray-300 hover:to-blue-600 w-full text-center lg:w-auto lg:text-left"
                    onClick={handleBookNowClick}
                  >
                    <span
                      className="textb text-blue-900"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      BOOK THIS NOW
                    </span>
                  </button>
                </div>

                {/* Reviews */}
                <div className="mt-4" data-aos="fade-up">
                  <div className="bg-blue-100 p-4 rounded-lg text-center lg:text-left">
                    <p className="text-lg font-bold">Very Good</p>
                    <p className="text-sm text-gray-600">3.7 (2293 ratings)</p>
                    <p className="text-sm text-gray-600">
                      66% guests rated this property 4 and above
                    </p>
                    <a href="#all-reviews" className="text-blue-500 underline">
                      All Reviews
                    </a>
                  </div>
                </div>

                <div className="relative mt-4" data-aos="fade-up">
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-l m-2"
                      onClick={handlePrevClick}
                    >
                      &#10094;
                    </button>
                    <div className="w-full overflow-hidden">
                      <img
                        src={rooms[currentRoomIndex].images[0]}
                        alt={`Room ${rooms[currentRoomIndex].type}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <button
                      className="bg-blue-500 text-white p-2 rounded-r m-2"
                      onClick={handleNextClick}
                    >
                      &#10095;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SimilarHotels state={state} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ItemDetails;
