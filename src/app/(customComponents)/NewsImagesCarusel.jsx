"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AutoImageCarousel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] xl:h-[80vh] 2xl:h-[100vh] overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            className="object-cover w-full h-full"
            src={image}
            alt={`Image ${index}`}
            fill
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
