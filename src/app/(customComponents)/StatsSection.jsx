"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const StatItem = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const props = useSpring({
    number: inView ? value : 0,
    config: { duration: 1500 },
  });

  return (
    <div ref={ref} className="text-2xl flex flex-col justify-center space-y-5">
      <animated.h1 className="text-[1.5em] md:text-[1.5em] text-[--brand-orange]">
        {props.number.to((n) => Math.floor(n).toLocaleString())}
      </animated.h1>
      <Separator className="w-[50%] md:h-1 rounded-full" />
      <h1 className="text-white">{label}</h1>
    </div>
  );
};

const StatsSection = () => {
  const t = useTranslations("stats");

  const allStudentLength = 1500;
  const teachersCount = 110;
  const totalGrandsPrice = 3795000000;
  const klinikBaza = 50;

  return (
    <div className="statssection">
      <div className="h-[90vh] md:h-[50vh] xl:h-[45vh] py-5 px-5 md:px-20 grid justify-between grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 font-bold bg-black bg-opacity-50">
        <StatItem value={allStudentLength} label={t("text-1")} />
        <StatItem value={teachersCount} label={t("text-2")} />
        <StatItem value={totalGrandsPrice} label={t("text-3")} />
        <StatItem value={klinikBaza} label={t("text-4")} />
      </div>
    </div>
  );
};

export default StatsSection;