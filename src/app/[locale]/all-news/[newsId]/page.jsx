"use client";
import { db } from "@/app/firebase";
import { doc, getDoc } from "firebase/firestore";
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

  if (!news) return <div>Loading...</div>;

  return (
    <div className="p-10">
      {news.date}
      <h1>{news[getLocalizedField("title")]}</h1>
      <div className="bg-red-500 w-[200px] h-[200px] relative">
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
