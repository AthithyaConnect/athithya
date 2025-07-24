"use client";

import { useState } from "react";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const GridItem = ({ image, index, moveImage, handleImageChange }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "image",  
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "image",
    hover: (item) => {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="relative flex items-center justify-center w-full overflow-hidden border border-gray-300 aspect-square "
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {image ? (
        <img
          src={URL.createObjectURL(image)}
          alt={`uploaded-${index}`}
          className="object-cover w-full h-full"
        />
      ) : (
        <label className="text-gray-400 cursor-pointer">
          +
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleImageChange(e, index)}
          />
        </label>
      )}
    </div>
  );
};

export default function AddPostGrid() {
  const [gridSize, setGridSize] = useState(4);
  const [images, setImages] = useState(Array(gridSize).fill(null));

  const handleGridSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setGridSize(newSize);
    setImages(Array(newSize).fill(null));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const moveImage = (fromIndex, toIndex) => {
    const updated = [...images];
    const temp = updated[fromIndex];
    updated[fromIndex] = updated[toIndex];
    updated[toIndex] = temp;
    setImages(updated);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Grid Size:</label>
        <select
          value={gridSize}
          onChange={handleGridSizeChange}
          className="px-3 py-1 border rounded-md"
        >
          {[4, 6, 8, 10, 12].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((img, index) => (
            <GridItem
              key={index}
              image={img}
              index={index}
              moveImage={moveImage}
              handleImageChange={handleImageChange}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
}
