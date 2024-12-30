import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CaruselStudents() {
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
    {
      image: "/students/7.jpg",
      text: "Mamadaliyev Abrorbek",
    },
    {
      image: "/students/8.jpg",
      text: "Tursunov Raxmatillo",
    },
    {
      image: "/students/1.jpg",
      text: "Nizamova Nilufar",
    },
    {
      image: "/students/2.jpg",
      text: "Yusupova Iroda",
    },
    {
      image: "/students/4.jpg",
      text: "Jõrayeva Zuxraoy ",
    },
    {
      image: "/students/9.jpg",
      text: "Dadabayeva Adibaxon",
    },
    {
      image: "/students/3.jpg",
      text: "Xabibullayev Kamronbek",
    },
  ];
  return (
    <div className="relative h-[60vh] flex justify-center items-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full p-10 mx-auto"
      >
        <CarouselContent>
          {images.map((item, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex items-center justify-center flex-col gap-3">
                <div className="w-[30vh] h-[30vh] shadow-lg rounded-full relative overflow-hidden">
                  <Image
                    fill
                    src={item.image}
                    alt="ttb images"
                    className="object-cover"
                  />
                </div>
                <h1>{item.text}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CaruselStudents;
