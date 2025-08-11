"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  return (
    <div className="full-wrapper">
       <div
      className="flex flex-col items-center justify-center w-full min-h-screen text-white bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand_335224-1063.jpg?t=st=1754894765~exp=1754898365~hmac=7d834cfb16b0444b9211efab1cec4d602c5340e0b4ecd3ced2157ef1b37ccd8b&w=2000')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-60"></div>

      {/* Content container */}
      <div className="relative z-10 px-6 text-center">
        <h2 className="mb-2 text-sm font-semibold tracking-wide text-yellow-300 uppercase md:text-2xl">
          Site is under construction
        </h2>

        <h1 className="mb-6 text-4xl font-medium md:text-5xl ">Welcome to <span className="font-serif italic ">Athithya</span></h1>

      <Button 
      size="lg"
      onPress={()=> router.push("/login")}
       className="text-white rounded-full bg-black/40 backdrop-blur-md"
      >
        Login
      </Button>
      </div>
    </div>
    </div>
  );
}
