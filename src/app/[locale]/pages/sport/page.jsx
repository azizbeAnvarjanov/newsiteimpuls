import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import SportPage from "@/app/(customComponents)/SportPage";
import React from "react";

const Sport = () => {
  const images = ["/sport/1.jpg", "/sport/2.jpg", "/sport/3.jpg", "/sport/4.jpg", "/sport/5.jpg"];

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <SportPage />
    </div>
  );
};

export default Sport;
