"use client";

import React, { useEffect, useRef } from "react";
import {
  ArrowLeft,
  Phone,
  VideoCamera,
  DotsThreeVertical,
  PaperPlaneTilt,
  Image as ImageIcon,
  MapPin,
  Notification,
} from "phosphor-react";
import { Avatar, Badge } from "@heroui/react";

// Sample chat data (replace with API response in real app)
const chatData = [
  {
    id: 1,
    sender: "Michael",
    type: "text",
    content: "Prepared some donuts for you, Bet you'll love them",
    timestamp: "11:59",
  },
  {
    id: 2,
    sender: "Me",
    type: "text",
    content: "Great 🔥🔥",
    timestamp: "11:59",
  },
  { id: 3, type: "divider", content: "Today" },
  {
    id: 4,
    sender: "Michael",
    type: "text",
    content: "Let's grab lunch together soon, it's been a while",
    timestamp: "12:02",
  },
  {
    id: 5,
    sender: "Me",
    type: "text",
    content: "I found a new café that has the best coffee in town",
    timestamp: "12:03",
  },
  {
    id: 6,
    sender: "Michael",
    type: "image",
    content:
      "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747428.jpg",
    timestamp: "12:03",
  },
];

const Message = ({ message }) => {
  const isMe = message.sender === "Me";

  if (message.type === "divider") {
    return (
      <div className="flex justify-center my-4">
        <span className="text-xs text-gray-500">{message.content}</span>
      </div>
    );
  }

  if (message.type === "image") {
    return (
      <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}>
        <div className="flex flex-col">
          <div
            className={`flex items-center ${isMe ? "flex-row-reverse" : ""}`}
          >
            <div className="max-w-[70vw] md:max-w-[40vw] lg:max-w-[30vw] rounded-xl overflow-hidden shadow-md">
              <img
                src={message.content}
                alt="Chat"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
          <span
            className={`mt-1 text-xs text-gray-400 ${isMe ? "text-right" : "text-left"}`}
          >
            {message.timestamp}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex flex-col">
        <div
          className={`p-2 rounded-2xl text-sm  max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] ${
            isMe
              ? "bg-primary text-white rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none"
          }`}
        >
          <p>{message.content}</p>
        </div>
        <span
          className={`mt-1 text-xs text-gray-400 ${isMe ? "text-right" : "text-left"}`}
        >
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default function ChatScreen() {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <ArrowLeft size={24} className="text-gray-600 cursor-pointer" />
          <div className="flex items-center gap-3">
            <Badge
              color="success"
              shape="circle"
              content=""
              placement="bottom-right"
              size="sm"
            >
              <Avatar
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671145.jpg"
                alt="Michael's Avatar"
                size="md"
                className="w-10 h-10"
              />
            </Badge>

            <div>
              <h1 className="font-semibold text-md">Michael</h1>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={22} className="text-gray-600 cursor-pointer" />
          <VideoCamera size={22} className="text-gray-600 cursor-pointer" />
          <DotsThreeVertical
            size={22}
            className="text-gray-600 cursor-pointer"
          />
        </div>
      </header>

      {/* Chat messages */}
      <main ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
        {chatData.map((message) => (
          <Message key={message.id || message.content} message={message} />
        ))}
      </main>

      {/* Input area */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center gap-2 p-4 bg-white border-t border-gray-200 shadow-md">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <PaperPlaneTilt
            size={24}
            weight="fill"
            className="absolute text-blue-500 -translate-y-1/2 cursor-pointer right-4 top-1/2"
          />
        </div>
        <ImageIcon size={24} className="text-gray-500 cursor-pointer" />
        <MapPin size={24} className="text-gray-500 cursor-pointer" />
      </footer>
    </div>
  );
}
