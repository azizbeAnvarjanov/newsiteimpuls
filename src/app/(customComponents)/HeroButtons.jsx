import { Magnetic } from "@/components/ui/magnetic";
import { TextEffect } from "@/components/ui/text-effect";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

const HeroButtons = () => {
  const t = useTranslations("Hero");

  return (
    <div className="text-xl lg:flex lg:space-y-0 space-y-6 items-center gap-20 justify-center">
      <Magnetic>
        <Link
          href="https://qabul.impulsmi.uz/"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[15px] font-normal capitalize"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("qabul")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="/pages/exchange"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[15px] font-normal capitalize"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("talim-dasturi")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="/pages/about-us"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[15px] font-normal capitalize w-[200px]"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("biz-haqimizda")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="/pages/student-union"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[15px] font-normal capitalize w-[200px]"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("student-union")}
          </TextEffect>
        </Link>
      </Magnetic>
    </div>
  );
};

export default HeroButtons;
