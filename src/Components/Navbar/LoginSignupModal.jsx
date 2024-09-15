import React, { useState, useEffect } from "react";

const LoginSignupModal = ({ isOpen, toggleModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeButton, setActiveButton] = useState("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1533856797653-6f6dbf370efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Sign up now to join the club of 10 crore+ Happy Travellers",
    },
    {
      image: "https://images.unsplash.com/photo-1697788690166-0027bbc87053?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Enjoy exclusive offers and deals",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1664299306316-fbc6bb630e7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Travel safe and secure with us",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!isOpen) return null;

  const renderInputFields = () => {
    if (isEmailLogin) {
      if (activeButton === "login") {
        return (
          <div className="w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: email ? "black" : "gray" }}
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-full">
              Generate OTP
            </button>
          </div>
        );
      } else {
        return (
          <div className="w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: email ? "black" : "gray" }}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: password ? "black" : "gray" }}
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-full">
              Continue
            </button>
          </div>
        );
      }
    } else {
      return (
        <div className="w-full max-w-md mx-auto">
          <input
            type="tel"
            placeholder={activeButton === "signup" ? "Enter mobile number to register" : "Enter Mobile Number"}
            className="w-full p-3 border border-gray-300 rounded mb-4"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ color: phoneNumber ? "black" : "gray" }}
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-full">
            Continue
          </button>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-lg md:max-w-4xl relative">
        {/* Close Button */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <button onClick={toggleModal} className="text-black text-2xl">
            &times;
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Carousel Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-800 text-white rounded-t-lg md:rounded-l-lg relative overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-lg sm:text-2xl font-bold text-center p-4">
                    {slide.text}
                  </h2>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white p-4 sm:p-8 rounded-b-lg md:rounded-r-lg flex flex-col items-center justify-center">
            <div className="mb-4 sm:mb-6 p-2 bg-gray-200 rounded-full flex w-full max-w-md">
              <button
                className={`flex-1 py-2 text-base sm:text-lg font-semibold text-center rounded-full ${
                  activeButton === "login"
                    ? "bg-gradient-to-r from-blue-500 to-white text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => {
                  setActiveButton("login");
                  setIsEmailLogin(false);
                }}
              >
                Log In
              </button>
              <button
                className={`flex-1 py-2 text-base sm:text-lg font-semibold text-center rounded-full ${
                  activeButton === "signup"
                    ? "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => {
                  setActiveButton("signup");
                  setIsEmailLogin(false);
                }}
              >
                Sign Up
              </button>
            </div>

            {renderInputFields()}

            <div className="text-center my-4 text-sm sm:text-base">Or Login/Signup With</div>
            <div className="flex flex-wrap justify-center space-x-4 mb-4">
              <button className="p-2 border rounded-full">
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="Google"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
              {isEmailLogin ? (
                <button
                  className="p-2 text-blue-600 text-sm sm:text-base"
                  onClick={() => setIsEmailLogin(false)}
                >
                  Continue with mobile number
                </button>
              ) : (
                <button
                  className="p-2 border rounded-full"
                  onClick={() => setIsEmailLogin(true)}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/new-post.png"
                    alt="Email"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </button>
              )}
            </div>

            <div className="text-center text-xs sm:text-sm text-gray-500 mt-4">
              By proceeding, you agree to TourIndia's{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
              ,{" "}
              <a href="#" className="text-blue-600">
                User Agreement
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                T&Cs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
