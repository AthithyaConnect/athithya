"use client";

import { useState } from "react";
import SearchBar from "@/components/cards/SearchBar";
import MessageCard from "@/components/cards/MessageCard";

export default function InboxPage() {
  const [search, setSearch] = useState("");

  const messages = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      name: "Sophie Moore",
      message: "Looks amazing!",
      time: "2m ago",
      isOnline: true,
      isRead: false,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Jason Lee",
      message: "See you soon!",
      time: "5m ago",
      isOnline: false,
      isRead: true,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emma Green",
      message: "Thanks for the info!",
      time: "10m ago",
      isOnline: true,
      isRead: false,
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
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
