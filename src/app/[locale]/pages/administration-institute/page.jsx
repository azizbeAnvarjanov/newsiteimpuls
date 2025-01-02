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

const AdministrationInstitute = () => {
  const t = useTranslations("administration-institute");

  const values = [
    {
      text: t("text-1"),
      p: t("p-1"),
    },
    {
      text: t("text-2"),
      p: t("p-2"),
    },
    {
      text: t("text-3"),
      p: t("p-3"),
    },
    {
      text: t("text-4"),
      p: t("p-4"),
    },
    {
      text: t("text-5"),
      p: t("p-5"),
    },
    {
      text: t("text-6"),
      p: t("p-6"),
    },
    {
      text: t("text-7"),
      p: t("p-7"),
    },
    {
      text: t("text-8"),
      p: t("p-8"),
    },
    {
      text: t("text-9"),
      p: t("p-9"),
    },
    {
      text: t("text-10"),
      p: t("p-10"),
    },

    {
      text: t("text-12"),
      p: t("p-12"),
    },
    {
      text: t("text-13"),
      p: t("p-13"),
    },
    {
      text: t("text-14"),
      p: t("p-14"),
    },
  ];

  return (
    <div className="overflow-hidden">
      <Table className="w-full overflow-x-scroll min-w-[460px]">
        <TableHeader>
          <TableRow className="bg-[--brand-blue] text-white">
            <TableHead className="md:w-[400px] w-[200px]">
              {" "}
              <strong>{t("t_head_1")}</strong>
            </TableHead>
            <TableHead>
              <strong>{t("t_head_2")}</strong>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((item, idx) => (
            <TableRow key={idx}>
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
