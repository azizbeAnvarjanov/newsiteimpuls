import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const TripInstitute = () => {
  const images = ["/institut-history/1.jpg", "/institut-history/2.jpg"];
  const t = useTranslations("Institut-history");

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3 space-y-10">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe
          sed minus dolores culpa! Quas adipisci porro quibusdam numquam
          cupiditate, aspernatur illum ipsa odio libero minima accusamus unde,
          doloribus sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe
          sed minus dolores culpa! Quas adipisci porro quibusdam numquam
          cupiditate, aspernatur illum ipsa odio libero minima accusamus unde,
          doloribus sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe
          sed minus dolores culpa! Quas adipisci porro quibusdam numquam
          cupiditate, aspernatur illum ipsa odio libero minima accusamus unde,
          doloribus sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe
          sed minus dolores culpa! Quas adipisci porro quibusdam numquam
          cupiditate, aspernatur illum ipsa odio libero minima accusamus unde,
          doloribus sapiente.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe
          sed minus dolores culpa! Quas adipisci porro quibusdam numquam
          cupiditate, aspernatur illum ipsa odio libero minima accusamus unde,
          doloribus sapiente.
        </p>
      </div>
    </div>
  );
};

export default TripInstitute;
