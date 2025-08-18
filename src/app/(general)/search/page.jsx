"use client";

import SearchBar from "@/components/cards/SearchBar";
import { Avatar, User } from "@heroui/react";

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-4">
      <SearchBar showFilters={false} />
      <div className="flex flex-col w-full gap-2">
        {sampleUsers.map((user) => (
          <UserSearch key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "@zutnuko",
    role: "Software Engineer",
    followers: "124",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "@samfranz",
    role: "Software Engineer",
    followers: "354",
    image:
      "https://cdn.dribbble.com/userupload/3396433/file/original-a7938da0f7cbc7a5a75d4237da6d2d02.png",
  },
  {
    id: 3,
    name: "John Doe",
    username: "@roanny",
    role: "Software Engineer",
    followers: "14",
    image:
      "https://cdn.dribbble.com/userupload/16677492/file/original-5520cb858b37544dbf2ea1f2b558d55f.jpg",
  },
];

const UserSearch = ({ user }) => {
  const { name, role, image, username, followers } = user;
  return (
    <div className="flex flex-row items-center w-full gap-2 p-2 border border-neutral-200 rounded-3xl ">
      <Avatar src={image} name="John Doe" size="md" className=" w-14 h-14" />
      <div className="flex flex-col justify-center ">
        <div className="font-medium ">{username}</div>
        <div className="text-xs text-gray-500">
          {name} · {followers} followers
        </div>
      </div>
      <div className="text-sm text-gray-400"></div>
    </div>
  );
};
