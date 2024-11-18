"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

// Define the prop type
type LayoutGridDemoProps = {
  photos: string | undefined;
};

export function LayoutGridDemo({ photos }: LayoutGridDemoProps) {
  const cards = [
    {
      id: 1,
      content: "",
      className: "md:col-span-2",
      thumbnail: `/${photos}/1.jpg`,
    },
    {
      id: 2,
      content: "",
      className: "col-span-1",
      thumbnail: `/${photos}/2.jpg`,
    },
    {
      id: 3,
      content: "",
      className: "col-span-1",
      thumbnail: `/${photos}/3.jpg`,
    },
    {
      id: 4,
      content: "",
      className: "md:col-span-2",
      thumbnail: `/${photos}/4.jpg`,
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
