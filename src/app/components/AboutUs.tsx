import React from 'react';
import Image from 'next/image';
import sofa2 from '../../../public/sofa2.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 px-6 md:px-12 lg:px-24 py-12 bg-white">
      {/* Text Section */}
      <div className="w-[648px] h-[355px] lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
          When we started Avion, the idea was simple. Make high-quality furniture
          affordable and available for the mass market. Handmade, and lovingly
          crafted furniture and homeware is what we live, breathe and design. Our
          Chelsea boutique became the hotbed for the London interior design
          community.
        </p>
        <button className="mt-4 w-max px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 transition rounded">
          Get in touch
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <Image
          src={sofa2} 
          alt="Modern sofa"
          className="rounded-md shadow-md object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
