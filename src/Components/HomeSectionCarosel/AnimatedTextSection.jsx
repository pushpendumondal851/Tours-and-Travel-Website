import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedTextSection = ({ sectionName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <div ref={sectionRef}>
      <animated.h2
        className="text-4xl font-extrabold text-center py-5 shadow-lg rounded-md uppercase"
        style={{
          ...textAnimation,
          backgroundImage: 'linear-gradient(to right, #FFA500, #FF69B4)', 
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'Dancing Script',
        }}
      >
        {sectionName}
      </animated.h2>
    </div>
  );
};

export default AnimatedTextSection;
