"use client";
import Image from "next/image";

const categories = [
  { name: "Rooms", image: "/room.png" },
  { name: "Food", image: "/food.png" },
  { name: "Tour Guide", image: "/tour.png" },
];

export default function CategorySelector({ onSelect }) {
  return (
    <div className="flex justify-around ">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect?.(cat.name)}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 overflow-hidden rounded-[22px] ">
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm mt-1">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
