import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="footer w-full min-h-[85vh] px-5 py-10 md:px-10">
      <div className="w-[250px] h-[85px] relative">
        <Image src="/footerLogo.png" alt="" className="object-cover" fill />
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col text-white space-y-2">
          <p className="font-bold">{t("institut")}</p>
          <Link className="font-light" href="/pages/rector-freeze">
            {t("rektor-murojati")}
          </Link>
          <Link className="font-light" href="/pages/institut-of-history">
            {t("institut-tarixi")}
          </Link>
          <Link className="font-light" href="/pages/scientific-council">
            {t("ilmiy-kengash")}
          </Link>
          <Link className="font-light" href="/pages/administration-institute">
            {t("institut-mamuriyati")}
          </Link>
          <Link className="font-light" href="/pages/trip-the-institute">
            {t("institutga-sayohat")}
          </Link>
          <Link className="font-light" href="/pages/institute-map">
            {t("institut-xaritasi")}
          </Link>
          <Link className="font-light" href="/pages/faq">
            {t("faq")}
          </Link>
        </div>
        <div className="flex flex-col text-white space-y-2">
          <p className="font-bold">{t("biz-haqimizda")}</p>
          <Link className="font-light" href="/partner-universities">
            {t("hamkor-universitetlar")}
          </Link>
          <Link className="font-light" href="/pages/core-values">
            {t("asosiy-qadriyatlar")}
          </Link>
          <Link className="font-light" href="/pages/basic-documents">
            {t("asosiy-meyoriy-hujjatlar")}
          </Link>
        </div>
        <div className="flex flex-col text-white space-y-2">
          <p className="font-bold">{t("xalqaro-faoliyat")}</p>
          <Link className="font-light" href="/pages/international-cooperation">
            {t("xalqaro-hamkorlik")}
          </Link>
          <Link className="font-light" href="/pages/international-students">
            {t("xalqaro-talabalar")}
          </Link>
          <Link className="font-light" href="/pages/exchange">
            {t("almashinuv-dasturi")}
          </Link>
        </div>
        <div className="flex flex-col text-white space-y-2">
          <Link className="font-light" href="/bachelors-degree">
            {t("bakalavr-grandi")}
          </Link>
          <Link className="font-light" href="/pages/journal">
            {t("ilmiy-jurnal")}
          </Link>
          <Link className="font-light" href="/pages/student-union">
            {t("student-union")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
