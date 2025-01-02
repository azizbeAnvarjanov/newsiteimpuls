import { useTranslations } from "next-intl";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const t = useTranslations("faq");

  const questions = [
    {
      question: t("question_1"),
      answer: t("answer_1"),
    },
    {
      question: t("question_2"),
      answer: t("answer_2"),
    },
    {
      question: t("question_4"),
      answer: t("answer_4"),
    },
    {
      question: t("question_5"),
      answer: t("answer_5"),
    },
    {
      question: t("question_6"),
      answer: t("answer_6"),
    },
    {
      question: t("question_7"),
      answer: t("answer_7"),
    },
    {
      question: t("question_8"),
      answer: t("answer_8"),
    },
    {
      question: t("question_9"),
      answer: t("answer_9"),
    },
    {
      question: t("question_10"),
      answer: t("answer_10"),
    },
    {
      question: t("question_11"),
      answer: t("answer_11"),
    },
    {
      question: t("question_12"),
      answer: t("answer_12"),
    },
  ];
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="grid md:grid-cols-2 gap-2"
      >
        {questions.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
