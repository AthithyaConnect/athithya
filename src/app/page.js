"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function MainPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const formSubmitted = () => {
    setSubmitted(true);
  };

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
        <div className="absolute inset-0 bg-black/30 bg-opacity-60"></div>

        {/* Content container */}
        <div className="relative z-10 items-center justify-center px-6 text-center">
          {/* <h2 className="mb-2 text-sm font-semibold tracking-wide text-yellow-300 uppercase md:text-2xl">
            Site is under construction */}
          <div className="flex justify-center w-full gap-0">
            <Image
              src="/logo-light.svg"
              alt="Athithya Logo"
              width={1000}
              height={1000}
              className="w-40 mb-6"
            />
          </div>

          <h1 className="mb-2 text-4xl font-medium md:text-5xl ">
            Welcome to <span className="font-serif italic ">Athithya</span>
          </h1>
          <h2 className="mb-2 text-sm tracking-wide text-white uppercase md:text-xl">
            More than travel, feel the experience!
          </h2>

         <div className="flex items-center justify-center">
           <div className=" p-[4px] justify-center self-center items-center mt-12 w-fit rounded-full rainbow-border shadow-xl shadow-black/50">
            <Button
              variant="solid"
              className="px-6 py-2 text-black bg-white rounded-full "
              radius="full"
              onPress={() => router.push("/comming-soon")}
            >
              Get Early Access
            </Button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
