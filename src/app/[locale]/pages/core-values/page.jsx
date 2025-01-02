import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const CoreValues = () => {
  const images = ["/asosiy-qadriyatlar/1.jpg", "/asosiy-qadriyatlar/2.png"];
  const t = useTranslations("qadriyatlarimiz");
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3">
        <p className="font-bold">{t("vision")}</p>
        <p>{t("vision_p")}</p> <br />
        <p className="font-bold">{t("mission")}</p>
        <p>{t("mission_p")}</p>
      </div>
    </div>
  );
};

export default CoreValues;
