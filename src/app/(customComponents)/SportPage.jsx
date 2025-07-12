import { useTranslations } from "next-intl";

export default function SportPage() {
  const t = useTranslations("Sport");

  return (
    <div className="px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">{t("title")}</h1>

      <section>
        <h2 className="text-xl font-semibold">{t("membership.title")}</h2>
        <p className="mt-2 text-gray-700">{t("membership.description")}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t("facilities.title")}</h2>
        <p className="mt-2 text-gray-700">{t("facilities.description")}</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>{t("facilities.items.football")}</li>
          <li>{t("facilities.items.basketball")}</li>
          <li>{t("facilities.items.volleyball")}</li>
          <li>{t("facilities.items.tennis")}</li>
          <li>{t("facilities.items.athletics")}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t("rules.title")}</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>{t("rules.items.access")}</li>
          <li>{t("rules.items.registration")}</li>
          <li>{t("rules.items.cleanliness")}</li>
        </ul>
      </section>

      <p className="mt-6 text-gray-700">{t("footer")}</p>
    </div>
  );
}
