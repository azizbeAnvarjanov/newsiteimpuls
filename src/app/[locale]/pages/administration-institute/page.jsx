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
import ViewImage from "../../../(customComponents)/ViewImage";

const AdministrationInstitute = () => {
  const t = useTranslations("administration-institute");

  const values = [
    {
      text: t("text-1"),
      p: t("p-1"),
      raxbar: "Otajonov Nematilla",
      img: "/raxbarlar/nematillo.jpg",
    },
    {
      text: t("text-2"),
      p: t("p-2"),
      raxbar: "Nizambaev Murodjon",
      img: "/raxbarlar/murodjon.jpg",
    },
    {
      text: t("text-3"),
      p: t("p-3"),
      raxbar: "Ahmadjanov Dostonbek",
      img: "/raxbarlar/oquv.jpg",
    },
    {
      text: t("text-4"),
      p: t("p-4"),
      raxbar: "Nazarov Javoxir",
      img: "/raxbarlar/nazarov.jpg",
    },
    {
      text: t("text-5"),
      p: t("p-5"),
      raxbar: "Qutbiddinov Ayubxon",
      img: "/raxbarlar/ayubkhon.png",
    },
    {
      text: t("text-6"),
      p: t("p-6"),
      raxbar: "Vohobjonov Soyibjon",
      img: "/raxbarlar/soyib.jpg",
    },
    {
      text: t("text-7"),
      p: t("p-7"),
      raxbar: "Ahmadjanov Bahodir",
      img: "/raxbarlar/moliya.jpg",
    },
    {
      text: t("text-8"),
      p: t("p-8"),
      raxbar: "Hasanov Ilxomjon",
      img: "/raxbarlar/taminot.jpg",
    },
    {
      text: t("text-9"),
      p: t("p-9"),
      raxbar: "Yuldashev Abrorjon",
      img: "/raxbarlar/hr.jpg",
    },
    {
      text: t("text-10"),
      p: t("p-10"),
      raxbar: "Yo'lchixonova Sadoqat",
      img: "/raxbarlar/sadoqat.jpg",
    },

    {
      text: t("text-12"),
      p: t("p-12"),
      raxbar: "Jo'rayeva Zuxraoy",
      img: "/raxbarlar/zuxra.jpg",
    },
    {
      text: t("text-13"),
      p: t("p-13"),
      raxbar: "Rahimberdiyev Dilmurod",
      img: "/raxbarlar/reg-ofis.jpg",
    },
    {
      text: t("text-14"),
      p: t("p-14"),
      raxbar: "Saddaraliyeva Sadriya",
      img: "/raxbarlar/user.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Table className="w-full overflow-x-scroll min-w-[460px]">
        <TableHeader>
          <TableRow className="bg-[--brand-blue] text-white">
            <TableHead className="md:w-[120px] w-[200px]"> </TableHead>
            <TableHead className="md:w-[400px] w-[200px]">
              {" "}
              <strong>{t("t_head_2")}</strong>
            </TableHead>
            <TableHead className="md:w-[250px] w-[200px]">
              {" "}
              <strong>{t("t_head_3")}</strong>
            </TableHead>
            <TableHead>
              <strong>{t("t_head_4")}</strong>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <div className="mx-auto">
                  <ViewImage url={item.img} w="60" h="60" />
                </div>
              </TableCell>
              <TableCell>
                <strong>{item.text}</strong>
              </TableCell>
              <TableCell>
                <strong>{item.raxbar}</strong>
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
