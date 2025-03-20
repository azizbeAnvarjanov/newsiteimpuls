import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PlatformLink from "./PlatformLink";

const MobileNavbar = () => {
  const t = useTranslations("Navbar");
  const links = [
    {
      name: t("institut"),
      links: [
        {
          name: t("rektor-murojati"),
          href: "/pages/rector-freeze",
        },
        {
          name: t("institut-tarixi"),
          href: "/pages/institut-of-history",
        },
        {
          name: t("ilmiy-kengash"),
          href: "/pages/scientific-council",
        },
        {
          name: t("institut-mamuriyati"),
          href: "/pages/administration-institute",
        },
        {
          name: t("institutga-sayohat"),
          href: "/pages/trip-the-institute",
        },
        {
          name: t("institut-xaritasi"),
          href: "/pages/institute-map",
        },
        {
          name: t("faq"),
          href: "/pages/faq",
        },
      ],
    },
    {
      name: t("biz-haqimizda"),
      links: [
        {
          name: t("biz-haqimizda"),
          href: "/pages/rector-freeze",
        },
        {
          name: t("hamkor-universitetlar"),
          href: "/pages/partner-universities",
        },
        {
          name: t("asosiy-qadriyatlar"),
          href: "/pages/core-values",
        },
        {
          name: t("asosiy-meyoriy-hujjatlar"),
          href: "/pages/basic-documents",
        },
      ],
    },
    {
      name: t("xalqaro-faoliyat"),
      links: [
        {
          name: t("xalqaro-hamkorlik"),
          href: "/pages/international-cooperation",
        },
        {
          name: t("xalqaro-talabalar"),
          href: "/pages/international-students",
        },
        {
          name: t("almashinuv-dasturi"),
          href: "/pages/exchange",
        },
      ],
    },
    {
      name: t("grandlar"),
      links: [
        {
          name: t("bakalavr-grandi"),
          href: "/pages/bachelors-degree",
        },
      ],
    },
    {
      name: t("student-union"),
      links: [
        {
          name: t("student-union"),
          href: "/pages/student-union",
        },
      ],
    },
  ];

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll">
          <SheetHeader>
            <SheetDescription className="text-left text-black flex flex-col gap-2">
              <Accordion type="single" collapsible>
                {links.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    className="border border-b-[1px] border-t-0 border-x-0"
                    value={`item${idx + 1}`}
                  >
                    <AccordionTrigger>{item.name}</AccordionTrigger>
                    {item.links.map((link, idx) => (
                      <AccordionContent className="" key={idx}>
                        <Link
                          className="w-full h-full flex p-2 rounded-md bg-white hover:underline"
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
              <PlatformLink text={t("talim-patformasi")} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
