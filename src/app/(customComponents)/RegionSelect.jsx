import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function RegionSelect() {
  const t = useTranslations("Navbar");

  return (
    <div className="mx-auto flex items-center justify-center bg-white z-50">
      <div className="group relative cursor-pointer">
        <div className="flex items-center justify-between  bg-white px-4">
          <div className="menu-hover text-base font-medium text-black p-2">
            {t("branch")}
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

        <div className="invisible absolute z-50 flex w-[150px] flex-col bg-white  text-black shadow-xl group-hover:visible">
          <Link
            className="py-2 px-4 hover:bg-gray-100 transition-all"
            href={`https://impulsmi.uz/ru`}
          >
            {t("branch-namangan")}
          </Link>
          <Link
            className="py-2 px-4 hover:bg-gray-100 transition-all"
            href={`https://tashkent.impulsmi.uz/ru`}
          >
            {t("branch-tashkent")}
          </Link>
          <Link
            className="py-2 px-4 hover:bg-gray-100 transition-all"
            href={`https://andijon.impulsmi.uz/ru`}
          >
            {t("branch-andijon")}
          </Link>
        </div>
      </div>
    </div>
  );
}
