"use client";
import PackageCard from "../cards/PackageCard";

export default function HostList({ packages = [] }) {
  return (
    <div className="">
      <h2 className="mb-2 text-md">
        <span className="font-semibold">Complete Packages</span>{" "}
       </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {packages.map((packageItem) => (
            <div key={packageItem.title} className="min-w-[300px]">
              <PackageCard {...packageItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
