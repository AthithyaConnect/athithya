"use client";
import HostCard from "../cards/HostCard";

export default function HostList({ hosts = [] }) {
  return (
    <div className=" px-2 flex flex-col gap-2">
      <h2 className=" text-md">
        <span className="font-semibold">Top Local Hosts in</span>{" "}
        <span className="text-gray-500">(Clementown, Dehradun)</span>
      </h2>
      {hosts.map((host) => (
        <HostCard key={host.title} {...host} />
      ))}
    </div>
  );
}
