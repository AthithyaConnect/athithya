"use client";
import Image from "next/image";
import { MapPin, Star, Heart } from "phosphor-react";
import { useRouter } from "next/navigation";

export default function HostCard({ title, address, rating, price, imageUrl }) {
  const router = useRouter();
  return (
    <div onClick={()=> router.push(`/u/explore/${title}`)}  className="flex gap-3 mt-3 rounded-xl">
      <div className="relative h-32 overflow-hidden w-28 rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
        <div className="absolute flex items-center justify-center p-2 rounded-full bg-black/50 top-1 backdrop-blur-xs right-1 w-fit h-fit">
          <Heart className="" size={24} color="white" weight="regular" />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 text-sm">
        <div className="font-semibold line-clamp-1">{title}</div>
        <div className="flex items-center text-xs text-gray-500 line-clamp-1">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
        <div className="flex items-center mt-1 text-xs">
          <Star
            size={14}
            className="mr-1 text-green-600"
            weight="fill"
            color="green"
          />
          {rating}
        </div>
        <div className="mt-1 text-base font-bold">
          ₹{price}{" "}
          <span className="text-sm font-normal text-gray-500">for 1 night</span>
        </div>
      </div>
    </div>
  );
}
