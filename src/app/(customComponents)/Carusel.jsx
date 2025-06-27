"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carusel = ({ t1, t2, t3, t4, t5, t6, header }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      image: "/ttb/2.jpg",
      text: t1,
    },
    {
      image: "/ttb/1.jpg",
      text: t2,
    },
    {
      image: "/ttb/6.jpg",
      text: t3,
    },
    {
      image: "/ttb/4.jpg",
      text: t4,
    },
    {
      image: "/ttb/3.jpg",
      text: t5,
    },
    {
      image: "/ttb/5.jpg",
      text: t6,
    },
    {
      image: "/ttb/2.jpg",
      text: t1,
    },
    {
      image: "/ttb/1.jpg",
      text: t2,
    },
    {
      image: "/ttb/6.jpg",
      text: t3,
    },
    {
      image: "/ttb/4.jpg",
      text: t4,
    },
    {
      image: "/ttb/3.jpg",
      text: t5,
    },
    {
      image: "/ttb/5.jpg",
      text: t6,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
  }, [api, current]);

  return (
    <div className="w-full py-5">
      <h1 className="mb-5 text-2xl font-bold px-5">{header}</h1>
      <div>
        <div className=" gap-5 items-center">
          <div className="relative w-full col-span-4">
            <div className=" from-background via-white/0 z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {Array.from({ length: images.length }).map((image, index) => (
                  <CarouselItem
                    className="basis-1/2 lg:basis-1/6 rounded-2xl overflow-hidden"
                    key={index}
                  >
                    <div className="relative flex rounded-2xl overflow-hidden aspect-square bg-muted items-center justify-center p-2">
                      <span className="text-sm absolute w-full h-full bg-black z-10 bg-opacity-50 grid p-5 text-white text-xl">
                        {images[index].text}
                      </span>
                      <Image
                        src={images[index].image}
                        alt="ttb images"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
