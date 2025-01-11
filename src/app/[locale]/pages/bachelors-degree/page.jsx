import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const BachelosDegree = () => {
  const t = useTranslations("grand");
  const images = [
    "/grand-students/1.jpg",
    "/grand-students/2.jpg",
    "/grand-students/3.jpg",
    "/grand-students/4.jpg",
    "/grand-students/5.jpg",
  ];

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="mt-4">
        <p className="font-bold">{t("text-1")}</p>
        <p>{t("text-2")}</p>
        <p>{t("text-3")}</p>
        <p className="mt-2">{t("text-4")}</p>
        <p className="mt-2 font-bold">{t("text-5")}</p>
        <p>{t("text-6")}</p>
        <p>{t("text-7")}</p>
        <p>{t("text-8")}</p>
        <p>{t("text-9")}</p>
        <p>{t("text-10")}</p>
        <p className="mt-3 font-bold">{t("text-11")}</p>
        <p>{t("text-12")}</p>
        <p>{t("text-13")}</p>
        <p>{t("text-14")}</p>
        <p className="mt-4 font-bold">{t("text-15")}</p>
        <p>{t("text-16")}</p>
        <p>{t("text-17")}</p>
      </div>
    </div>
  );
};

export default BachelosDegree;
