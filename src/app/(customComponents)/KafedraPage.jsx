import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const KafedraPage = ({ path }) => {
  const t = useTranslations(path);
  const d = useTranslations("departments");

  const detailText = t("kafedra-tarkibi-detail");
  const detailText2 = t("kafedra-professor-oqituvchilar-detail");
  const detailList = detailText.split(/\n|\\n/).filter(Boolean);
  const detailList2 = detailText2.split(/\n|\\n/).filter(Boolean);
  const images = t.raw("foto-galereya"); // bu array bo‘lishi kerak

  console.log(typeof images);

  return (
    <div>
      <div className="flex gap-4">
        <div className="min-w-[220px] h-[280px] border relative">
          <Image
            className="object-contain"
            src={t("teacher-img")}
            alt=""
            fill
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-xl">{t("name")}</h1>
          <p>
            {d("teacher")}: {t("teacher")}
          </p>
          <p>{t("teacher-info")}</p>
        </div>
      </div>
      <h2 className="font-bold my-3 text-xl">{t("kafedra-tarixi")}</h2>
      <p>{t("kafedra-tarixi-detail")}</p>
      <h2 className="font-bold my-3 text-xl">{t("kafedra-tarkibi")}</h2>
      <div className="list-decimal list-inside space-y-2 text-gray-800">
        {detailList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h2 className="font-bold my-3 text-xl">
        {t("kafedra-professor-oqituvchilar")}
      </h2>
      <div className="list-decimal list-inside space-y-2 text-gray-800">
        {detailList2.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <br />
      <p>{t("kafedra-professor-oqituvchilar-detail-2")}</p>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images?.length > 0 ? (
          <>
            {images?.map((src, index) => (
              <div key={index} className="rounded overflow-hidden">
                <Image
                  src={src}
                  alt={`Rasm ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </>
        ) : (
          <p>not images</p>
        )}
      </div>
    </div>
  );
};

export default KafedraPage;
