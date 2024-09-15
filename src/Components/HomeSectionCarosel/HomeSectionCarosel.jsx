import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "react-alice-carousel/lib/alice-carousel.css";
import AnimatedTextSection from "./AnimatedTextSection";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    0: { items: 1 }, 
    480: { items: 1.5 }, 
    640: { items: 2 }, 
    768: { items: 3 }, 
    1024: { items: 4 },
    1280: { items: 5 }, 
  };

  const slidePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const slideNext = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const items = data
    .slice(startIndex, startIndex + itemsPerPage)
    .map((item, index) => <HomeSectionCard product={item} key={index} />);

  return (
    <div>
      <AnimatedTextSection sectionName={sectionName} />

      <div className="relative p-5 mt-10">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={0}
          mouseTracking
        />
        <div className="hidden md:block">
          {startIndex > 0 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              style={{
                position: "absolute",
                left: "0rem",
                top: "40%",
                transform: "translate(-50%, -50%) rotate(90deg)",
                backgroundColor: "white",
                color: "black",
                transition: "background-color 0.3s",
              }}
              aria-label="previous"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.querySelector("svg").style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.querySelector("svg").style.color = "black";
              }}
            >
              <KeyboardArrowLeftIcon
                style={{ transform: "rotate(-90deg)", color: "black" }}
              />
            </Button>
          )}

          {startIndex + itemsPerPage < data.length && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              style={{
                position: "absolute",
                right: "0rem",
                top: "40%",
                transform: "translate(50%, -50%) rotate(90deg)",
                backgroundColor: "white",
                color: "black",
                transition: "background-color 0.3s",
              }}
              aria-label="next"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.querySelector("svg").style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.querySelector("svg").style.color = "black";
              }}
            >
              <KeyboardArrowLeftIcon
                style={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}
        </div>
        
        {isMobile && (
          <div className="text-center mb-6 mt-4 px-6">
            <p className="text-sm italic font-cursive text-gray-700">
              Scroll right to view more{" "}
              <span className="inline-block animate-bounce">&rarr;</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
