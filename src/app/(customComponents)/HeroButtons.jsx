import { Magnetic } from "@/components/ui/magnetic";
import { TextEffect } from "@/components/ui/text-effect";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const HeroButtons = () => {
  const t = useTranslations("Hero");

  return (
    <div className="text-xl flex items-center gap-60 absolute bottom-28 left-[50%] -translate-x-[50%]">
      <Magnetic>
        <Link
          href="https://qabul.impulsmi.uz/"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[18px] font-normal capitalize w-[300px]"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("qabul")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://qabul.impulsmi.uz/"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[18px] font-normal capitalize w-[300px]"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("talim-dasturi")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://qabul.impulsmi.uz/"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[18px] font-normal capitalize w-[300px]"
        >
          {/* <span>Qabul 2024-2025</span> */}
          <TextEffect per="word" as="h1" preset="slide">
            {t("biz-haqimizda")}
          </TextEffect>
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://qabul.impulsmi.uz/"
          type="button"
          className="text-white bg-[--brand-blue] py-2 px-10 rounded-full text-[18px] font-normal capitalize w-[300px]"
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
