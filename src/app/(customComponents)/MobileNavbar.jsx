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
import { Separator } from "@/components/ui/separator";

const MobileNavbar = () => {
  const t = useTranslations("Navbar");
  const links = [
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
    {
      name: t("biz-haqimizda"),
      href: "/pages/about-us",
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
    {
      name: t("bakalavr-grandi"),
      href: "/pages/bachelors-degree",
    },
    {
      name: t("student-union"),
      href: "/pages/student-union",
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
              {links.map((item, idx) => (
                <Link
                  key={idx}
                  className="border py-2 px-4 rounded-md hover:bg-slate-300"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
