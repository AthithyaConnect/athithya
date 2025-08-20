"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft, DotsThreeVertical, Image as ImageIcon, FilePlus, Camera,
  MapPin, PaperPlaneRight
} from "phosphor-react";
import { Avatar, Badge, Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";

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
    id: 9,
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
  {
    id: 7,
    sender: "Me",
    type: "text",
    content: "Wow, that looks amazing! Can't wait to try it out",
    timestamp: "12:04",
  },
  {
    id: 8,
    sender: "Michael",
    type: "text",
    content: "See you there!",
    timestamp: "12:05",
  },
];

const Message = ({ message }) => {
  const isMe = message.sender === "Me";
  const router = useRouter();

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
              <Image
                src={message.content}
                alt="Chat"
                width={800}
                height={800}
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
          <p className="text-sm md:text-md">{message.content}</p>
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
  const router = useRouter();
  const endRef = useRef(null);

  // scroll to bottom
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
    return () => cancelAnimationFrame(id);
  }, [chatData.length]);

  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between w-full px-2 py-4 border-b border-white shadow bg-white/50 backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          <Button onPress={() => router.back()} isIconOnly variant="light">
            <ArrowLeft size={24} className="text-gray-600 cursor-pointer" />
          </Button>
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
          <Button isIconOnly variant="light">
            <DotsThreeVertical size={24} className="text-gray-600 cursor-pointer" />
          </Button>
        </div>
      </header>

      {/* Chat messages */}
      <main
        ref={chatContainerRef}
        className="flex-1 w-full p-4 mx-auto overflow-y-auto lg:max-w-5/6"
      >
        {chatData.map((message) => (
          <Message key={message.id || message.content} message={message} />
        ))}
        <div ref={endRef} className="pb-20" />
      </main>

      {/* Input area */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center gap-2 p-4 border-t border-gray-200 md:sticky bg-white/50 backdrop-blur-2xl h-fit">
        <ActionBar />
        <Input type="text" placeholder="Type something..." className="flex-1" endContent={<PaperPlaneRight />}  />
      </footer> 
    </div>
  );
}


const ActionBar = () => {
  const [showBar, setShowBar] = useState(false);

  const actions = [
    { icon: <ImageIcon />, onClick: () => console.log("Image") },
    { icon: <Camera />, onClick: () => console.log("Camera") },
    { icon: <MapPin />, onClick: () => console.log("Camera") },
  ];  return (
  <div className="relative flex flex-col items-center bg-white rounded-xl ">
      {/* Sub actions */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute flex flex-col gap-2 p-2 bg-white border border-gray-200 shadow-lg shadow-neutral-600/10 rounded-3xl bottom-12"
          >
            {actions.map((a, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <Button isIconOnly variant="light" className="" onPress={a.onClick}>
               {a.icon}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <Button
        isIconOnly
        variant="flat"
        className="z-10 p-2"

        onPress={() => setShowBar((prev) => !prev)}
      >
        <FilePlus />
      </Button>
    </div>
  );
};
