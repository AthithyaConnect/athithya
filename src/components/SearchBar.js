"use client";
import { useState } from "react";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react";
import { Input } from "@heroui/react";

export default function SearchBar({ onChange }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-between px-2 gap-2  py-2 bg-gray-100 rounded-full ">
      <Input
        startContent={<MagnifyingGlass className="text-gray-500" />}
        placeholder="Search..."
        className="bg-transparent w-full "
        classNames={{
          input: [
            "bg-white",
            "overflow-hidden",
            "rounded-full",
            "shadow-none",
            "px-2",
            "py-3",
            "h-fit",
            "text-md",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-white",
            "rounded-full",
            "shadow-none",
            "w-full",
            "px-2",
            "h-fit",
          ],
        }}
      />
      <div className="p-2 rounded-full bg-white ">
        <SlidersHorizontal />
      </div>
    </div>
  );
}
