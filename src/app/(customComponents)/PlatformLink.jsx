"use client";
import React from "react";

const PlatformLink = ({ text }) => {
  return (
    <div
      className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer"
      onClick={() => (window.location.href = "https://learn.impulsmi.uz")}
    >
      {text}
    </div>
  );
};

export default PlatformLink;
