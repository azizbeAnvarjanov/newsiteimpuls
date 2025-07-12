"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function RegionSelect() {
  const handleChange = (value) => {
    const links = {
      namangan: "https://www.impulsmi.uz/",
      tashkent: "https://tashkent.impulsmi.uz/",
      andijon: "https://andijon.impulsmi.uz/",
    };

    if (typeof window !== "undefined" && links[value]) {
      window.location.href = links[value];
    }
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Namangan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="namangan">Namangan</SelectItem>
        <SelectItem value="tashkent">Tashkent</SelectItem>
        <SelectItem value="andijon">Andijon</SelectItem>
      </SelectContent>
    </Select>
  );
}
