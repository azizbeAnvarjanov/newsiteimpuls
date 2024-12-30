import Hero from "../(customComponents)/Hero";
import Carusel from "../(customComponents)/Carusel";
import LatestNews from "../(customComponents)/LatestNews";
import StatsSection from "../(customComponents)/StatsSection";
import CaruselStudents from "../(customComponents)/CaruselStudents";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("News");
  const latestNews = t("latest-news");
  const viewAllNews = t("view-all-news");

  return (
    <div>
      <Hero />
      <Carusel />
      <LatestNews latestNewsTitle={latestNews} viewAllNews={viewAllNews} />
      <StatsSection />
      <CaruselStudents />
    </div>
  );
}
