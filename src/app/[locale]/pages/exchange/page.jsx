import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import React from "react";

const Exchange = () => {
  const images = [
    "/about-us/1.jpg",
    "/about-us/2.jpg",
    "/about-us/3.jpg",
    "/about-us/4.jpg",
  ];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
    </div>
  );
};

export default Exchange;
