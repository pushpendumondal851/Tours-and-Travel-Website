import React, { useEffect, useState } from 'react';
import { ArrowCircleUp } from '@mui/icons-material';

export default function GotoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    const height = 650;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setIsVisible(winScroll > height);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="flex justify-center items-center rounded-full fixed bottom-8 right-8 z-50 cursor-pointer"
          onClick={gotoBtn}
        >
          <ArrowCircleUp
            style={{ fontSize: '40px' }}
            className="bg-purple-800 text-white drop-shadow-lg shadow-purple-800 rounded-full animate-bounce"
          />
        </div>
      )}
    </>
  );
}
