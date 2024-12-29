"use client";
import React from "react";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LatestNewsSider = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        // Firestore'dan yangiliklarni olish
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Yangiliklarni sanasi bo‘yicha tartiblash va 4 tasini olish
        const sortedNews = newsList
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4);

        setLatestNews(sortedNews);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  const getLocalizedField = (field) => `${field}_${locale}`; // Faol til bo‘yicha maydonni aniqlash

  if (loading) {
    return <p>Malumotlar yuklanmoqda...</p>;
  }
  return (
    <div className="grid gap-3">
      {latestNews.map((item) => (
        <Link
          href={`/${locale}/all-news/${item.id}`}
          key={item.id}
          className="h-[30vh] w-full border rounded-md relative overflow-hidden"
        >
          <Image
            fill
            src={item.bannerImage}
            alt={item[getLocalizedField("title")]}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 p-3">
            <p className="text-white text-sm">{item.date}</p>
            <p className="news-description text-sm tracking-tight text-white">
                {item[getLocalizedField("title")]}
              </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestNewsSider;
