import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import React from "react";

const InternationalStudents = () => {
  const images = [
    "/international-students/3.jpg",
    "/international-students/4.jpg",
    "/international-students/5.jpg",
  ];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
    </div>
  );
};

export default InternationalStudents;
