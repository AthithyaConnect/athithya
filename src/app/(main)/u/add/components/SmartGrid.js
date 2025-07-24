"use client";

import { useState } from "react";
import clsx from "clsx";

// Define templates
const templates = {
  "1:1": {
    4: [
      [
        { colSpan: 3, rowSpan: 3},
        { colSpan: 3, rowSpan: 3},
        { colSpan: 2, rowSpan: 3},
        { colSpan: 2, rowSpan: 3},
      ],
      [
        { colSpan: 2, rowSpan: 1 },
        { colSpan: 2, rowSpan: 1 },
        { colSpan: 1, rowSpan: 1 },
        { colSpan: 3, rowSpan: 1 }
      ]
    ]
  },
  "4:3": {
    6: [
      [
        { colSpan: 1, rowSpan: 1 },
      ]
    ]
  }
};

export default function SmartGridUpload() {
  const [aspect, setAspect] = useState("1:1");
  const [gridSize, setGridSize] = useState(4);
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [images, setImages] = useState(Array(4).fill(null));
  const [active, setActive] = useState(null);

  const layout = templates[aspect][gridSize][layoutIndex];

  const handleImageChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleTap = (index) => {
    if (active === null) {
      setActive(index);
    } else {
      const newImages = [...images];
      [newImages[active], newImages[index]] = [
        newImages[index],
        newImages[active]
      ];
      setImages(newImages);
      setActive(null);
    }
  };

  const changeAspect = (newAspect) => {
    setAspect(newAspect);
    const firstSize = Object.keys(templates[newAspect])[0];
    changeGridSize(parseInt(firstSize));
  };

  const changeGridSize = (size) => {
    setGridSize(size);
    setImages(Array(size).fill(null));
    setLayoutIndex(0);
    setActive(null);
  };

  return (
    <div className="space-y-4">
      {/* Aspect Ratio Selector */}
      <div>
        <label className="block mb-1 font-medium">Aspect Ratio:</label>
        <select
          className="px-3 py-1 border rounded-md"
          value={aspect}
          onChange={(e) => changeAspect(e.target.value)}
        >
          {Object.keys(templates).map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>

      {/* Grid Size Selector */}
      <div>
        <label className="block mb-1 font-medium">Number of Images:</label>
        <select
          className="px-3 py-1 border rounded-md"
          value={gridSize}
          onChange={(e) => changeGridSize(parseInt(e.target.value))}
        >
          {Object.keys(templates[aspect]).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Layout Variation Selector */}
      {templates[aspect][gridSize].length > 1 && (
        <div>
          <label className="block mb-1 font-medium">Layout Variation:</label>
          <select
            className="px-3 py-1 border rounded-md"
            value={layoutIndex}
            onChange={(e) => setLayoutIndex(parseInt(e.target.value))}
          >
            {templates[aspect][gridSize].map((_, index) => (
              <option key={index} value={index}>
                Layout {index + 1}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-4 auto-rows-[80px] gap-2">
        {layout.map((slot, i) => (
          <div
            key={i}
            onClick={() => handleTap(i)}
            className={clsx(
              "relative border overflow-hidden bg-gray-100 flex items-center justify-center",
              `col-span-${slot.colSpan} row-span-${slot.rowSpan}`,
              active === i ? "ring-4 ring-green-500" : ""
            )}
          >
            {images[i] ? (
              <img
                src={URL.createObjectURL(images[i])}
                alt={`img-${i}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <label className="text-sm text-gray-500 cursor-pointer">
                +
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, i)}
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
