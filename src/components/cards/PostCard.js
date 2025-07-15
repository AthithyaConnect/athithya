"use client";

import Image from "next/image";
import { ChatCircle, UserPlus, MapPin } from "phosphor-react";

export default function PostCard({
  user = {
    name: "Abhinav",
    avatar: "https://i.pravatar.cc/100?img=12",
    postedAt: "3 days ago",
  },
  title = "",
  quote = "",
  content = "",
  media = [], // array of { type: 'image' | 'video', url: '...' }
}) {
  return (
    <div className="max-w-md p-4 mx-auto space-y-3 bg-white shadow-sm rounded-xl">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div>
          <div className="font-semibold text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">Posted {user.postedAt}</div>
        </div>
      </div>

      {/* Title */}
      {title && (
        <div className="relative overflow-hidden rounded-xl h-36">
          <Image
            src={media[0]?.url || ""}
            alt="cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="px-2 text-lg font-bold text-center text-white">
              {title}
            </h2>
          </div>
        </div>
      )}

      {/* Quote */}
      {quote && (
        <div className="p-3 text-sm font-medium text-center text-white bg-green-900 rounded-xl">
          &ldquo;{quote}&rdquo;
        </div>
      )}

      {/* Grid Images & Video */}
      <div className="grid grid-cols-2 gap-2">
        {media.slice(1, 5).map((item, idx) =>
          item.type === "image" ? (
            <div key={idx} className="overflow-hidden rounded-xl">
              <Image
                src={item.url}
                alt={`media-${idx}`}
                width={500}
                height={500}
                className="object-cover w-full h-full aspect-square"
              />
            </div>
          ) : (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl aspect-square"
            >
              <Image
                src={item.thumbnail}
                alt="video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      {/* Story Content */}
      {content && (
        <div className="p-4 text-sm leading-relaxed text-white bg-green-900 rounded-xl">
          &lt;{content}&gt;
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-around pt-2">
        <ChatCircle size={24} className="text-gray-700" />
        <UserPlus size={24} className="text-gray-700" />
        <MapPin size={24} className="text-gray-700" />
      </div>
    </div>
  );
}
