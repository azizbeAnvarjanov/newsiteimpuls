"use client";
import Link from "next/link";
import React from "react";

const PlatformLink = () => {
  return (
    <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer">
      <Link className="md:flex hidden" href="https://student.impulsmi.uz">
        HEMIS
      </Link>
      <Link className="md:flex hidden" href="https://learn.impulsmi.uz">
        Ta&apos;lim platformasi
      </Link>
    </div>
  );
};

export default PlatformLink;
