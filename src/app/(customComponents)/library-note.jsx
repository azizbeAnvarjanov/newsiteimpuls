// app/kutubxona/page.jsx yoki components/Kutubxona.jsx
import React from "react";

const LibraryNote = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📚 Kutubxona</h1>

      <p className="text-lg">
        <strong>Institut kutubxonasi</strong> talabalar, o‘qituvchilar va ilmiy
        xodimlar uchun bilim va axborot manbai sifatida xizmat qiladi.
        Kutubxonada turli yo‘nalishlardagi o‘quv, ilmiy va badiiy adabiyotlar,
        davriy nashrlar, elektron resurslar hamda malumotnomalar jamlangan.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mb-2">
          📖 Kutubxonadan foydalanish tartib-qoidalari
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Kutubxonadan foydalanish huquqiga institut talabalari,
            o‘qituvchilari va xodimlari ega.
          </li>
          <li>
            Kitob va materiallarni olish uchun talabalar shaxsiy guvohnoma
            orqali ro‘yxatdan o‘tadi.
          </li>
          <li>
            Kitoblar muayyan muddatga beriladi; muddat tugagach, uni uzaytirish
            talab etiladi.
          </li>
          <li>
            Materiallarga ehtiyotkorlik bilan munosabatda bo‘lish shart.
            Yirtish, yozish yoki yo‘qotish holatlari moddiy javobgarlikka olib
            keladi.
          </li>
          <li>Jimlik saqlash va umumiy tartibga rioya qilish majburiydir.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">
          💾 Elektron va axborot resurslari
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>📘 Elektron kitoblar va jurnallar bazasi</li>
          <li>🌐 Onlayn ilmiy jurnallar va maqolalarga kirish imkoni</li>
          <li>
            🖥️ Kompyuterlar va internet aloqasi orqali axborot izlash imkoniyati
          </li>
          <li>📎 Mavzuga oid ma’lumotlar bazasi va ma’lumotnomalar</li>
        </ul>
      </div>

      <p className="text-lg">
        Kutubxona jamoasi sizga ilmiy izlanishlar, tahlil ishlari va o‘qish
        jarayonida doimiy yordam berishga tayyor. Sizdan faqat foydalanish
        qoidalariga rioya qilish va resurslardan samarali foydalanish talab
        etiladi.
      </p>
    </div>
  );
};

export default LibraryNote;
