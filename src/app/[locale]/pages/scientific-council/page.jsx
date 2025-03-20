import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const ScientificCouncil = () => {
  const t = useTranslations("Scientific-council");
  const images = [
    "/institut-history/1.jpg",
    "/institut-history/2.jpg",
  ];
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
      </div>
    </div>
  );
};

export default ScientificCouncil;
