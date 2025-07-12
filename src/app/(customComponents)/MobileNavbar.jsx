"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
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
import navLinks from "@/app/navlinks";
import LocalSwitcher from "@/components/local-switcher";

const MobileNavbar = () => {
  const t = useTranslations("Navbar");

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
                {navLinks.map((section, idx) => (
                  <AccordionItem
                    key={idx}
                    className="border border-b-[1px] border-t-0 border-x-0"
                    value={`item${idx + 1}`}
                  >
                    <AccordionTrigger>{t(section.name)}</AccordionTrigger>

                    {section.subLinks?.map((subLink, subIdx) => (
                      <AccordionContent key={subIdx}>
                        <Link
                          className="w-full flex justify-between items-center p-2 rounded-md bg-white hover:bg-gray-100"
                          href={subLink.href}
                        >
                          <span>{t(subLink.name)}</span>
                          {subLink.href === "/" && (
                            <span className="ml-2 text-xs bg-blue-100 px-2 py-0.5 rounded">
                              Tez kunda
                            </span>
                          )}
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            </SheetDescription>
            <div>
              <LocalSwitcher />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
