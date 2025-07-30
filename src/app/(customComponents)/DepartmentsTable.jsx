import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const DepartmentsTable = () => {
  const t = useTranslations("departments");

  
  const departments = [
    {
      name: t("if"),
      head: "Boymirzayev Azamat Soliyevich",
      slug: "social-department",
    },
    {
      name: t("mk"),
      head: "Mirzakarimov Boburmirzo",
      slug: "morphology",
    },
    {
      name: t("pf"),
      head: "Isabayev Abdulaziz Qodir ugli",
      slug: "pathology",
    },
    {
      name: t("tkbf"),
      head: "To’xtamatova Shahzoda Sodiqjon qizi",
      slug: "medical-and-biological-chemistry-pharmacology",
    },
    {
      name: t("xtf"),
      head: "Vakkosov Mukhammad Xabibovich",
      slug: "foreign-languages",
    },
    {
      name: t("xf"),
      head: "Vakkosov Mukhammad Xabibovich",
      slug: "surgery",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">{t("name")}</th>
              <th className="text-left p-3">{t("teacher")}</th>
              <th className="text-left p-3">{/* Empty for button */}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {departments.map((dept, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3">{dept.name}</td>
                <td className="p-3">{dept.head}</td>
                <td className="p-3">
                  <Link
                    href={`/pages/departments/${dept.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {t("details")}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentsTable;
