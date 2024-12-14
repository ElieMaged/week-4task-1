/* eslint-disable */
'use client'
import { useState } from "react";

const TripleRowCardCarousel = ({ items }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 3; // Number of cards per row

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerRow >= 0 ? prev - itemsPerRow : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerRow * 2 < items.length ? prev + itemsPerRow : prev
    );
  };

  const displayedItems = items.slice(
    currentIndex,
    currentIndex + itemsPerRow * 2
  );

  return (
    <div className="relative mt-5">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 transition-transform duration-300">
          {displayedItems.map((item:any, idx:number) => (
            <div
              key={idx}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={item.link}>
                <img
                  className="p-8 rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                />
              </a>
              <div className="px-5 pb-5">
                <a href={item.link}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className={`w-4 h-4 ${
                          starIdx < item.rating
                            ? "text-yellow-300"
                            : "text-gray-200 dark:text-gray-600"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {item.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-600"
        onClick={handleNext}
        disabled={currentIndex + itemsPerRow * 2 >= items.length}
      >
        &rarr;
      </button>
    </div>
  );
};

export default TripleRowCardCarousel;
