"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputOtp } from "@heroui/input-otp";
import Image from "next/image";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  // if otp value is less than 4 characters, empty error

  const handleComplete = (value) => {
    if (value !== "1874") {
      setError("Invalid OTP");
      return;
    }
    const expires = new Date(Date.now() + 300 * 60 * 1000).toUTCString(); // 10 mins
    document.cookie = `otp=${value}; path=/; expires=${expires}`;
    setError(null);
    router.push("/u/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <Image
        src={
          "https://img.freepik.com/free-photo/aerial-shot-small-village-hill-surrounded-by-forested-mountains_181624-45576.jpg?t=st=1753781887~exp=1753785487~hmac=c80417687d36e4d84d1d4ac996c873241fceac76f7c8a11fc446b499776621b4&w=1380"
        }
        alt="Athithya"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 right-0 object-cover w-screen h-screen mx-auto mb-6 shadow-lg brightness-60"
      />
      <div className="z-10 flex flex-col items-center justify-center p-6 text-white shadow-lg rounded-2xl bg-black/50 backdrop-blur-md">
        <h1 className="text-xl font-semibold ">Welcome to Athithya</h1>
              <p className="z-10 p-4 text-xs text-white"> Site is under construction </p>

        <InputOtp
          length={4}
          radius="full"
          variant="faded"
          type="password"
          value={otp}
          onValueChange={(val) => {
            setOtp(val);
            setError(null);
          }}
        
          onComplete={handleComplete}
          className={`w-fit max-w-xs text-black   ${error ? "border-red-500" : ""}`}
        />
      </div>
      <p className="z-10 p-4 text-xs text-white"> © Athithya 2025 </p>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
