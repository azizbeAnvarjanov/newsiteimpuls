import { TextEffect } from "@/components/ui/text-effect";
import React from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="hero h-[87vh] w-full grid place-content-center text-[30px] md:text-[50px] lg:text-[90px] uppercase font-bold text-[--brand-orange] text-center space-y-20">
      <div>
        <TextEffect per="word" as="h1" preset="slide">
          {t("text")}
        </TextEffect>
        <TextEffect per="word" as="h1" preset="slide">
          {t("text-2")}
        </TextEffect>
      </div>
    </div>
  );
};

export default Hero;
