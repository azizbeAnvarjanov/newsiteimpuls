"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectNavbar";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale) => {
    startTransition(() => {
      // Joriy sahifa manzilini olish
      const currentPath = window.location.pathname;
      const queryString = window.location.search;

      // Activelocale ni topish va almashtirish
      const updatedPath = currentPath.replace(/^\/[a-z]{2}/, `/${nextLocale}`); // URL boshidagi locale ni almashtirish (masalan, /en -> /uz)

      // Yangi yo'nalishga o'tish
      router.replace(`${updatedPath}${queryString}`);
    });
  };

  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-fit">
        <SelectValue className="text-black" placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">En</SelectItem>
          <SelectItem value="ru">Ru</SelectItem>
          <SelectItem value="uz">Uz</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
