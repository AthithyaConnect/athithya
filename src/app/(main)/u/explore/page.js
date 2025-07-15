"use client";
import { useState } from "react";
import SearchBar from "@/components/cards/SearchBar";
import CategorySelector from "@/components/cards/CategorySelector";
import HostList from "@/components/list/HostList";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);

  const hosts = [
    {
      title: "3BHK Villa with Mountain View",
      address: "123, Rajpur Road, Near IT Park, Dehradun",
      rating: "4.8/5 (120)",
      price: 900,
      imageUrl:
        "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?w=740",
    },
    {
      title: "Cozy Studio in City Center",
      address: "45, Paltan Bazar, Dehradun",
      rating: "4.6/5 (90)",
      price: 650,
      imageUrl:
        "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683419.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
    },
    {
      title: "Luxury Treehouse Escape",
      address: "Forest Retreat, Sahastradhara Road",
      rating: "4.9/5 (75)",
      price: 1200,
      imageUrl:
        "https://img.freepik.com/free-photo/luxury-architecture-exterior-design_23-2151920954.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
    },
    {
      title: "Budget Hostel for Backpackers",
      address: "6, ISBT Road, Near Bus Stand",
      rating: "4.3/5 (210)",
      price: 300,
      imageUrl:
        "https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
    },
    {
      title: "Riverside Cottage Retreat",
      address: "Rishikesh Highway, near Tapovan",
      rating: "4.7/5 (130)",
      price: 850,
      imageUrl:
        "https://img.freepik.com/free-photo/wooden-cottage-snowy-forest-night_181624-49557.jpg?w=740",
    },
    {
      title: "Mountain Cabin with Bonfire",
      address: "Mussoorie Road, Dehradun",
      rating: "4.5/5 (98)",
      price: 750,
      imageUrl:
        "https://img.freepik.com/free-photo/small-cozy-cabin-wooden-deck-winter-evening-generative-ai_188544-12587.jpg?w=740",
    },
    {
      title: "Modern Apartment with Workspace",
      address: "IT Park Road, Dehradun",
      rating: "4.6/5 (102)",
      price: 700,
      imageUrl:
        "https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263520.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <div className="px-2 py-4 flex flex-col gap-12 bg-white min-h-screen">
      <SearchBar onChange={(val) => setSearch(val)} />
      <CategorySelector onSelect={(val) => setCategory(val)} />
      <HostList hosts={hosts} />
    </div>
  );
}
