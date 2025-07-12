import { useLocale, useTranslations } from "next-intl";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "@/i18n/routing";
import navLinks from "@/app/navlinks";

const NavDropdowns = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex items-center">
      <div className="lg:flex md:hidden items-center hidden">
        {navLinks.map((link, i) => (
          <div key={i} className="mx-auto flex items-center justify-center">
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between px-4">
                <div className="menu-hover text-base font-medium text-black p-2 rounded-md">
                  {t(link.name)}
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>

              {/* ✅ SUBLINK DROPDOWN */}
              <div className="invisible group-hover:visible absolute right-0 z-50 w-[300px] bg-white text-black shadow-xl rounded-md flex flex-col">
                {link.subLinks.map((subLink, idx) => (
                  <Link
                    key={idx}
                    href={subLink.href}
                    className="py-2 px-4 hover:bg-gray-100 transition-all flex justify-between items-center"
                  >
                    <span>{t(subLink.name)}</span>
                    {subLink.href === "/" && (
                      <span className="ml-2 text-xs bg-blue-100 px-2 py-0.5 rounded">
                        Tez kunda
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <MobileNavbar />
    </div>
  );
};

export default NavDropdowns;
