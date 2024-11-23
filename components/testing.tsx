"use client";

import React, { useEffect, useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
type LayoutGridDemoProps = {
  photosDir: string[];
};
export function LayoutGridDemo({ photosDir }: LayoutGridDemoProps) {
  const [photos, setPhotos] = useState<string[]>([]); // State to store photos
  const [loading, setLoading] = useState<boolean>(true);
  console.log(photosDir);
  // Dynamically generate cards based on fetched photos
  const cards = photosDir.map((photo, index) => ({
    id: index + 1,
    content: "",
    className: index % 2 === 0 ? "md:col-span-2" : "col-span-1", // Alternate layout
    thumbnail: photo, // Use the API-provided photo URL
  }));

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
