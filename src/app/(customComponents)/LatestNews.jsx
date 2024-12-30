"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Eye, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const LatestNews = ({ latestNewsTitle, viewAllNews }) => {
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
    return (
      <div className="p-4 md:p-10 space-y-5">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Skeleton className="w-[80%] md:w-[20%] h-[20px]" />
          <div className="flex flex-col sm:flex-row gap-4 items-sart">
            <Skeleton className="w-full md:w-[180px] h-[30px] rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          <div className="space-y-3">
            <div className="h-[200px]">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-[150px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
          </div>
          <div className="space-y-3">
            <div className="h-[200px]">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-[150px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
          </div>
          <div className="space-y-3">
            <div className="h-[200px]">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-[150px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
          </div>
          <div className="space-y-3">
            <div className="h-[200px]">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-[150px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
          </div>
          <div className="space-y-3">
            <div className="h-[200px]">
              <Skeleton className="w-full h-full" />
            </div>
            <Skeleton className="w-[150px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
            <Skeleton className="w-[300px] h-[15px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-10">
      <div className=" mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            {latestNewsTitle}
          </h4>
          <Link href={`/${locale}/all-news`}>
            <Button className="gap-4 bg-[--brand-blue]">
              {viewAllNews} <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/all-news/${item.id}`}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
            >
              <div className="bg-muted rounded-md aspect-video relative mb-4 overflow-hidden">
                <Image
                  fill
                  src={item.bannerImage}
                  alt={item[getLocalizedField("title")]}
                  className="object-cover"
                />
              <div className="z-10 absolute top-3 left-3 flex items-center gap-2 justify-center rounded-md shadow-sm backdrop-blur-xl border text-white px-2">
                <Eye size="18px" /> {item.views || 0}
              </div>
              </div>
              <p className="text-sm text-muted-foreground">{item.date}</p>
              <h3 className="news-description text-xl tracking-tight">
                {item[getLocalizedField("title")]}
              </h3>
              <p className="news-description text-muted-foreground text-base">
                {item[getLocalizedField("description")]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
