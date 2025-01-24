import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const TripInstitute = () => {
  const images = [
    "/institut-history/1.jpg",
    "/grand-students/1.jpg",
    "/grand-students/4.jpg",
    "/grand-students/5.jpg",
    "/about-us/3.jpg",
    "/about-us/4.jpg",
    "/about-us/5.jpg",
  ];
  const t = useTranslations("Institut-history");

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3 space-y-10">
        
      </div>
    </div>
  );
};

export default TripInstitute;
