import React from "react";
import LatestNewsSider from '../../../(customComponents)/LatestNewsSider'


const NewsDetailsLayout = ({ children }) => {
  return (
    <div className="p-5 flex items-start gap-5">
      {children}
      <div className="border w-[25%] min-h-[100vh] rounded shadow-xl p-5"><LatestNewsSider /></div>
    </div>
  );
};

export default NewsDetailsLayout;
