"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const Carusel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
    },
    {
      image: "/hero.jpg",
      text: "Chortoq TTB",
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
    <div className="w-full py-10">
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
                        fill
                        src={images[index].image}
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
