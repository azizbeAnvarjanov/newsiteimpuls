import { useLocale, useTranslations } from "next-intl";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "@/i18n/routing";
import PlatformLink from "@/app/(customComponents)/PlatformLink";

const NavDropdowns = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex z-50 items-center">
      <div className="lg:flex md:hidden items-center hidden">
        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("institut")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/pages/rector-freeze"
              >
                {t("rektor-murojati")}
              </Link>
              <div className="relative group-aboutsUs">
                <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer">
                  {t("biz-haqimizda")}
                </div>
                <ul className="absolute opacity-0 invisible right-full top-0 w-[300px] bg-white shadow-lg">
                  <Link
                    href="/pages/about-us"
                    className="px-4 py-2 hover:bg-muted w-full flex"
                  >
                    {t("biz-haqimizda")}
                  </Link>
                  <Link
                    href="/pages/partner-universities"
                    className="px-4 py-2 hover:bg-muted w-full flex"
                  >
                    {t("hamkor-universitetlar")}
                  </Link>
                  <Link
                    href="/pages/core-values"
                    className="px-4 py-2 hover:bg-muted w-full flex"
                  >
                    {t("asosiy-qadriyatlar")}
                  </Link>
                  <Link
                    href="/pages/basic-documents"
                    className="px-4 py-2 hover:bg-muted w-full flex"
                  >
                    {t("asosiy-meyoriy-hujjatlar")}
                  </Link>
                </ul>
              </div>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/institut-of-history`}
              >
                {t("institut-tarixi")}
              </Link>

              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/administration-institute`}
              >
                {t("institut-mamuriyati")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/trip-the-institute`}
              >
                {t("institutga-sayohat")}
              </Link>

              {/* <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/institute-map`}
              >
                {t("institut-xaritasi")}
              </Link> */}

              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/intership`}
              >
                {t("amaliyot")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/preparational-course`}
              >
                {t("preparational-course")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/usmle`}
              >
                {t("usmle")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/faq`}
              >
                {t("faq")}
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("tadqiqot-va-innovatsiyalar")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/"
              >
                {t("konferensiya-va-tadbirlar")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/"
              >
                {t("ilmiy-jurnal")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/pages/scientific-council"
              >
                {t("ilmiy-kengash")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("xalqaro-faoliyat")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/international-cooperation`}
              >
                {t("xalqaro-hamkorlik")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/international-students`}
              >
                {t("xalqaro-talabalar")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/exchange`}
              >
                {t("almashinuv-dasturi")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("grandlar")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/bachelors-degree`}
              >
                {t("bakalavr-grandi")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("student-union")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/student-union`}
              >
                {t("student-union")}
              </Link>
              <PlatformLink text={t("talim-patformasi")} />
            </div>
          </div>
        </div>
        <Link
          className="py-2 px-4 hover:bg-gray-100 transition-all"
          href={`/kutubxona`}
        >
          {t("el-kutubxona")}
        </Link>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default NavDropdowns;
