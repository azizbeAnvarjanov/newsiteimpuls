import LatestNewsSider from "@/app/(customComponents)/LatestNewsSider";
import React from "react";

const PagesLayout = ({ children }) => {
  return (
    <div className="xl:flex pattern items-start gap-5 px-3 py-5 space-y-5 md:space-y-0 pt-40">
      <div className="w-full xl:w-[75%] border p-5 min-h-[100vh] rounded shadow-xl backdrop-blur-xl z-10">
        {children}
      </div>
      <div className="border xl:w-[25%] w-full xl:min-h-[100vh] rounded shadow-xl p-5 bg-white">
        <LatestNewsSider collectionName="news" path="all-news"/>
      </div>
    </div>
  );
};

export default PagesLayout;
