"use client";
import React from "react";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Eye, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@/components/ui/skeleton";

const LatestNewsSider = ({ collectionName, path }) => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        // Firestore'dan yangiliklarni olish
        const newsCollection = collection(db, collectionName);
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
    return (
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1">
        <div className="h-[25vh] xl:h-[30vh] w-full border rounded-md relative overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="h-[25vh] xl:h-[30vh] w-full border rounded-md relative overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="h-[25vh] xl:h-[30vh] w-full border rounded-md relative overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="h-[25vh] xl:h-[30vh] w-full border rounded-md relative overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1">
      {latestNews.map((item) => (
        <Link
          href={`/${path}/${item.id}`}
          key={item.id}
          className="h-[25vh] xl:h-[30vh] w-full border rounded-md relative overflow-hidden"
        >
          <img
            src={item.bannerImage}
            alt={item[getLocalizedField("title")]}
            className="object-cover w-full h-full"
            width={500}
            height={300}
            priority
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 p-3 flex flex-col justify-between">
            <p className="text-white text-md">{item.date}</p>
            <p className="news-description text-md tracking-tight text-white">
              {item[getLocalizedField("title")]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LatestNewsSider;
