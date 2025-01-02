import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Institutemap = () => {
  const t = useTranslations("institute-map");

  return (
    <div className="md:w-[80%]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("branch-1")}</AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("qavat-1")}</AccordionTrigger>
                <AccordionContent>
                  <div className="h-[40vh] md:h-[60vh] border relative">
                    <Image
                      fill
                      src="/rector.jpg"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{t("qavat-2")}</AccordionTrigger>
                <AccordionContent>
                  <div className="h-[40vh] md:h-[60vh] relative">
                    <Image
                      fill
                      src="/rector.jpg"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("branch-2")}</AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("qavat-1")}</AccordionTrigger>
                <AccordionContent>
                  <div className="h-[40vh] md:h-[60vh] relative">
                    <Image
                      fill
                      src="/rector.jpg"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{t("qavat-2")}</AccordionTrigger>
                <AccordionContent>
                  <div className="h-[40vh] md:h-[60vh] relative">
                    <Image
                      fill
                      src="/rector.jpg"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Institutemap;
