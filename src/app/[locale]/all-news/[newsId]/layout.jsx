import React from "react";
import LatestNewsSider from "../../../(customComponents)/LatestNewsSider";

const NewsDetailsLayout = ({ children }) => {
  return (
    <div className="p-2 md:p-5 xl:flex items-start gap-5">
      {children}
      <div className="border xl:w-[25%] w-full xl:min-h-[100vh] rounded shadow-xl p-5">
        <LatestNewsSider />
      </div>
    </div>
  );
};

export default NewsDetailsLayout;
