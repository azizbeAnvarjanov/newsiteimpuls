"use client";
import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
import { CalendarDays, Clock3, Eye } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const locale = useLocale();

  useEffect(() => {
    // Yangilikni Firestore’dan olish
    const fetchNews = async () => {
      const newsDoc = await getDoc(doc(db, "news", newsId));
      if (newsDoc.exists()) {
        setNews(newsDoc.data());
      }
    };

    fetchNews();
  }, [newsId]);

  // Faol tildagi yangiliklarni ko'rsatish uchun kerakli maydonlarni aniqlash
  const getLocalizedField = (field) => {
    return `${field}_${locale}`; // Masalan: "title_uz", "title_ru", "title_en"
  };

  if (!news)
    return (
      <div className="w-[75%] border p-5 min-h-[100vh] rounded shadow-xl">
        Loading...
      </div>
    );

  return (
    <div className="w-[75%] border p-5 min-h-[100vh] rounded shadow-xl">
      <div className="w-full flex items-center justify-between">
        <p className="flex items-center gap-2 font-bold text-[--brand-blue]">
          <CalendarDays
            className="text-[--brand-blue] text-[22px]"
            size="22px"
          />
          {news.date}
        </p>
        <p className="flex items-center gap-3 bg-[--brand-blue] py-2 px-3 rounded-md">
          <Eye className="text-white" size="22px" />
          <strong className="text-white">150</strong>
        </p>
      </div>
      <h1 className="text-xl font-bold my-3">
        {news[getLocalizedField("title")]}
      </h1>
      <div className="bg-red-500 w-full h-[100vh] relative rounded-lg overflow-hidden mb-4">
        <Image
          fill
          src={news.bannerImage}
          alt={news[getLocalizedField("title")]}
          className="object-cover"
        />
      </div>
      <p className="description_news">
        {news[getLocalizedField("description")]}
      </p>
    </div>
  );
};

export default NewsDetailPage;
