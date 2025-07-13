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

function CaruselItems({ images }) {
  return (
    <div className="relative pattern bg-white flex justify-center items-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full p-10 mx-auto bg-white"
      >
        <CarouselContent>
          {images.map((item, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 bg-white">
              <div className="p-1 flex items-center justify-center flex-col bg-white">
                <div className="w-[40vh] h-[40vh] shadow-lg relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt="ttb images"
                    fill
                    className="object-cover"
                  />
                </div>
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

export default CaruselItems;
