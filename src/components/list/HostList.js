"use client";
import HostCard from "../cards/HostCard";

export default function HostList({ hosts = [] }) {
  return (
    <div className="">
      <h2 className="mb-2 text-md">
        <span className="font-semibold">Top Local Hosts in</span>{" "}
        <span className="text-gray-500">(Clementown, Dehradun)</span>
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {hosts.map((host) => (
            <div key={host.title} className="min-w-[300px]">
              <HostCard {...host}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
