"use client";
import { useState } from "react";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react";
import { Input } from "@heroui/react";

export default function SearchBar({
  onChange,
  showFilters = true,
  onFilterClick = () => {},
}) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-full ">
      <Input
        startContent={<MagnifyingGlass className="text-gray-500" />}
        placeholder="Search..."
        className="w-full bg-transparent "
        classNames={{
          input: [
            "bg-white",
            "overflow-hidden",
            "rounded-full",
            "shadow-none",
            "px-4",
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
            "px-3",
            "h-fit",
          ],
        }}
      />
      {showFilters && (
        <div
          onClick={onFilterClick}
          className="p-2 pr-4 bg-white rounded-full "
        >
          <SlidersHorizontal />
        </div>
      )}
    </div>
  );
}
