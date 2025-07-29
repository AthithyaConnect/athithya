"use client";
import Image from "next/image";

const categories = [
  { name: "Local Stays", image: "/tour.png" },
  { name: "Local Cusines", image: "/food.png" },
  { name: "Rooms", image: "/room.png" },
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
          <span className="mt-1 text-sm">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
