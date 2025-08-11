"use client";
import { useState } from "react";
import HostCard from "@/components/cards/HostCard";
import { hosts } from "@/constants";

export default function Step4FoodStay({ formData, setFormData }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {hosts.slice(0, 4).map((host) => (
        <div
          key={host.title}
          onClick={() => setFormData({ ...formData, stay: host })}
          className={`rounded-xl cursor-pointer transition border-2 ${
            formData.stay?.title === host.title
              ? "border-blue-500 bg-blue-50"
              : "border-transparent"
          }`}
        >
          <HostCard {...host} disableNavigation showViewButton />
        </div>
      ))}
    </div>
  );
}
