"use client";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";

export default function MessageCard({
  id,
  avatar,
  message,
  time,
  isOnline,
  isRead,
  name = "",
}) {

  const router = useRouter();
  return (
    <div onClick={()=> router.push(`/u/inbox/${id}`)}  className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Avatar with online dot */}
        <div className="relative w-12 h-12">
    
          <Avatar
            src={avatar}
            alt="avatar"
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{ boxShadow: "0 0 0 2px white" }}
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
            <div className="text-sm font-medium text-gray-800">{name}</div>
          )}
          <div className="text-sm text-gray-700">{message}</div>
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
