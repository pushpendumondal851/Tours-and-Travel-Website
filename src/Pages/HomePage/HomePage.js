import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import HomeSectionCarosel from "../../Components/HomeSectionCarosel/HomeSectionCarosel";
import { hotel1 } from "../../Data/Hotel/hotel";
import Review from "../../Components/Review/Review";
import { testimonials } from "../../Data/Testimonials/testimonials";
import Services from "../../Components/Services/Services";
import Offer from "../../Components/Offer/Offer";
import BackToTopButton from "../../Components/BackToTopButton/BackToTopButton"; // Import the button component
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  const [text, setText] = useState("Let's");
  const [visible, setVisible] = useState(true);

  const textAnimation = useSpring({
    opacity: visible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const homeSectionCaroselRef = useRef(null);

  const scrollToSection = () => {
    if (homeSectionCaroselRef.current) {
      homeSectionCaroselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      while (isMounted) {
        setText("Let's");
        setVisible(true);
        await delay(2000);
        setVisible(false);
        await delay(1000);

        setText("Explore");
        setVisible(true);
        await delay(2000);
        setVisible(false);
        await delay(1000);

        setText("The World");
        setVisible(true);
        await delay(2000);
        setVisible(false);
        await delay(1000);

        setText("Together");
        setVisible(true);
        await delay(2000);
        setVisible(false);
        await delay(1000);
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover"
        >
          <source
            src={`${process.env.PUBLIC_URL}/bg_video.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <animated.h1 style={textAnimation} className="text-6xl md:text-9xl font-bold">
              {text}
            </animated.h1>
            <button
              className="mt-10 px-8 py-2 md:px-14 md:py-3 bg-transparent border-2 border-white text-white text-lg md:text-xl font-semibold rounded-3xl hover:bg-white hover:bg-opacity-30"
              onClick={scrollToSection}
            >
              Explore
            </button>
          </div>
          <Navbar />
        </div>
      </div>
      <div
        ref={homeSectionCaroselRef}
        className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'
      >
        <HomeSectionCarosel data={hotel1} sectionName={"Major Tourist Attractions"} />
      </div>
      <div className='space-y-10 py-10 flex flex-col px-5 justify-center px-0'>
        <Offer />
      </div>
      <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
        <Review sectionName={"Testimonials"} testimonials={testimonials} />
      </div>
      <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
        <Services sectionName={"Services"} testimonials={testimonials} />
      </div>
      <BackToTopButton />
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
