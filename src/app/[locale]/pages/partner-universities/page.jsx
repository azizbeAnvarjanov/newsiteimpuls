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
    },
    {
      name: t("partner-2"),
    },
    {
      name: t("partner-3"),
    },
    {
      name: t("partner-4"),
    },
    {
      name: t("partner-5"),
    },
    {
      name: t("partner-6"),
    },
    {
      name: t("partner-7"),
    },
    {
      name: t("partner-8"),
    },
    {
      name: t("partner-9"),
    },
    {
      name: t("partner-10"),
    },
    {
      name: t("partner-11"),
    },
    {
      name: t("partner-12"),
    },
    {
      name: t("partner-14"),
    },
    {
      name: t("partner-14"),
    },
    {
      name: t("partner-15"),
    },
    {
      name: t("partner-16"),
    },
    {
      name: t("partner-17"),
    },
    {
      name: t("partner-18"),
    },
    {
      name: t("partner-19"),
    },
    {
      name: t("partner-20"),
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
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3 border-b">№</th>
              <th className="text-left p-3 border-b">{t("nomi")}</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3 whitespace-nowrap">{idx + 1}</td>
                <td className="p-3 whitespace-nowrap font-medium">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerUniversityies;
