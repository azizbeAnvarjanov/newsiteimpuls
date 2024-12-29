"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectNavbar";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/"));
  
  

  const onSelectChange = (nextLocale) => {
    startTransition(() => {
      if (["/ru", "/en", "/uz"].includes(lastSegment)) {
        // Asosiy sahifaga yo'naltirish
        router.replace(`/${nextLocale}`);
      } else {
        // Hozirgi joyda qolish
        router.replace(`/${nextLocale}${lastSegment}`);
      }
    });
  
    console.log(lastSegment);
  };
  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
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
