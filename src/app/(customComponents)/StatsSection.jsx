import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const t = useTranslations("stats");

  const allStudentLength = 1500;
  const teachersCount = 110;
  const totalGrandsPrice = 3795000000;
  const klinikBaza = 50;
  return (
    <div className="statssection">
      <div className="h-[90vh] md:h-[50vh] xl:h-[45vh] py-5 px-5 md:px-20 grid justify-between grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 font-bold bg-black bg-opacity-50">
        <div className="text-2xl flex flex-col justify-center space-y-5">
          <h1 className="text-[1.5em] md:text-[1.5em] text-[--brand-orange]">
            {allStudentLength?.toLocaleString()}
          </h1>
          <Separator className="w-[50%] md:h-1 rounded-full" />
          <h1 className="text-white">{t("text-1")}</h1>
        </div>
        <div className="text-2xl flex flex-col justify-center space-y-5">
          <h1 className="text-[1.5em] md:text-[1.5em] text-[--brand-orange]">
            {teachersCount}
          </h1>
          <Separator className="w-[50%] md:h-1 rounded-full" />
          <h1 className="text-white">{t("text-2")}</h1>
        </div>
        <div className="text-2xl flex flex-col justify-center space-y-5">
          <h1 className="text-[1.5em] md:text-[1.5em] text-[--brand-orange]">
            {totalGrandsPrice.toLocaleString()}
          </h1>
          <Separator className="w-[50%] md:h-1 rounded-full" />
          <h1 className="text-white">{t("text-3")}</h1>
        </div>
        <div className="text-2xl flex flex-col justify-center space-y-5">
          <h1 className="text-[1.5em] md:text-[1.5em] text-[--brand-orange]">
            {klinikBaza}
          </h1>
          <Separator className="w-[50%] md:h-1 rounded-full" />
          <h1 className="text-white">{t("text-4")}</h1>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
