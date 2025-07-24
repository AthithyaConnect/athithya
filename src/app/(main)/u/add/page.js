"use client";

import AddPostGrid from "./components/AddPostGrid";
import SmartGridUpload from "./components/SmartGrid";

export default function AddPostPage() {
  return (
    <div className="min-h-[100dvh] bg-gray-50 p-4">
      <h1 className="mb-4 text-xl font-bold">Create Post</h1>
    <SmartGridUpload/>
      {/* Add form for title, quote, content, submit later */}
    </div>
  );
}
