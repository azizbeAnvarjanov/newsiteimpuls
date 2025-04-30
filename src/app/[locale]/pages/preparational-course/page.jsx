import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const PreparationalPage = () => {
  const t = useTranslations("Tayorlov");
  const images = ["/tayorlov/1.png", "/tayorlov/2.png"];
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
      </div>
    </div>
  );
};

export default PreparationalPage;
