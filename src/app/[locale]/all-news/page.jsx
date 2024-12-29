"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function AllNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Firestore'dan yangiliklarni olish
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id, // Har bir hujjatning ID sini qo'shamiz
          ...doc.data(),
        }));

        setNews(newsList);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Malumotlar yuklanmoqda...</p>;
  }

  // Faol tildagi yangiliklarni ko'rsatish uchun kerakli maydonlarni aniqlash
  const getLocalizedField = (field) => {
    return `${field}_${locale}`; // Masalan: "title_uz", "title_ru", "title_en"
  };

  return (
    <>
      <div className="w-full lg:py-40">
        <div className="container mx-auto flex flex-col gap-14">
          <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Latest articles
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.length === 0 ? (
              <>Hozircha yngiliklar yoq</>
            ) : (
              <>
                {news.map((item) => (
                  <Link href={`/${locale}/all-news/${item.id}`} className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                    <div className="bg-muted rounded-md aspect-video relative relative rounded-lg overflow-hidden">
                      <Image
                        fill
                        src={item.bannerImage}
                        alt={item[getLocalizedField("title")]}
                        className="object-cover"
                      />
                    </div>
                    {item.date}
                    <h3 className="news-description text-xl tracking-tight">
                    {item[getLocalizedField("title")]}
                    </h3>
                    <p className="news-description text-muted-foreground text-base">
                    {item[getLocalizedField("description")]}
                    </p>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <h1>Hamma Yangiliklar</h1>
        {news.length === 0 ? (
          <p>Hozircha yangiliklar yoq.</p>
        ) : (
          <div>
            {news.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px",
                  padding: "10px",
                }}
              >
                <p>
                  <strong></strong> {item.date}
                </p>
                <h2>{item[getLocalizedField("title")]}</h2>
                <div className="bg-red-500 w-[200px] h-[200px] relative">
                  <Image
                    fill
                    src={item.bannerImage}
                    alt={item[getLocalizedField("title")]}
                    className="object-cover"
                  />
                </div>
                <p className="description_news">
                  {item[getLocalizedField("description")]}
                </p>
                <div>
                  {item.additionalImages && item.additionalImages.length > 0 ? (
                    item.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Qo'shimcha rasm ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                        }}
                      />
                    ))
                  ) : (
                    <p>Qoshimcha rasmlar yoq.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AllNews;
