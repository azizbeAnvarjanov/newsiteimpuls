"use client";
import { useParams } from "next/navigation";
import React from "react";
import KafedraPage from "@/app/(customComponents)/KafedraPage";

const SlugPage = () => {
  const params = useParams();
  const deptId = params.deptId;
  return (
    <div>
      <KafedraPage path={deptId} />
    </div>
  );
};

export default SlugPage;
