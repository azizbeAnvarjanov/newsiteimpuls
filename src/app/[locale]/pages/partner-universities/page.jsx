import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerUniversityies = () => {
  const t = useTranslations("hamkorlarimiz");
  const t2 = useTranslations("xalqaro-xamkorlik");

  const partners = [
    {
      name: t("partner-1"),
      img_path: "/partners-logos/tta.png",
      url: "https://tma.uz/",
    },
    {
      name: t("partner-2"),
      img_path: "/partners-logos/emu.png",
      url: "https://emuni.uz/uz/",
    },
    {
      name: t("partner-3"),
      img_path: "/partners-logos/adti.png",
      url: "https://adti.uz/",
    },
    {
      name: t("partner-4"),
      img_path: "/partners-logos/osh.png",
      url: "https://www.oshsu.kg/kg",
    },
    {
      name: t("partner-5"),
      img_path: "/partners-logos/tgfu.png",
      url: "https://tgfu.uz/uz/",
    },
  ];

  return (
    <div>
      <h1 className="">{t2("hamkorlik-text")}</h1>
      <br />
      <h1 className="">{t2("hamkorlik-text-2")}</h1>
      <br />
      <h1 className="">{t2("hamkorlik-text-3")}</h1>
      <br />
      <div className="grid md:grid-cols-2 gap-5">
        {partners.map((item, idx) => (
          <div key={idx} className="border flex p-2 rounded-lg shadow-md gap-3">
            <div className="w-[100px] h-[100px] relative rounded-lg">
              <img
                src={item.img_path}
                alt="wefewdewd"
                className="object-contain rounded-lg w-full h-full"
              />
            </div>
            <div>
              <h1 className="mb-4 font-bold">{item.name}</h1>
              <Link
                href={item.url}
                className="text-white py-2 px-4 bg-[--brand-blue] rounded-md"
              >
                {t("link-text")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerUniversityies;
