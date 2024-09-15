import React, { useEffect, useState, useRef } from 'react';
import AnimatedTextSection from '../HomeSectionCarosel/AnimatedTextSection';
import Testimonial from './Testimonial';

const Review = ({ sectionName, testimonials }) => {
  const [visibleRows, setVisibleRows] = useState([]);
  const reviewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleRows((prev) => {
              const newVisibleRows = [...prev];
              newVisibleRows[entry.target.dataset.index] = true;
              return newVisibleRows;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const rows = reviewRef.current.querySelectorAll('.testimonial-row');
    rows.forEach((row, index) => {
      row.dataset.index = index;
      observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <AnimatedTextSection sectionName={sectionName} />
      <div ref={reviewRef} className="mt-8 space-y-8">
        {testimonials.map((testimonial, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 testimonial-row">
                <Testimonial
                  name={testimonial.name}
                  title={testimonial.title}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  image={testimonial.image}
                  direction="left"
                  isVisible={visibleRows[Math.floor(index / 2)]}
                />
                {testimonials[index + 1] && (
                  <Testimonial
                    name={testimonials[index + 1].name}
                    title={testimonials[index + 1].title}
                    company={testimonials[index + 1].company}
                    quote={testimonials[index + 1].quote}
                    image={testimonials[index + 1].image}
                    direction="right"
                    isVisible={visibleRows[Math.floor(index / 2)]}
                  />
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Review;