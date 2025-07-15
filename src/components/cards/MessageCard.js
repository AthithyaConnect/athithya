"use client";
import Image from "next/image";
import clsx from "clsx";

export default function MessageCard({
  avatar,
  message,
  time,
  isOnline,
  isRead,
  name = "",
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-3">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Avatar with online dot */}
        <div className="relative w-12 h-12">
          <Image
            src={avatar}
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          {/* Online dot */}
          <span
            className={clsx(
              "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
              isOnline ? "bg-green-500" : "bg-gray-400",
            )}
          />
        </div>

        {/* Message Content */}
        <div>
          {name && (
            <div className="font-medium text-sm text-gray-800">{name}</div>
          )}
          <div className="text-gray-700 text-sm">{message}</div>
        </div>
      </div>

      {/* Right Side: Time + Read Indicator */}
      <div className="flex flex-col items-end gap-1">
        <div className="text-xs text-gray-500">{time}</div>
        {!isRead && (
          <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
        )}
      </div>
    </div>
  );
}
