import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import React from "react";

const InternationalStudents = () => {
  const images = [
    "/international-students/1.jpg",
    "/international-students/2.jpg",
    "/international-students/3.jpg",
    "/international-students/4.jpg",
    "/international-students/5.jpg",
    "/international-students/6.jpg",
    "/international-students/7.jpg",
    "/international-students/8.jpg",
    "/international-students/9.jpg",
    "/international-students/10.jpg",
  ];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
    </div>
  );
};

export default InternationalStudents;
