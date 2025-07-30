"use client";
import React from "react";
import Link from "next/link";

export default function ImpulsVacancyPage() {
  return (
    <div className="min-h-screen py-6 sm:px-2 lg:px-8">
      <div className="max-w-2xl sm:max-w-3xl mx-auto bg-white rounded-2xl sm:p-6 space-y-5 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 text-center leading-snug">
          Impuls Tibbiyot Instituti – Yangi imkoniyatlar makoni!
        </h1>

        <p className="text-gray-700 text-base sm:text-lg">
          ⚡️ <strong>Impuls Tibbiyot Instituti</strong> quyidagi ta&apos;lim
          yo&apos;nalishlari bo&apos;yicha professor-o&apos;qituvchilarni ishga
          taklif qiladi:
        </p>

        <ul className="list-disc list-inside text-gray-800 font-medium space-y-1 pl-2 sm:pl-4">
          <li>Dermatologiya</li>
          <li>Endokrinologiya</li>
          <li>Xirurgiya</li>
          <li>Travmatologiya</li>
          <li>Radiologiya</li>
          <li>Sud-med-expertiza</li>
          <li>Stomatologiya</li>
          <li>Ichki kasalliklar</li>
          <li>Ichki kasalliklar propedevtikasi</li>
          <li>Bolalar kasalliklari propedevtikasi</li>
        </ul>

        <div className="text-gray-700 space-y-3 text-base sm:text-lg">
          <p className="font-semibold text-blue-700">🎯 Sizdan kutamiz:</p>
          <ul className="list-decimal list-inside space-y-1 pl-2 sm:pl-4">
            <li>O&apos;z vazifangizga mas&apos;uliyat bilan yondashish</li>
            <li>Magistr darajasi yoki unga teng diplom</li>
            <li>Kompyuter savodxonligi</li>
          </ul>

          <p className="font-semibold text-blue-700">💵 Biz taklif qilamiz:</p>
          <ul className="list-decimal list-inside space-y-1 pl-2 sm:pl-4">
            <li>Raqobatbardosh oylik maosh</li>
            <li>Professional va do&apos;stona jamoa</li>
            <li>Eng zamonaviy va jahon standartlariga mos sharoitlar</li>
            <li>
              Karyeraviy o&apos;sish uchun to&apos;liq qo&apos;llab-quvvatlash
            </li>
            <li>
              Chet elda va O&apos;zbekistonda institut hisobidan malaka oshirish
            </li>
          </ul>
        </div>

        <div className="text-center space-y-2">
          <Link
            href="https://forms.gle/cBSPRwwtEtVQzKgk9"
            target="_blank"
            className="block sm:inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            📝 Ariza topshirish
          </Link>
          <p className="text-sm text-gray-600">
            💬 Aloqa:{" "}
            <span className="text-blue-700 font-medium">@ImpulsHRM</span>
          </p>
        </div>
      </div>
    </div>
  );
}
