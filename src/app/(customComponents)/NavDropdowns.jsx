import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Link from "next/link";

const NavDropdowns = () => {
  const t = useTranslations("Navbar");
  const localActive = useLocale();


  return (
    <div className="flex z-50">
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
              href={`${localActive}/rector-freeze`}
            >
              {t("rektor-murojati")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/institut-of-history`}

            >
              {t("institut-tarixi")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/scientific-council`}

            >
              {t("ilmiy-kengash")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/administration-institute`}

            >
              {t("institut-mamuriyati")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/trip-the-institute`}
              
              >
              {t("institutga-sayohat")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/faq`}
            >
              {t("institut-xaritasi")}
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
              {t("biz-haqimizda")}
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
              href={`${localActive}/about-us`}

            >
              {t("biz-haqimizda")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/partner-universities`}
            >
              {t("hamkor-universitetlar")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/core-values`}
            >
              {t("asosiy-qadriyatlar")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/basic-documents`}
            >
              {t("asosiy-meyoriy-hujjatlar")}
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
              href={`${localActive}/international-cooperation`}
            >
              {t("xalqaro-hamkorlik")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/international-students`}
            >
              {t("xalqaro-talabalar")}
            </Link>
            <Link
              className="py-2 px-4 hover:bg-gray-100 transition-all"
              href={`${localActive}/exchange`}
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
              href={`${localActive}/bachelors-degree`}

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
            >
              {t("ilmiy-faoliyat")}
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
              href={`${localActive}/journal`}

            >
              {t("ilmiy-jurnal")}
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
              href={`${localActive}/student-union`}

            >
              {t("student-union")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdowns;
