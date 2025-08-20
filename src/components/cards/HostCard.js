"use client";
import Image from "next/image";
import { MapPin, Star, Heart } from "phosphor-react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function HostCard({
  title,
  address,
  rating,
  price,
  imageUrl,
  disableNavigation = false,
  showViewButton = false,
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        if (!disableNavigation) router.push(`/u/explore/${title}`);
      }}
      className="w-full overflow-hidden transition border border-gray-200 cursor-pointer rounded-xl hover:shadow-md"
    >
      <div className="relative w-full h-40">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        <div className="absolute p-2 rounded-full top-2 right-2 bg-black/50">
          <Heart size={20} color="white" weight="regular" />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-3 text-sm">
        <div className="font-semibold line-clamp-1">{title}</div>
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <MapPin size={14} className="mr-1" />
          <span className="line-clamp-1">{address}</span>
        </div>
        <div className="flex items-center mt-1 text-xs">
          <Star
            size={14}
            className="mr-1 text-green-600"
            color="green"
            weight="fill"
          />
          {rating}
        </div>
        <div className="mt-1 text-base font-bold">
          ₹{price}{" "}
          <span className="text-sm font-normal text-gray-500">for 1 night</span>
        </div>
        {showViewButton && (
          <Button
            color="primary"
            className="mt-2"
            onPress={() => {
              router.push(`/u/explore/${title}`);
            }}
          >
            View
          </Button>
        )}
      </div>
    </div>
  );
}
