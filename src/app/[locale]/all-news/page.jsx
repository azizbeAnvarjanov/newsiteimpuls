"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";

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
    <div>
      <h1>Hamma Yangiliklar</h1>
      {news.length === 0 ? (
        <p>Hozircha yangiliklar yoq.</p>
      ) : (
        <div>
          {news.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h2>{item[getLocalizedField("title")]}</h2>
              <p>{item[getLocalizedField("description")]}</p>
              <p><strong>Sana:</strong> {item.date}</p>
              <img
                src={item.bannerImage}
                alt={item[getLocalizedField("title")]}
                style={{ width: "100%", height: "auto" }}
              />
              <div>
                {item.additionalImages && item.additionalImages.length > 0 ? (
                  item.additionalImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Qo'shimcha rasm ${index + 1}`}
                      style={{ width: "100px", height: "100px", margin: "5px" }}
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
  );
}

export default AllNews;
