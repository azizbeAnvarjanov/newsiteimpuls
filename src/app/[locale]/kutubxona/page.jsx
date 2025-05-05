"use client";
import { db } from "@/app/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Sheet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import * as XLSX from "xlsx"; // Excel fayllarni o‘qish uchun

const Kutubxona = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksList);
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
  );
  // Excel faylini o'qish va kolleksiyaga yuklash
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      toast.error("Fayl tanlanmadi!");
      return;
    }

    setLoading(true);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data); // Excel faylni o‘qish
      const sheetName = workbook.SheetNames[0]; // Birinchi varaqqa murojaat
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Excelni JSON ga aylantirish

      // Jihozlarni Firestore'ga yuklash
      const equipmentsCollection = collection(db, "books");
      const uploadPromises = jsonData.map(async (item) => {
        // `item` Excel faylidagi har bir satrni anglatadi
        const equipment = {
          created_at: item.created_at || "Noma’lum",
          name: item.name || "Noma’lum",
          year: item.year || "Noma’lum",
          link: item.link || "Noma’lum",
          author: item.author || "Noma’lum",
        };

        // Jihozni Firestore'ga yuklash
        await addDoc(equipmentsCollection, equipment);
      });

      await Promise.all(uploadPromises); // Yuklashni yakunlash
      toast.success("Jihozlar muvaffaqiyatli yuklandi!");
    } catch (error) {
      console.error("Faylni yuklashda xatolik:", error);
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  // Fayl tanlash oynasini ochish uchun
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!books) {
    return <>loading..</>;
  }

  return (
    <div className="excel-import p-10">
      {/* <div className="excel-import">
        <Button onClick={handleButtonClick} disabled={loading}>
          Import <Sheet />
        </Button>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: "none" }} // Fayl tanlash oynasi yashirin bo‘ladi
        />
        {loading && <p>Yuklanmoqda...</p>}
      </div> */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-2xl">IMPULS ARM</h1>
        <Input
          type="text"
          placeholder="Qidirish..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-64 border p-2 rounded-md"
        />
      </div>

      {loading && <p>Yuklanmoqda...</p>}
      <div className="grid grid-cols-4 items-center justify-center gap-5">
        {filteredBooks.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="book transition-all w-[250px] h-[320px] mx-auto relative"
          >
            <p className="absolute z-10 left-12 text-sm top-12 w-[180px]">
              {item.year}
            </p>
            <p className="absolute z-10 left-12 text-sm top-[70px] w-[180px">
              {item.author}
            </p>
            <p className="absolute z-10 bottom-12 text-sm left-12 w-[180px] font-bold">
              {item.name}
            </p>
            <img
              src={"/book.png"}
              className="book-image transition-all w-full h-full"
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Kutubxona;
