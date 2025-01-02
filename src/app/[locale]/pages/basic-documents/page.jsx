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
import Link from "next/link";

const BasicDocuments = () => {
  const t = useTranslations("docs");

  return (
    <div className="overflow-hidden">
      <div className="space-y-3 mb-4">
        <h1>{t("text-1")}</h1>
        <h1>{t("text-2")}</h1>
        <h1>{t("text-3")}</h1>
      </div>
      <Table className="w-full overflow-x-scroll min-w-[500px]">
        <TableHeader className="bg-slate-400">
          <TableRow>
            <TableHead className="w-[100px]">№</TableHead>
            <TableHead>{t("hujjat-nomi")}</TableHead>
            <TableHead>{t("hujjat-raqami")}</TableHead>
            <TableHead>{t("havola")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>{t("nizom")}</TableCell>
            <TableCell>05148751</TableCell>
            <TableCell>
              <Link href="https://drive.google.com/file/d/1cBb9t_OMijpNQRPr4Q-T9s-QjP1075k9/view?usp=sharing">
                {t("yuklash")}
              </Link>{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>{t("guvohnoma")}</TableCell>
            <TableCell>66892214</TableCell>
            <TableCell>
              <Link href="https://drive.google.com/file/d/1Aa6VfbHYp7iBRfNLXon28rVCtmj9Ch5B/view?usp=sharing">
                {t("yuklash")}
              </Link>{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>{t("litsenziya")}</TableCell>
            <TableCell>84555555</TableCell>
            <TableCell>
              <Link href="https://drive.google.com/file/d/1YI0pFgbuJ6xswwUiVk0NAFo21E0MUVlz/view?usp=sharing">
                {t("yuklash")}
              </Link>{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BasicDocuments;
