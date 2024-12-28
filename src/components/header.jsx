import { useTranslations } from "next-intl";
import Link from "next/link";
import NavDropdowns from "../app/(customComponents)/NavDropdowns";
import { Facebook, Instagram, Youtube } from "lucide-react";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Navbar");

  return (
    <header className="bg-white border-b shadow-md fixed w-full h-[13vh] z-50">
      <div className="h-[50%] bg-[--brand-blue] px-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link className="text-white" href="tel:+998505105015">
            <span className="lg:flex md:hidden items-center hidden">{t("aloqa-markazi")} </span> +998 50 510 50 15
          </Link>
          <Link
            className="text-white lg:flex md:hidden items-center hidden"
            href="https://www.facebook.com/impuls.medical.institute/"
          >
            <Facebook />
          </Link>
          <Link
            className="text-white lg:flex md:hidden items-center hidden"
            href="https://www.youtube.com/@impulsmedicalinstitute"
          >
            <Youtube />
          </Link>
          <Link
            className="text-white lg:flex md:hidden items-center hidden"
            href="https://www.instagram.com/impuls_mi/"
          >
            <Instagram />
          </Link>
        </div>
        <div>
          <LocalSwitcher />
        </div>
      </div>
      <nav className="flex px-5 items-center justify-between h-[50%]">
        <Link href="/" className="flex gap-2">
          <Image
            src="/logo.png"
            className="object-contain"
            width={40}
            height={40}
          />
          <div>
            <h1 className="font-bold">{t("impuls")}</h1>
            <h1 className="font-bold">{t("tibbiyot-instituti")}</h1>
          </div>
        </Link>
        <NavDropdowns translation="ssss" />
      </nav>
    </header>
  );
}
