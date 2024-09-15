import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [product.images.length]);

  const handleClick = () => {
    navigate(`/item/${product.location.state}/${product.name}`);
  };

  return (
    <div
      className='relative cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden 
                 w-[15rem] h-[18rem] mx-3 transform transition duration-300 hover:scale-105 hover:shadow-2xl 
                 md:w-[15rem] md:h-[17rem] sm:w-[10rem] sm:h-[12rem]'
      onClick={handleClick}
    >
      <div className='h-full w-full relative rounded-lg overflow-hidden'>
        {product.images.map((image, index) => (
          <img
            key={index}
            className={`object-cover w-full h-full absolute transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt=""
          />
        ))}
        <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg'>
          <h3 className='text-lg font-medium text-white'>{product.name}</h3>
          <p className='mt-2 text-sm text-gray-300'>{product.location.state}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
