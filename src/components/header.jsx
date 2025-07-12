import { useTranslations } from "next-intl";
import NavDropdowns from "../app/(customComponents)/NavDropdowns";
import { Facebook, Instagram, Youtube } from "lucide-react";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "@/i18n/routing";
import RegionSelect from "../app/(customComponents)/RegionSelect";

export default function Header() {
  const t = useTranslations("Navbar");

  return (
    <header className="border-b shadow-md fixed w-full h-[18vh] z-50">
      <div className="h-[50%]  backdrop-blur-md bg-blue-700/30 px-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link className="text-white flex gap-2" href="tel:+998555105015">
            <span className="lg:flex md:hidden items-center hidden">
              {t("aloqa-markazi")}{" "}
            </span>{" "}
            +998 55 510 50 15
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

        <div className="flex gap-5 items-center text-white">
          <RegionSelect />
          <Link className="md:flex hidden" href="https://student.impulsmi.uz">
            {t("hemis")}
          </Link>
          <Link className="md:flex hidden" href="https://learn.impulsmi.uz">
            {t("talim-platformasi")}
          </Link>
          <LocalSwitcher />
        </div>
      </div>
      <nav className="flex p-5 items-center justify-between h-[50%] backdrop-blur-md bg-white/30">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h1 className="font-bold">{t("impuls")}</h1>
            <h1 className="font-bold">{t("tibbiyot-instituti")}</h1>
          </div>
        </Link>
        <NavDropdowns locc="uz" />
      </nav>
    </header>
  );
}
