"use client";
import { db } from "@/app/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { CalendarDays, Eye, Copy, Printer } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AutoImageCarousel from "../../../(customComponents)/NewsImagesCarusel";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import { Skeleton } from "@/components/ui/skeleton";

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const locale = useLocale();

  useEffect(() => {
    const newsDocRef = doc(db, "news", newsId);

    // Yangilikni Firestore’dan real-time olish va ko'ruvlar sonini oshirish
    const unsubscribe = onSnapshot(newsDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setNews(data);

        // Barcha rasm URL-larni birlashtirish
        setAllImages([data.bannerImage, ...(data.additionalImages || [])]);
      }
    });

    const incrementViews = async () => {
      const viewedNews = JSON.parse(localStorage.getItem("viewedNews")) || {};

      if (!viewedNews[newsId]) {
        viewedNews[newsId] = true;
        localStorage.setItem("viewedNews", JSON.stringify(viewedNews));

        await updateDoc(newsDocRef, {
          views: increment(1),
        });
      }
    };

    incrementViews();

    return () => unsubscribe();
  }, [newsId]);

  const messages = {
    uz: "Havola nusxalandi!",
    ru: "Ссылка скопирована в буфер обмена!",
    en: "Link copied to clipboard!",
  };

  const getLocalizedField = (field) => {
    return `${field}_${locale}`; // Masalan: "title_uz", "title_ru", "title_en"
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(messages[locale]);
  };

  const handlePrint = () => {
    const printContents = document.getElementById("news-details").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Sahifani qayta yuklash
  };

  if (!news)
    return (
      <div className="w-full xl:w-[75%] border p-5 min-h-[100vh] rounded shadow-xl">
        <div className="w-full flex items-center justify-between">
          <Skeleton className="w-[100px] h-[12px] rounded-full" />
          <div className="flex items-center gap-1 md:gap-2">
            <Skeleton className="w-[50px] h-[35px] rounded-md" />
            <Skeleton className="w-[50px] h-[35px] rounded-md" />
          </div>
        </div>
        <h1 className="text-xl font-bold my-3">
          <Skeleton className="w-[70%] h-[15px] rounded-full" />
        </h1>
        <div className="w-full h-[30vh] md:h-[50vh] xl:h-[80vh] 2xl:h-[100vh] relative rounded-lg overflow-hidden mb-4">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="space-y-3">
          <Skeleton className="w-[70%] h-[15px] rounded-full" />
          <Skeleton className="w-[80%] h-[15px] rounded-full" />
          <Skeleton className="w-[60%] h-[15px] rounded-full" />
          <Skeleton className="w-[50%] h-[15px] rounded-full" />
        </div>
      </div>
    );

  return (
    <div className="w-full xl:w-[75%] xl:mb-0 mb-4 border p-5 xl:min-h-[100vh] rounded shadow-xl">
      <div id="news-details">
        <div className="w-full flex items-center justify-between">
          <p className="flex items-center gap-1 md:gap-2 font-bold text-[--brand-blue]">
            <CalendarDays
              className="text-[--brand-blue] text-[22px]"
              size="22px"
            />
            {news.date}
          </p>
          <div className="flex items-center gap-1 md:gap-2">
            <Button className="flex items-center gap-3 bg-[--brand-blue] px-3 rounded-md">
              <Eye className="text-white" size="25px" />
              <strong className="text-white">{news.views || 0}</strong>
            </Button>
            <Button
              onClick={handleCopyLink}
              className=" text-white py-2 px-4 rounded flex items-center gap-2"
            >
              <Copy size="30px" />
            </Button>
            <Button
              onClick={handlePrint}
              className="bg-[--brand-orange] 0 text-white py-2 px-4 rounded flex items-center gap-2"
            >
              <Printer size="18px" />
            </Button>
          </div>
        </div>

        <h1 className="text-xl font-bold my-3">
          {news[getLocalizedField("title")]}
        </h1>
        {/* {allImages.length > 1 && (
          <AutoImageCarousel images={allImages} interval={5000} />
        )} */}
        {allImages.length > 1 ? (
          <>
            <AutoImageCarousel images={allImages} interval={5000} />
          </>
        ) : (
          <>
            <div className="w-full h-[30vh] md:h-[50vh] xl:h-[80vh] 2xl:h-[100vh] relative rounded-lg overflow-hidden mb-4">
              <Image
                fill
                src={news.bannerImage}
                alt={news[getLocalizedField("title")]}
                className="object-cover"
              />
            </div>
          </>
        )}

        <p className="description_news">
          {news[getLocalizedField("description")]}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
