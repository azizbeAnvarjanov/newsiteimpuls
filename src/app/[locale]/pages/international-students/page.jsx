import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

import FeesAndIntakeTable from "@/app/(customComponents)/FeesAndIntakeTable";
import Link from "next/link";

const InternationalStudents = () => {
  const t = useTranslations("internation-students");
  const f = useTranslations("faq-2");
  const i = useTranslations("inter-contact");

  const images = [
    "/international-students/3.jpg",
    "/international-students/4.jpg",
    "/international-students/5.jpg",
  ];
  const tableInfos = [
    {
      title: t("title-1"),
      info: t("info-1"),
    },
    {
      title: t("title-2"),
      info: t("info-2"),
    },
    {
      title: t("title-3"),
      info: t("info-3"),
    },
    {
      title: t("title-4"),
      info: t("info-4"),
    },
    {
      title: t("title-5"),
      info: t("info-5"),
    },
    {
      title: t("title-6"),
      info: t("info-6"),
    },
    {
      title: t("title-7"),
      info: t("info-7"),
    },
    {
      title: t("title-8"),
      info: t("info-8"),
    },
    {
      title: t("title-9"),
      info: t("info-9"),
    },
    {
      title: t("title-10"),
      info: t("info-10"),
    },
    {
      title: t("title-11"),
      info: t("info-11"),
    },
    {
      title: t("title-12"),
      info: t("info-12"),
    },
    // {
    //   title: t("title-13"),
    //   info: t("info-13"),
    // },
  ];
  const faqs = [
    {
      question: f("question-1"),
      answer: f("answer-1"),
    },
    {
      question: f("question-2"),
      answer: f("answer-2"),
    },
    {
      question: f("question-3"),
      answer: f("answer-3"),
    },
    {
      question: f("question-4"),
      answer: f("answer-4"),
    },
    {
      question: f("question-5"),
      answer: f("answer-5"),
    },
    {
      question: f("question-6"),
      answer: f("answer-6"),
    },
  ];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="flex items-start gap-4 w-[80%] mx-auto py-10">
        <h1 className="text-3xl text-[--brand-blue] font-bold">
          {t("main-text-1")}
        </h1>
        <div className="space-y-4">
          <p>{t("main-p-1")}</p>
          <p>{t("main-p-2")}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <Image fill src={"/bino.png"} className="object-cover" alt="" />
        </div>
        <div>
          <Table className="w-full overflow-x-scroll min-w-[460px]">
            <TableHeader>
              <TableRow className="bg-[--brand-blue] text-white">
                <TableHead className="bg-white text-black py-5">
                  {t("header-1")}
                </TableHead>
                <TableHead className="bg-white text-black py-5">
                  {t("header-info-1")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableInfos.map((item, i) => (
                <TableRow key={i} className={i % 2 === 0 ? "bg-muted" : ""}>
                  <TableCell className="py-5">{item.title}</TableCell>
                  <TableCell className="py-5">{item.info}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="py-5">{t("title-13")}</TableCell>
                <TableCell className="py-5">
                  <Link href={"https://impulsmedicalinstitute.com"}>
                    {t("info-13")}
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <FeesAndIntakeTable />
      <div>
        <h1 className="font-bold text-4xl my-5 text-[--brand-blue]">
          {t("recognition-certificate-license")}
        </h1>
        <div className="grid grid-cols-3 gap-2 h-[65vh]">
          <div className="relative">
            <Image fill src={"/licence/3.jpg"} alt="" />
          </div>
          <div className="relative">
            <Image fill src={"/licence/1.jpg"} alt="" />
          </div>
          <div className="relative">
            <Image fill src={"/licence/2.jpg"} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl my-5 text-[--brand-blue]">FAQ</h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i + 1} value={`item-${i + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="bg-gray-200 px-3 pt-3 pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-[50%]">
        <h1 className="font-bold text-4xl my-5 text-[--brand-blue]">
          {i("title")}
        </h1>
        <p>{i("title-p-1")}</p>
        <br />
        <p>{i("title-p-2")}</p>
        <br />
        <p>Email: admission@impulsmedicalinstitute.com</p>
        <p>Phone number: +91 8252646969</p>
      </div>
    </div>
  );
};

export default InternationalStudents;
