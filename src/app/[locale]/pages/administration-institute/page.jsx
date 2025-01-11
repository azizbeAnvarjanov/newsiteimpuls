import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AdministrationInstitute = () => {
  const t = useTranslations("administration-institute");

  const values = [
    {
      text: t("text-1"),
      p: t("p-1"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-2"),
      p: t("p-2"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-3"),
      p: t("p-3"),
      img: "/raxbarlar/oquv.jpg",
    },
    {
      text: t("text-4"),
      p: t("p-4"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-5"),
      p: t("p-5"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-6"),
      p: t("p-6"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-7"),
      p: t("p-7"),
      img: "/raxbarlar/moliya.jpg",
    },
    {
      text: t("text-8"),
      p: t("p-8"),
      img: "/raxbarlar/taminot.jpg",
    },
    {
      text: t("text-9"),
      p: t("p-9"),
      img: "/raxbarlar/hr.jpg",
    },
    {
      text: t("text-10"),
      p: t("p-10"),
      img: "/raxbarlar/user.png",
    },

    {
      text: t("text-12"),
      p: t("p-12"),
      img: "/raxbarlar/user.png",
    },
    {
      text: t("text-13"),
      p: t("p-13"),
      img: "/raxbarlar/reg-ofis.jpg",
    },
    {
      text: t("text-14"),
      p: t("p-14"),
      img: "/raxbarlar/user.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Table className="w-full overflow-x-scroll min-w-[460px]">
        <TableHeader>
          <TableRow className="bg-[--brand-blue] text-white">
            <TableHead className="md:w-[120px] w-[200px]">
              {" "}
              <strong>{t("t_head_1")}</strong>
            </TableHead>
            <TableHead className="md:w-[400px] w-[200px]">
              {" "}
              <strong>{t("t_head_2")}</strong>
            </TableHead>
            <TableHead>
              <strong>{t("t_head_3")}</strong>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <div className="w-[60px] h-[60px] shadow-lg rounded-lg relative overflow-hidden mx-auto">
                  <Image
                    src={item.img}
                    alt={item.text}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>
                <strong>{item.text}</strong>
              </TableCell>
              <TableCell>{item.p}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdministrationInstitute;
