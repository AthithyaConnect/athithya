"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function StaggeredImageGrid() {
  const [images, setImages] = useState(Array(6).fill(null));
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (index) => {
    setSelectedIndex(index);
    document.getElementById(`file-${index}`).click();
  };

  return (
    <div className="grid max-w-md grid-cols-2 gap-3 p-4 mx-auto">
      {images.map((img, idx) => (
        <div
          key={idx}
          onClick={() => triggerFileInput(idx)}
          className={`relative bg-gray-100  overflow-hidden flex items-center justify-center cursor-pointer
            ${idx === 0 ? "row-span-2" : ""}
            ${idx === 3 ? "col-span-2" : ""}
            aspect-square`}
        >
          <input
            type="file"
            accept="image/*"
            id={`file-${idx}`}
            className="hidden"
            onChange={(e) => handleImageChange(e, idx)}
          />

          {img ? (
            <Image
              src={img}
              alt={`uploaded-${idx}`}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-2xl text-gray-500">＋</span>
          )}
        </div>
      ))}
    </div>
  );
}
