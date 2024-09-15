import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Testimonial = ({ name, title, company, quote, image, direction, isVisible }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile devices (768px is a common breakpoint)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animationProps = useSpring({
    from: {
      transform: isMobile ? 'translateY(50%)' : direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
      opacity: 0,
    },
    to: {
      transform: isVisible
        ? 'translateY(0%)'
        : isMobile
        ? 'translateY(50%)'
        : direction === 'left'
        ? 'translateX(-100%)'
        : 'translateX(100%)',
      opacity: isVisible ? 1 : 0,
      scale: hovered ? 1.05 : 1,
    },
    config: {
      duration: 800,
      tension: 220,
      friction: 15,
    },
  });

  return (
    <animated.div
      style={animationProps}
      className="p-6 bg-white shadow-lg rounded-lg cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-sm text-blue-500">{company}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default Testimonial;
