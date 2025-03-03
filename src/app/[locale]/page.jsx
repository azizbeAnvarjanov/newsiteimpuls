import Hero from "../(customComponents)/Hero";
import Carusel from "../(customComponents)/Carusel";
import LatestNews from "../(customComponents)/LatestNews";
import StatsSection from "../(customComponents)/StatsSection";
import CaruselStudents from "../(customComponents)/CaruselStudents";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("News");
  const latestNews = t("latest-news");
  const tadbirTaqvimi = t("tadbir-taqvimi");
  const viewAllNews = t("view-all-news");
  const c = useTranslations("Hamkor-tashkilotlar");
  const c_header = c("header");
  const c_text_1 = c("text-1");
  const c_text_2 = c("text-2");
  const c_text_3 = c("text-3");
  const c_text_4 = c("text-4");
  const c_text_5 = c("text-5");
  const c_text_6 = c("text-6");

  return (
    <div>
      <Hero />
      <Carusel
        t1={c_text_1}
        t2={c_text_2}
        t3={c_text_3}
        t4={c_text_4}
        t5={c_text_5}
        t6={c_text_6}
        header={c_header}
      />
      {/* <LatestNews
        latestNewsTitle={"Klub yangiliklari"}
        viewAllNews={viewAllNews}
        collectionName="club-news"
        path="club-news"
      /> */}

      <LatestNews
        latestNewsTitle={latestNews}
        viewAllNews={viewAllNews}
        path="all-news"
        collectionName="news"
      />
      <StatsSection />
      {/* <LatestNews
        latestNewsTitle={tadbirTaqvimi}
        viewAllNews={viewAllNews}
        collectionName="tadbir-news"
        path="tadbir-yangiliklari"
      /> */}
      <CaruselStudents />
    </div>
  );
}
