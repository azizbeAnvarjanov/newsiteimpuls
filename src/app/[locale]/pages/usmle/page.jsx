import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const USMLE = () => {
  const t = useTranslations("usmle");
  const images = ["/usmle/1.png"];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <br />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-start">
        {t("title")}
      </h1>
      <div className="space-y-5 w-full md:w-[90%] lg:w-[80%] text-base sm:text-lg md:text-xl mx-auto md:mx-0">
        <p>{t("p-1")}</p>
        <p>{t("p-2")}</p>
        <p>{t("p-3")}</p>
        <p>{t("p-4")}</p>
      </div>
    </div>
  );
};

export default USMLE;
