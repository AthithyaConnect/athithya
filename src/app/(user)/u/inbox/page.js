"use client";

import { useState } from "react";
import SearchBar from "@/components/cards/SearchBar";
import MessageCard from "@/components/cards/MessageCard";

export default function InboxPage() {
  const [search, setSearch] = useState("");

  const messages = [
    {
      id: 1,
      avatar: "https://cdn.dribbble.com/userupload/16677492/file/original-5520cb858b37544dbf2ea1f2b558d55f.jpg?resize=1504x1128&vertical=center",
      name: "Sophie Moore",
      message: "Looks amazing!",
      time: "2m ago",
      isOnline: true,
      isRead: false,
    },
    {
      id: 2,
      avatar: "https://cdn.dribbble.com/userupload/13037042/file/original-57a0ee0cff3339e49ec2f1b897b45d66.png?format=webp&resize=640x480&vertical=center",
      name: "Jason Lee",
      message: "See you soon!",
      time: "5m ago",
      isOnline: false,
      isRead: true,
    },
    {
      id: 3,
      avatar: "https://cdn.dribbble.com/userupload/16265349/file/original-04d33c2b6918da4a4fd5b4ff57145aef.png?resize=1504x1128&vertical=center",
      name: "Emma Green",
      message: "Thanks for the info!",
      time: "10m ago",
      isOnline: true,
      isRead: false,
    },
    {
      id: 4,
      avatar: "https://cdn.dribbble.com/userupload/16402961/file/original-8b0e8e9c8633301d519c0e652a652a78.png?format=webp&resize=400x300&vertical=center",
      name: "Michael Smith",
      message: "Let me know when you arrive.",
      time: "1h ago",
      isOnline: false,
      isRead: true,
    },
  ];

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      {/* Title */}
      <h1 className="mb-4 text-xl font-semibold text-gray-900">Inbox</h1>

      {/* Search bar */}
      <SearchBar showFilters={false} />

      {/* Message List */}
      <div className="space-y-2">
        {filteredMessages.map((msg, idx) => (
          <MessageCard key={idx} {...msg} />
        ))}

        {filteredMessages.length === 0 && (
          <p className="pt-4 text-sm text-center text-gray-400">
            No messages found
          </p>
        )}
      </div>
    </div>
  );
}
