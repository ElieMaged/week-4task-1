/* eslint-disable */
"use client"
import React, { useState } from "react";


const MultiItemCarousel = () => {
  // Array of images or SVGs
  const items = [
    "/icon_carousel/image1.svg",
    "/icon_carousel/image2.svg",
    "/icon_carousel/image3.svg",
    "/icon_carousel/image4.svg",
    "/icon_carousel/image5.svg",
    "/icon_carousel/image6.svg",
  ];
  

  const itemsPerView = 3; // Number of items visible at a time
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - itemsPerView ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <h1 className='text-black text-4xl'>Categories</h1>
    <div className='flex flex-row'>
    <h1 className='text-black text-4xl'>Browse by categories</h1>
         <button
        onClick={goToPrevious}
        className="relative top-1/2 left-4  -translate-y-1/2 p-2 bg-gray-900 rounded-full shadow-md max-w-20 max-h-20"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="relative top-1/2  left-5 -translate-y-1/2 p-2 bg-gray-900 rounded-full shadow-md "
      >
        ❯
      </button>
      </div>
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Wrapper */}

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/3 p-2" // Adjust `w-1/3` for itemsPerView
          >
            <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
              <img src={item} alt={`Item ${index + 1}`} className="h-24" />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
 
    </div>
    </>
  );
};

export default MultiItemCarousel;
