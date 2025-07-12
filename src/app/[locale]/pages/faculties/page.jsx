import React from "react";
import { useTranslations } from "next-intl";

const Fakultetlar = () => {
  const t = useTranslations("faculties");

  const faculties = [
    {
      title: t("davolash-ishi"),
      keys: [
        "d-oquv-shakli",
        "d-talim-shakli",
        "d-muddati",
        "d-tili",
        "d-p-1",
        "d-p-2",
        "d-p-3",
        "d-p-4",
        "d-p-5",
      ],
    },
    {
      title: t("stom"),
      keys: [
        "s-oquv-shakli",
        "s-talim-shakli",
        "s-muddati",
        "s-tili",
        "s-p-1",
        "s-p-2",
        "s-p-3",
        "s-p-4",
        "s-p-5",
      ],
    },
    {
      title: t("pediatriya"),
      keys: [
        "p-oquv-shakli",
        "p-talim-shakli",
        "p-muddati",
        "p-tili",
        "p-p-1",
        "p-p-2",
        "p-p-3",
        "p-p-4",
        "p-p-5",
      ],
    },
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Fakultetlar</h1>
      <div className="space-y-10">
        {faculties.map((faculty, i) => (
          <div key={i} className="space-y-4">
            <h2
              className={`font-bold text-2xl text-[--brand-blue]`}
            >
              {faculty.title}
            </h2>
            {faculty.keys.map((key, index) => {
              const prefixLabel =
                index === 0
                  ? "O‘qish shakli – "
                  : index === 1
                  ? "Talim shakli – "   
                  : index === 2
                  ? "Muddati – "
                  : index === 3
                  ? "Til – "
                  : "";
              return (
                <p key={index}>
                  {prefixLabel}
                  {t(key)}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakultetlar;
