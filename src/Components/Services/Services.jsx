import React from 'react';
import AnimatedTextSection from '../HomeSectionCarosel/AnimatedTextSection';
import services from '../../Data/Service_Data/Service';
import ServiceHeading from './Service_Heading';
import './Services.css'
const Services = ({ sectionName }) => {
  return (
    <div className="px-4"> {}
      <AnimatedTextSection sectionName={sectionName} />
      <div className="mt-10 flex overflow-x-auto space-x-8 px-8 scrollbar-hide">
        {services.map((category, index) => (
          <div key={index} className="flex-shrink-0 w-80"> {}
            <ServiceHeading service={category.services[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
