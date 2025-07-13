import CaruselItems from "@/app/(customComponents)/CaruselItems";
import React from "react";

const InternationalStudents = () => {
  const images = [
    {
      image: "/students/11.jpg",
      text: "Mirzamahmudov Mirjalol",
    },
    {
      image: "/students/12.jpg",
      text: "Daminova Nazokat",
    },
    {
      image: "/students/13.jpg",
      text: "Isaqova Nigora",
    },
    {
      image: "/students/14.jpg",
      text: "Muxammedova Dilfuza",
    },
    {
      image: "/students/6.jpg",
      text: "Izzatullayev Botirjon",
    },
    {
      image: "/students/5.jpg",
      text: "Anvarov Ahmadali",
    },
    {
      image: "/students/10.jpg",
      text: "Qayumov Siddiqjon",
    },
  ];
  return (
    <div className="py-10 bg-white max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Campus
      </h1>
      <CaruselItems images={images} />
    </div>
  );
};

export default InternationalStudents;
