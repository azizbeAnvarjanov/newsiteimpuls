import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const AboutUs = () => {
  const images = [
    "/about-us/1.jpg",
    "/about-us/2.jpg",
    "/about-us/3.jpg",
    "/about-us/4.jpg",
  ];
  const t = useTranslations("About-us");

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3 space-y-10">
        <p>{t("text-1")}</p>
        <p>{t("text-2")}</p>
        <p>{t("text-3")}</p>
        <p>{t("text-4")}</p>
        <p>{t("text-5")}</p>
        <p>{t("text-6")}</p>
        <p>{t("text-7")}</p>
        <p>{t("text-8")}</p>
        <p>{t("text-9")}</p>
        <p>{t("text-10")}</p>
      </div>
    </div>
  );
};

export default AboutUs;
