import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TripInstitute = () => {
  const t = useTranslations("qabul-tartibi");
  const f = useTranslations("faculties");

  return (
    <div>
      <div className="my-3">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <p>{t("p-1")}</p>
        <div className="w-full overflow-x-auto my-4">
          <Table className="min-w-[700px] text-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px] text-center bg-gray-200">
                  №
                </TableHead>
                <TableHead className="bg-gray-200">{t("Dasturlar")}</TableHead>
                <TableHead className="bg-gray-200">
                  {t("Talim shakli")}
                </TableHead>
                <TableHead className="bg-gray-200">{t("Talim tili")}</TableHead>
                <TableHead className="bg-gray-200">
                  {t("Qish davomiyligi")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center">1</TableCell>
                <TableCell>{f("davolash-ishi")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("d-muddati")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">2</TableCell>
                <TableCell>{f("pediatriya")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("d-muddati")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center">3</TableCell>
                <TableCell>{f("stom")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("s-muddati")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>{t("p-2")}</p>
        <p>{t("p-3")}</p>
        <p>{t("p-4")}</p>
        <p className="text-xl font-bold text-center my-4">{t("p-5")}</p>
        <p>{t("p-6")}</p>
        <p>{t("p-7")}</p>
        <p>{t("p-8")}</p>
        <p>{t("p-9")}</p>
        <p className="text-xl font-bold text-center my-4">{t("p-11")}</p>
        <p>{t("p-12")}</p>
        <p className="text-xl font-bold text-center my-4">{t("p-13")}</p>
        <p>{t("p-14")}</p>
        <p className="text-xl font-bold text-center my-4">{t("p-15")}</p>
        <p>{t("p-16")}</p>
        <p className="text-xl font-bold text-center my-4">{t("p-17")}</p>
        <p>{t("p-18")}</p>
        <p className="italic text-sm">{t("p-19")}</p>
        <p className="my-4">{t("p-20")}</p>
        <p>{t("p-21")}</p>
        <p>{t("p-22")}</p>
        <p>{t("p-23")}</p>
        <p>{t("p-24")}</p>
        <p>{t("p-25")}</p>
        <p>{t("p-26")}</p>
        <p className="italic text-sm">{t("p-27")}</p>
        <p className="mt-4">{t("p-28")}</p>
        <p className="mt-4">{t("p-29")}</p>
        <p className="mt-1 ml-6">{t("p-30")}</p>
        <p className="mt-1 ml-6">{t("p-31")}</p>
        <p className="mt-1 ml-6">{t("p-32")}</p>
      </div>
    </div>
  );
};

export default TripInstitute;
