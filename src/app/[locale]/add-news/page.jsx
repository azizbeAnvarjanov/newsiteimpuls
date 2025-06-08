"use client";
import React, { useEffect } from "react";
import AddNews from "../../(customComponents)/AddNews";

const AddNewsPage = () => {
  useEffect(() => {
    fetch('/api/log-visit', {
      method: 'POST'
    });
  }, []);
  return (
    <div className="py-5">
      <AddNews />
    </div>
  );
};

export default AddNewsPage;
