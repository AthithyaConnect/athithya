"use client";
import Image from "next/image";
import { MapPin, Star, Heart } from "phosphor-react";

export default function HostCard({ title, address, rating, price, imageUrl }) {
  return (
    <div className="flex gap-3  rounded-xl mt-3">
      <div className="relative w-28 h-32 rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
        <div className="p-2 rounded-full bg-black/50 absolute top-1 backdrop-blur-xs  right-1 w-fit h-fit flex items-center justify-center">
          <Heart className="" size={24} color="white" weight="regular" />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 text-sm">
        <div className="font-semibold line-clamp-1">{title}</div>
        <div className="flex items-center text-xs line-clamp-1 text-gray-500">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
        <div className="flex items-center text-xs mt-1">
          <Star
            size={14}
            className="text-green-600 mr-1"
            weight="fill"
            color="green"
          />
          {rating}
        </div>
        <div className="text-base font-bold mt-1">
          ₹{price}{" "}
          <span className="text-sm font-normal text-gray-500">for 1 night</span>
        </div>
      </div>
    </div>
  );
}
