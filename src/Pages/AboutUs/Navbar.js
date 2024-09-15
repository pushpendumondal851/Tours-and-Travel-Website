import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginSignupModal from "./LoginSignupModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    navigate(target);
    if (isMobile) {
      closeMenu();
    }
  };

  return (
    <div>
      <nav className="absolute top-7 right-12 p-4 space-x-8 font-semibold text-lg md:text-lg hidden md:flex z-20"> {/* Adjusted z-index to 20 */}
        {["home", "about-us", "contact"].map((section, index) => (
          <Link
            key={index}
            to={`/${section}`}
            className="transition-transform duration-300 hover:text-white transform hover:scale-110"
            onClick={handleLinkClick}
          >
            {section.toUpperCase().replace("-", " ")}
          </Link>
        ))}
        <button
          onClick={toggleModal}
          className="transition-transform duration-300 hover:text-white transform hover:scale-110"
        >
          PROFILE
        </button>
      </nav>
      <div className="absolute top-7 right-8 md:hidden z-20">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-8 bg-black bg-opacity-50 text-white rounded-lg shadow-lg py-2 px-4 z-20">
          {["home", "about-us", "contact"].map((section, index) => (
            <Link
              key={index}
              to={`/${section}`}
              className="block py-2 px-4 transition-transform duration-300 border-b last:border-b-0 rounded-lg hover:bg-black hover:bg-opacity-30 hover:text-white"
              style={{ marginTop: index === 0 ? 0 : 8 }}
              onClick={handleLinkClick}
            >
              {section.toUpperCase().replace("-", " ")}
            </Link>
          ))}
          <button
            onClick={toggleModal}
            className="block py-2 px-4 transition-transform duration-300 rounded-lg hover:bg-black hover:bg-opacity-30 hover:text-white"
          >
            PROFILE
          </button>
        </div>
      )}
      <LoginSignupModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Navbar;
