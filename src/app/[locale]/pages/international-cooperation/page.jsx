import { useTranslations } from "next-intl";
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
import Image from "next/image";
import { Item } from "@radix-ui/react-select";
import Link from "next/link";

const InternationalCorporation = () => {
  const t = useTranslations("xalqaro-xamkorlik");

  const universityies = [
    {
      name: t("osh"),
      url: "https://www.oshsu.kg",
      imageUrl: "/xalqaro-hamkorlik/5.png",
    },
    {
      name: t("panjab"),
      url: "https://www.pu.edu.pk/",
      imageUrl: "/xalqaro-hamkorlik/3.png",
    },
    {
      name: t("WHO"),
      url: "https://www.who.int/",
      imageUrl: "/xalqaro-hamkorlik/2.png",
    },
    {
      name: t("WDSO"),
      url: "https://search.wdoms.org",
      imageUrl: "/xalqaro-hamkorlik/4.png",
    },
    {
      name: t("Nextree"),
      url: "https://www.nextree.io/",
      imageUrl: "/xalqaro-hamkorlik/1.png",
    },
  ];

  return (
    <div>
      <h1>{t("text")}</h1>
      <Table className="w-full overflow-x-scroll min-w-[800px] mt-4">
        <TableHeader className="bg-slate-400">
          <TableRow>
            <TableHead className="w-[50px]">№</TableHead>
            <TableHead>{t("universitet_nomi")}</TableHead>
            <TableHead>{t("havola")}</TableHead>
            <TableHead className="w-[150px]">Logo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {universityies.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Link className="text-blue-500 underline" href={item.url}>
                  {item.url}
                </Link>
              </TableCell>
              <TableCell>
                <div className="w-[60px] h-[60px] mx-auto rounded-md overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InternationalCorporation;
