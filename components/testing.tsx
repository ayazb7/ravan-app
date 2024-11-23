"use client";

import React, { useEffect, useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
type LayoutGridDemoProps = {
  photosDir: string | undefined;
};
export function LayoutGridDemo({ photosDir }: LayoutGridDemoProps) {
  const [photos, setPhotos] = useState<string[]>([]); // State to store photos
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch photos from the API
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `/api/projects?dieRelativeToPublicFolder=${photosDir}`
        ); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          console.error("Failed to fetch photos:", await response.json());
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // Dynamically generate cards based on fetched photos
  const cards = photos.map((photo, index) => ({
    id: index + 1,
    content: "",
    className: index % 2 === 0 ? "md:col-span-2" : "col-span-1", // Alternate layout
    thumbnail: photo, // Use the API-provided photo URL
  }));

  return (
    <div className="h-screen py-20 w-full">
      {loading ? (
        <p className="text-center">Loading...</p> // Display a loading state
      ) : photos.length > 0 ? (
        <LayoutGrid cards={cards} />
      ) : (
        <p className="text-center">No photos found.</p> // Display if no photos are found
      )}
    </div>
  );
}
